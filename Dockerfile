FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
ENV NODE_ENV=production
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
RUN npm run build

CMD ["npm", "start"]
