#!/usr/bin/env python
import time
import serial
import requests
import json
import re


ser = serial.Serial(
#    port='/dev/ttyACM0',
   port = '/dev/cu.usbmodem1421',
   baudrate = 115200,
   parity=serial.PARITY_NONE,
   stopbits=serial.STOPBITS_ONE,
   bytesize=serial.EIGHTBITS,
   timeout=1
)
counter=0


while 1:
    x=ser.readline()
    if (len(x) > 2):
        bpm = re.sub(r'\r\n', '', x)
        milli_sec = int(round(time.time() * 1000))
        url = 'https://smart-heart-rate.firebaseio.com/pulses/' + str(milli_sec) + '/.json'
        payload = {'key1': 'value1', 'bpm': bpm}
        r = requests.put(url, data=json.dumps(payload))
        print r.text
        print r.status_code
        print x


