# Earthfile
VERSION 0.6

# Base image
FROM node:18-alpine

WORKDIR /app

# Target: install dependencies
install:
    COPY package.json package-lock.json ./
    RUN npm ci

# Target: run tests
test:
    DEPENDS install
    COPY . .
    RUN npm test

# Target: build the React app
build:
    DEPENDS install
    COPY . .
    RUN npm run build
    SAVE ARTIFACT build/ AS LOCAL build/
