# Use an official Node.js runtime as the base image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package-lock.json ./
COPY package.json ./

# Install the project dependencies
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use a lightweight web server to serve the built Angular app
FROM nginx:alpine

# Copy the built Angular app to the Nginx public directory
COPY --from=build /usr/src/app/dist/dungeon-chaos-frontend /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
