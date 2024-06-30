FROM nginx:alpine
# Copy the built Angular app to the Nginx public directory
COPY ./dist/dungeon-chaos-frontend /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]