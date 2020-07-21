import paho.mqtt.client as mqtt
import time
import json
from random import *
def on_connect(client, usrdata, flags, rc):
    if rc==0:
        print("connect ok")
client=mqtt.Client("python1")
client.on_connect=on_connect
client.connect("52.186.145.109")
# client.connect("40.112.49.62")

#send msg
#status=random()
value = randint(1,1023)
# msg=[{ "device_id":"Mois","values":[str(value)]}]
msg=[{ "device_id":"Mois","values":[str(250)]}]
y=json.dumps(msg)
print(y)
client.publish("Topic/Mois",y)