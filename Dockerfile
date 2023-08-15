# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /root

# Copy the application files into the working directory
COPY . /root

# Change the directory to the application folder
WORKDIR /root

# Install the application dependencies
RUN npm install

# Expose port 3000 for the application
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "run", "serve"]
