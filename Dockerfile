FROM node:8.0.0

ENV http_proxy=http://newproxy.ah.nl:8080
ENV https_proxy=http://newproxy.ah.nl:8080

COPY karma.conf.js /usr/app/karma.conf.js
COPY package.json /usr/app/package.json

WORKDIR /usr/app

RUN npm install
