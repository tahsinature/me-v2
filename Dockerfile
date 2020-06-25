FROM node:12-alpine

RUN mkdir /app /app/src /app/public

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

ENV PATH=/app/node_modules/.bin:$PATH

CMD [ "npm", "start" ]