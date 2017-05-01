#!/bin/bash
set -x

SERVER_URL="https://rocketchat.inox.co.th"
TARGET="$HOME/rocket.chat-bundle"

export NODE_ENV="production"

meteor npm install --save bcrypt && \
	meteor npm install -g node-gyp node-pre-gyp && \
	meteor npm install && \
	meteor add rocketchat:internal-hubot meteorhacks:kadira && \
	meteor build --headless "$TARGET"

#	meteor build --server "$SERVER_URL" --directory "$TARGET"
