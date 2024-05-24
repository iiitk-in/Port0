FROM node:12.18-alpine

ENV PORT=8080

EXPOSE 8080
RUN apk add git
RUN git clone https://www.github.com/iiitk-in/port0
WORKDIR /port0

RUN npm i
RUN npm i next

RUN npx next build


CMD ["npx","next","start","-p",$PORT]
