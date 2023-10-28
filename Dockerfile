FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/default.conf
COPY build/ /etc/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
