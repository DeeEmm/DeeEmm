---
published: true
title: Handheld Wifi MPG for ESP32 based CNC Controllers
tags: CNC, ESP32, GRBL, GRBL-ESP32, ESP3D
category: CNC
date: 2021-07-21 08:30:00 +9:30
---

![https://camo.githubusercontent.com/ffe4412aaf9644bd0c38fbe52e590e60352f81a39de2eb3aa524c7febb454f21/687474703a2f2f696d672e796f75747562652e636f6d2f76692f5f444963444539515930412f302e6a7067](http://www.youtube.com/watch?v=_DIcDE9QY0A)

##It all starts ith an idea...

I had an idea to create a WiFi pendant using an MPG jog-wheel, axis and speed selectors in a pendant with it's own ESP32 controller. I figured that it would probably be trivial enough to squeeze an ESP32 into one of those cheap MPG pendants you can buy on ebay. It can then communicate via WiFi with the GRBL-ESP32 or ESP3D-WEB-UI. This bypasses the need for additional I/O and potentially even code changes within the GRBL-ESP32 core if it utilises existing communication protocols. Theoretically any command that you can currently use in the web interface can be mimic'd / duped by another ESP32 posing as a browser to control the machine.

##Enter Marlin stage left...

Based on this idea I built a jog wheel interface for a Marlin powered CNC that I built. The issue with Marlin is that it does not have enough spare I/O to be able to use a jog wheel directly without hacking the code, which I always try to avoid as it makes maintining machines a bit of a nightmare. So first preference is always to try and work within the constraints of the code. Marlking actually comes with an analog joystick interface so that you can utilise off the shelf gaming controllers. But a jog wheel was really what I wanted to use, as I prefer the tactile reponse. It's also something that I am familiar with from my other CNC machines.

The logical solution therefore was to convert jog wheel data into analog joystick data and utilise the existing joystick interface, and so the idea was born. The project consts of two parts. The first part is reading the jog wheel data. This is a simple endeavor and involves reading the two outputs from the jog wheel, counting pulses and checking which channel signal leads so tha the direction of rotation can be determined. Sounds a bit trikedy-complicado, but the reality is that there are a plethora of libraries and code examples available for rotary encoder buttons that can be used as a basis.

So, translating MPG fucntionality into analog speed and direction takes the pulse frequency from the jog encoder, and uses this to set the analog resistance using a voltage controlled resistor (VCR). The axis selector switch selects the axis and enables the appropriate VCR, whilst the speed multiplier switch acts as a multipler and simply multiplies the pulse count accordingly.

Code crunching is taken care of by an Arduino Nano and three 10kohm MPC4151 Voltage controlled resistors are used to provide the necessary output.

## BOM
###

- Arduino Nano
- 3 off MPC4151 Voltage Controlled Resistors (10kohm)
- X,Y,Z selector switch
- 1x,10x,100x selector switch
- Encoder jogwheel
- OR MPG jogwheel pendant

## Download
###

The code is available under the GPL license and can be downloaded from my GitHub page.

https://github.com/DeeEmm/Marlin-CNC-Pendant

## License
###

This project is released under the GPLV3 license. For details on usage please refer to the license file included with this project



## Further Information
###

- https://github.com/DeeEmm/Marlin-CNC-Pendant
- https://deeemm.com/index.php/entry/general/marlin-cnc-pendant

## Reference
###

- http://cdn.sparkfun.com/datasheets/Components/General%20IC/22060b.pdf
- http://www.learningaboutelectronics.com/Articles/MCP4131-digital-potentiometer-circuit.php

