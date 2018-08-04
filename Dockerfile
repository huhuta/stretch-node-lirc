FROM huhuta/node-lirc:npm-installed
COPY ./ ./
CMD ["sh", "-c", "lircd && npm start"]
