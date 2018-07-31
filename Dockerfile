FROM node:8-stretch
RUN mkdir -p /app &&
COPY ./ /app
RUN apt-get update && apt-get install lirc \
    && cd /app
    && mv ./qemu-arm-static /usr/bin \
    && mv ./lirc /etc \
    && mkdir var/run/lirc
    && npm install
WORKDIR /app
CMD ['npm start']