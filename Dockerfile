# Dockerfile

# base image
FROM node:lts-alpine3.16

# create & set working directory
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
EXPOSE 6069
CMD node server.js
