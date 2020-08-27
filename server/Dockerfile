FROM node:12.18-alpine
ENV NODE_ENV production
RUN mkdir -p /usr/src/nest
ADD . /usr/src/nest
WORKDIR /usr/src/nest
RUN  npm install
EXPOSE 6324
CMD ["npm", "run", "start:prod"]