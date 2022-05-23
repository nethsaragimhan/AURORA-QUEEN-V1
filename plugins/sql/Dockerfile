
FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nethsaragimhan/AURORA-QUEEN-V1 /root/AURORA-QUEEN-V1
WORKDIR /root/AURORA-QUEEN-V1/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines
RUN git clone https://github.com/thinura2003/media

CMD ["node", "bot.js"]


