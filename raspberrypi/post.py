import requests
import json

url = 'https://smart-heart-rate.firebaseio.com/pulses/1/.json'
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.put(url, data=json.dumps(payload))

print r.text
print r.status_code