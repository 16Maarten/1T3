FROM node:latest
RUN mkdir -p /usr/src/app/
RUN chown -R node:node /usr/src/app/
WORKDIR /usr/src/app
RUN npm install -g @vue/cli @vue/cli-service-global
USER node