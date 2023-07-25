FROM node:18.16.1

WORKDIR /app

COPY ./package*.json ./

RUN npm install --omit=dev
RUN npm install -g sequelize-cli

COPY . .

COPY start.sh .

EXPOSE 3333

CMD ["npx","sequelize-cli","db:migrate"]

CMD ["node","./src/index.js"]
