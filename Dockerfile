FROM node:13.10.1

WORKDIR /usr/src/app

# copy both package.json and package-lock.json
COPY package*.json ./

# install packages
RUN npm install

# bundle the application source
COPY . .
EXPOSE 10254
CMD [ "node", "server.js" ]
