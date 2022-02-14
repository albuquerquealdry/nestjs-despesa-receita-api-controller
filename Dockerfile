FROM node:14-alpine

WORKDIR /workspace

COPY package.json  /workspace/

COPY . .

RUN npm install

CMD ["npm", "start:dev"]