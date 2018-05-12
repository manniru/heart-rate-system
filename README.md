# heart-rate-system
Cloud-Based Realtime Heart Rate Monitoring System

## Start up script
```
cd /Users/mannir/GitHub/heart-rate-system/server
json-server --watch db.json -p 3001

cd /Users/mannir/GitHub/heart-rate-system
REACT_APP_DEV_API_URL=http://localhost:3001 yarn start
```
