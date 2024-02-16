FROM node:21-alpine3.18 as builder

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY . .

RUN pnpm install

RUN pnpm build

CMD [ "pnpm", "run","serve" ]