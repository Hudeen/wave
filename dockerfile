FROM node:latest

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

EXPOSE 8103

CMD ["yarn", "dev"]
