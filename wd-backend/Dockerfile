FROM kkarczmarczyk/node-yarn

MAINTAINER Kacper Wiszczuk

COPY . /weather_dashboard

WORKDIR /weather_dashboard

RUN yarn install

EXPOSE 9000

CMD yarn start
