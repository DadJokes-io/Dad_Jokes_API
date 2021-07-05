#!/bin/bash
FROM node:alpine

# Set working directory
WORKDIR /usr/app


# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cacheto save re-installing dependencies if unchanged
COPY ./package*.json ./yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 8080

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD ["node", "./lib/index.js"]