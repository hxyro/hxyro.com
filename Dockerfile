FROM node:17-alpine as base
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx
COPY --from=base /app/build /usr/share/nginx/html/
