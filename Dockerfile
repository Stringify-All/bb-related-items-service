#dockerfile is used to build docker images

#docker images are read only 'templates' that serve as instructions to create docker containers (containers are created at runtime)

#docker containers packege an applicaiton with dependencies

#docker containers make applicaitons run faster, and run in different OSs or environments

FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 9001

CMD [ "npm", "start" ]

#sudo docker run -p 9001:3000 relateditems
