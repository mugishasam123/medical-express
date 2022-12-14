FROM node:alpine As builder
WORKDIR /app
COPY ./package.json ./
RUN npm install --omit=dev
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["node","server.js"]