const express = require('express'); 
const { Pool } = require('pg');
const cors = require('cors');
const pool = new Pool({
  user: 'gyfrank',
  host: 'postgres',
  database: '7403_assignment_database',
  password: 'Qwer1234!',
  port: 5432,
});

const app = express();
app.use(cors());
app.use(express.json());

// 示例查询接口
app.get('/api/votes', (req, res) => {
  pool.query('SELECT * FROM voteTable', (error, results) => {
    if (error) {
      return res.status(500).json({ code:500, error: error.message });
    }
    if (results.rowCount === 0) {
        return res.status(404).json({ code:404, error: 'No records found' });
      }
    res.status(200).json({ code:200, message: 'Data retrieved successfully', data: results.rows });
  });
});

// 根据 ID 更新数据的 POST 接口
app.post('/api/votes/update', (req, res) => {
    console.log(req.body)
    const { name, last_vote } = req.body; // 从请求体中提取 name 和 last_vote
    
    if (!name || !last_vote) {
      return res.status(400).json({ code:400, error: 'Missing required fields: name, last_vote' });
    }
  
    // SQL 查询，查找指定 name 的记录并更新 vote_number 和 last_vote
    const query = `
      UPDATE voteTable
      SET vote_number = vote_number + 1, last_vote = $1
      WHERE name = $2
      RETURNING *;`; // 返回更新后的数据
  
    const values = [last_vote, name]; // 填充 SQL 占位符
  
    // 执行更新查询
    pool.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ code:500, error: error.message });
      }
  
      if (results.rowCount === 0) {
        return res.status(404).json({ code:404, error: 'Record not found for the given name' });
      }
  
      // 返回更新后的数据
      res.status(200).json({ code:200, message: 'Record updated successfully', data: results.rows[0] });
    });
});


app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});