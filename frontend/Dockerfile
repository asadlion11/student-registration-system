# Use a lightweight web server image
# FROM nginx:alpine

# # Set the working directory
# WORKDIR /usr/share/nginx/html

# # Copy the static files (index.html, folders, scripts, styles, etc.)
# COPY . .

# # Expose port 80
# EXPOSE 80

# # Start the nginx server
# CMD ["nginx", "-g", "daemon off;"]



# Use a lightweight web server image (nginx)
# Use a lightweight web server image (nginx)
# Use a lightweight web server image (nginx)
# Use a lightweight web server image (nginx)
# Use a lightweight web server image (nginx)
FROM nginx:alpine

# Set the working directory for nginx
WORKDIR /usr/share/nginx/html

# Copy the contents of the frontend directory (where the Dockerfile is located) to nginx's HTML directory
COPY . /usr/share/nginx/html/

# Expose port 80 for the frontend
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]