#!/bin/bash

SERVER_URL="https://rocketchat.inox.co.th"
TARGET="/var/www/rocket.chat"

export NODE_ENV="production"

meteor npm install --save bcrypt
meteor add rocketchat:internal-hubot meteorhacks:kadira
meteor build --server "$SERVER_URL" --directory "$TARGET"
