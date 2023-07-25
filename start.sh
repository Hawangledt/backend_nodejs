#!/bin/bash
set -e

# npm install sequelize-cli

npx sequelize-cli db:migrate

node ./src/index.js