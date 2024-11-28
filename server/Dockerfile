# 使用官方 Node.js 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 将 package.json 和 package-lock.json 复制到容器中
COPY package*.json ./

# 安装依赖
RUN npm install

# 将项目文件复制到容器中
COPY . .

# 暴露应用端口
EXPOSE 3000

# 设置容器启动时的默认命令
CMD ["node", "server.js"]
