# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# 复制构建后的 Vue 静态文件到 Nginx 的默认网站目录
COPY ./6110_vote_page /usr/share/nginx/html/vote
COPY ./6111_results_page /usr/share/nginx/html/results

# 暴露端口，以便外部访问
EXPOSE 6110
EXPOSE 6111
# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]