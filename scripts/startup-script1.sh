#! /bin/bash
cd /root/heart-rate-system && git reset --hard HEAD && git pull && yarn && cd /root/heart-rate-system/server && npm i && nodemon app.js && cd /root/heart-rate-system && REACT_APP_DEV_API_URL=https://35.232.234.165:3001 yarn start
EOF
