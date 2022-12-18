# Dockerfile

# base image
FROM node:lts-alpine3.17

# create & set working directory
WORKDIR /app

#Change TimeZone
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Kolkata /etc/localtime && echo "Asia/Kolkata" > /etc/timezone && apk del tzdata

#Expose ports
EXPOSE 6069

# copy dependencies files
COPY package.json .

# install dependencies
RUN npm install

# Copy source files
COPY . /app

#Change ownership
RUN chown -R node:node /app

#Switch User
USER node

# start app
CMD npm run start
