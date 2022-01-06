FROM node:14-alpine
WORKDIR /app
COPY  package.json /app
RUN npm install
COPY . .
EXPOSE 4444
CMD ["npm", "test-docker"]