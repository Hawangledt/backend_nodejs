#!/bin/bash
set -e

npx sequelize-cli db:migrate

node ./src/index.js