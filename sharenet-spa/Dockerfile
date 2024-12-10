# Step 1: Build the app
FROM node:18 as build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source code and build
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built files to Nginx's default HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
