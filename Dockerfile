FROM arm32v7/node:8-stretch
COPY ./ /
RUN apt-get update && apt-get install -y lirc \
    && mv /qemu-arm-static /usr/bin \
    && mv /lircd.conf /etc/lirc/ \
    && mkdir var/run/lirc \
    && npm install
CMD ['npm start']