FROM node:14-alpine

WORKDIR /workspace

COPY package.json  /workspace/

RUN npm

COPY . .

RUN npm i

CMD ["npm", "start:dev"]