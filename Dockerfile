FROM node:14
WORKDIR /app
COPY package.json .
RUN yarn
RUN npx browserslist@latest --update-db
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]