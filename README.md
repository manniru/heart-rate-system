# heart-rate-system
Cloud-Based Realtime Heart Rate Monitoring System

## Start up script
```
cd /Users/mannir/GitHub/heart-rate-system/server
json-server --watch db.json -p 3001

cd /Users/mannir/GitHub/heart-rate-system
REACT_APP_DEV_API_URL=http://localhost:3001 yarn start
```
## Building
```
yarn build
firebase deploy
```

Login Details
Username=admin
Password=admin

User1
username=patient1
password=patient1

User2
username=patient2
password=patient2