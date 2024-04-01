ARG NODE_VERSION=20.11.1
ARG NGINX_VERSION=1.25.3

FROM node:$NODE_VERSION-alpine3.18 AS react_development

WORKDIR /usr/src/project

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json package-lock.json vite.config.js ./

RUN set -eux; \
    npm install

COPY . ./

CMD npm run dev

FROM react_development AS react_build

RUN set -eux; \
    npm run build

FROM nginx:$NGINX_VERSION-alpine as react_nginx

COPY docker/nginx/default.conf /etc/nginx/conf.d/

WORKDIR /usr/src/admin/build

COPY --from=react_build /usr/src/project/dist ./
