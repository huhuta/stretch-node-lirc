FROM node:8-stretch
RUN mkdir -p /app
COPY ./ /app
RUN cd /app && mv ./qemu-arm-static /usr/bin \
    && mv ./lirc /etc \
    && npm install
WORKDIR /app
CMD ['npm start']