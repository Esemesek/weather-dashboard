FROM nginx:1.13.0-alpine

MAINTAINER Kacper Wiszczuk

RUN apk add --no-cache nodejs \
    && apk add --no-cache bash

WORKDIR /weather_dashboard

COPY . /weather_dashboard
COPY ./config/nginx.conf /etc/nginx

RUN npm install \
    && npm build \
    && mkdir -p /opt/weather_dashboard \
    && cp -r www /opt/weather_dashboard

EXPOSE 80
