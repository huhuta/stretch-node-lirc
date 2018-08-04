FROM arm32v7/node:8-stretch
COPY ./ /
RUN apt-get update && apt-get install -y lirc \
    && mv /qemu-arm-static /usr/bin \
    && mv /etc_lirc/* /etc/lirc/ \
    && mkdir var/run/lircd \
    && npm install
CMD ['node /server.js']
