FROM node:22.14-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Expose and run
EXPOSE 3000
CMD ["yarn", "dev"]