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

# Added a comment to explain why we are exposing port 3000

EXPOSE 3000

# Define the entry point for the container

# Since the error message does not indicate any problems with the entry point, no changes are needed here

CMD ["npm", "start"]
