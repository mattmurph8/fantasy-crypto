# docker build -t crypto-kings .
# docker tag crypto-kings antoniokaplan/crypto-kings:1
# docker push antoniokaplan/crypto-kings:1

# docker pull antoniokaplan/crypto-kings:1
# docker run --rm -d -p 8000:8080 antoniokaplan/crypto-kings:1


FROM node:10.7.0-alpine

COPY package.json /usr/html/
COPY yarn.lock /usr/html/
COPY app.js /usr/html/

WORKDIR /usr/html/
RUN mkdir /usr/html/logs

RUN yarn

EXPOSE 8080

# start application, linting & unit specs must pass for this to run
CMD ["yarn", "start"]
