---
published: true
title: Handheld Wifi MPG for ESP32 based CNC Controllers
tags: CNC, ESP32, GRBL, GRBL-ESP32, ESP3D
category: CNC
date: 2021-07-21 08:30:00 +9:30
---

I had an idea to create a WiFi pendant using an MPG jog-wheel, axis and speed selectors in a pendant with it's own ESP32 controller. It would probably be trivial enough to squeeze an ESP32 into one of those cheap MPG pendants you can buy on ebay. It can then communicate via WiFi with the GRBL-ESP32 or ESP3D-WEB-UI. This bypasses the need for additional I/O and potentially even code changes within the GRBL-ESP32 core if it utilises existing communication protocols. Theoretically any command that you can currently use in the web interface can be mimic'd / duped by another ESP32 posing as a browser.

Based on this idea I built a jog wheel interface for a Marlin powered CNC that I built. In this case I used a nano. Marlin already has provision for a joystick control which uses an analog joystick to control jogging speed and direction. It was fairly trivial to convert the pulse inputs of the jog encoder and convert them to analog.

Translating MPG fucntionality into analog speed and direction takes the pulse frequency from the jog encoder, and uses this to set the analog resistance using a voltage controlled resistor (VCR). The axis selector switch sends the signal to the appropriate axis. The speed multiplier switch acts as a multipler.

The code is available under the GPL license and can be downloaded from my GitHub page.

https://github.com/DeeEmm/Marlin-CNC-Pendant