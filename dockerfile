FROM node:9.4.0
RUN mkdir /code
COPY package.json /code
WORKDIR /code
RUN npm install
COPY . /code
RUN npm run build

EXPOSE 5000

CMD ["npm","start"]

