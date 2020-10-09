FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 9001

CMD [ "npm", "start" ]

#sudo docker run -p 9001:9001 relateditems
#sudo docker run -d -p 9003:3000 -v $(pwd):/src/app --name results_container results
