# Get the node image from the docker hud
FROM node:alpine
# Create a folder in the docker file
WORKDIR '/app'
# Copy package.json in the same root folder
COPY package.json .
# Install the packages
RUN npm install
# Copy all the content in the docker file
COPY . .
# Run the application
CMD ["npm", "run", "dev"]