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

## Run on Local
```
cd /Users/mannir/GitHub/heart-rate-system/server
json-server --watch db.json --middlewares ./middleware.js --port 3001
```

## Run on Cloud
```
cd /root/heart-rate-system
json-server --watch db.json --port 3001

cd /root/heart-rate-system
yarn start

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

# Links
https://pulsesensor.com/pages/pulse-sensor-amped-arduino-v1dot1
https://code.google.com/archive/p/pulse-sensor/downloads
http://dlnmh9ip6v2uc.cloudfront.net/datasheets/Sensors/Biometric/PulseSensorAmpd%20-%20Schematic.pdf
