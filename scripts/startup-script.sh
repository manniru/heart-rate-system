#! /bin/bash
cd /root/heart-rate-system && git reset --hard HEAD && git pull && yarn && cd /root/heart-rate-system/server && npm i && json-server --watch db.json --port 3001 && cd /root/heart-rate-system && yarn start
EOF