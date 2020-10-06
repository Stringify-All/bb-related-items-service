FROM node:current-slim

WORKDIR /usr/Desktop/FEC/bb-related-items-service
COPY package.json .
RUN npm install
RUN npm build

WORKDIR /usr/Desktop/FEC/bb-related-items-service/server
COPY package.json .
RUN npm install
# RUN npm start

EXPOSE 8080
CMD [ "npm", "start", "build" ]

COPY . .