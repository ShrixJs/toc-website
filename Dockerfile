FROM node:20-alpine

ADD . /toc-website/
WORKDIR /toc-website/

RUN npm i && npm run build-prod

RUN npm install -g serve

CMD ["serve", "-s", "./dist", "-l", "3000"]