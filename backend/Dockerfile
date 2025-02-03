# Use the official Node.js 18 slim image
FROM node:18-slim

# Set the working directory for backend
WORKDIR /app/backend

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install --legacy-peer-deps

#install nodemon as globallay
RUN npm install -g nodemon

# Copy the rest of the backend source code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

#Start the backend server
#running scripts was :   "scripts": {
    # "server": "nodemon backend/server.js"
    # },
    #means installed nodemoon as dev dependencies

CMD ["nodemon", "server.js"]
