FROM node:22.12.0

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 5501

# Use correct CMD syntax
CMD ["npm", "run", "dev"]
