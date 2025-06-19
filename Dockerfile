# Use official Nginx image
FROM nginx:alpine

# Copy your site files to Nginx's default public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]