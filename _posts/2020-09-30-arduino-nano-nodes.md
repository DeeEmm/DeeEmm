---
published: true
tags: 
category: general
date: 2020-09-30 20:30:00 +9:30
---
I've been playing with the Reef-Pi system for a while now waiting for hardware to turn up so that I can finish building my system. What I have noted is that the system is inflexible when it comes to integration of third party components. Each integration has to be hard coded by the Reef-pi devs, which means that there is a relatively long cycle for integrating additional stuff. The Raspberry Pi also suffers when it comes to fast cyclical control as it is generally run as a single threaded machine.

This got me to thinking about how device integration could be simplified and the speed issue overcome. What I came up with was a system where Arduino Nanos are used as control nodes. The Nanos can interface with the Rpi using I2C and controlled using a simple API. Each node could then autonomously control an item of equipment like a wavemaker or act as a simple pass-through in the case of equipment such as a sensor

The thing that really got me thinking about this was the possibility of integrating my wavemaker with the reef-pi and essentially ditching the existing controller and connecting the motor directly to the reef-pi. The issue with this is that the control loop may need to control the motor on a millisecond basis, whereas the reef-pi only currently controls equipment on a per second basis 

My current wavemaker (single power head) just has a dial so it effectively has an analog control for wave frequency but I'm not sure on the resolution as it's just an arbitrary 1-10 value on the dial. I recall that setting it up so that the reflected wave was in sync with the generated wave took a bit of fiddling and so it seems reasonable that increased granularity of control may have been of help here. 

Using an Arduino nano as a standalone control node makes sense in this situation as it is able to handle the cyclical control independently of the main Rpi. Receiving control commands via I2c (via the simple API) would allow multiple nodes to be set up. This could also be used for other control tasks such as interfacing to sensors etc. This free's up the Rpi's processor to concentrate on general timer based tasks. It also makes the system very scalable as there would be less memory or processor constraints placed on the main reef-pi controller

Essentially there would be a basic reef-pi driver for the nano that is selectable dependent on the task that the nano is performing - in this case wave maker. The driver communicates with the nano via a simple API. 

For example the wave frequency is sent to the Nano via API. The nano can then be easily controlled with simple on / off commands sent over the API. Once the commands are received the nano controls the item as instructed. The reef-pi can also poll the device to check its health. This could be done over a longer interval. (every 30 secs / minute / 5 minutes / whatever).

The nano could also be used for any other task that you would normally control with the reef-pi, plus many tasks that the reef-pi cannot handle. It would also allow easier third party development as the basic communication between the reef-pi and the node is standardised, whereas the control between the nano and the field device can be written to suit the field device.

Take for example something like a PH tester. There are many different types, some have provisions for interfacing with external devices, some don't. Of those that do, some are 4-20mA, some are 0-10v, some are 0-5v, some are even 0-3.3v. Imagine that the reef-pi nano driver simply expects the value to be communicated in PH digitally. The Reef-pi to nano API requests the PH value, the nano responds with a value between 1-14. The hard code crunching is done in the nano, including connecting to sensors and equipment that have no external interface. 

This massively simplifies the reef-pi code. It also means that the basic nano code can easily be hacked to work with any type of PH tester or ORP or SG or wavemaker or lights or basically anything at all.

Additional devices can easily be added with simple additions to the reef-pi code. In fact if the main control object object is a simple logger then it can easily be added by the end user as they can set the device scaling, scale units and description. The nano code then returns the relevant response when requested. A simple error response can also be sent if there is an issue.

If I have the time I would like to develop this as an idea. there's a lot of merit in its simplicity. It would also potentially allow the system to be used as a universal data logger / controller.

Will get my system set up first and then take a look. I have a PH and conductivity sensor on order that do not interface with the reef-pi system so there is a good opportunity to build something such as this.