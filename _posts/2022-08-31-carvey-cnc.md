---
published: false
title: 123 - Template
tags: add, some, tags
category: Your Category
image: /images/123-template.jpg
date: 2020-10-20 08:30:00 +9:30
---

![/images/123-template.jpg](/images/123-template.jpg)

[I'm an inline-style link](https://www.google.com)

# This is a heading

I too have a mainboard failure in my machine (x axis driver) and am currently waiting for a reply from support but if the main boards are unavailable then I can already guess what that reply is going to be. I might try to replace the driver chip, If I can get one that is. However I have considered junking the controller in favour of something else if this is not possible

It really should not be too hard to convert it to use a regular generic 3 axis Arduino based CNC controller board, there's heaps of different types available. The CNC V3 shields are cheap and readily available and a good candidate (Search for R3 CNC V3 on Fleabay). These may be old but they really do the job well.

The R3 Uno CNC shields work with the Arduino Uno and can be used with GRBL which makes it transparent to Easel if you want to continue using it, which is great for my kids. They will also work directly with Fusion360 which has a GRBL post processor available.

As an upgrade these boards can also be used with the UNO style ESP32 boards instead of the Arduino UNOs which not only gives you 32 bit architecture it also gives you WiFi connectivity and web browser control when loaded with something like GRBL_ESP32 or the newer version Fluid_NC. These are both GRBL based CNC control firmwares and a step up from regular Arduino-GRBL

When replacing the board the original gCarvin firmware will obviously not work as not only does it have incorrect pin definitions it also uses Trinamic steper drivers, so moving to Arduino / ESP32 GRBL is the best bet IMHO.

I recommend using DRV8825 stepper drivers as they exceed the 2A provided by the original Trinamic Stepper drivers and will also work at 48V. I have built similar machines with this exact setup in the past. (Sienci Mill One). 

All existing limit switches can be reused, same with the hold/continue button which gets you a moving machine, however there are a few additional things to address. 

You will need a DC-DC converter to give you the required 5v for the controller and LEDs

You will also need a DC-DC PWM spindle controller to drive the spindle but these are also cheap and plentiful. The other option here is to upgrade the spindle from 300w to a 500w or even 800w unit that comes with a PWM controlled PSU (commonly referred to as mach3 control) Of course YMMV it all depends on what you are cutting.

Lastly you will need to remap / connect the pins on the shield to the machine, which is not a massively hard job to do but can be daunting if you've never done it before.

The smart clamp can also be reused. It should be possible to write a macro to search the smart clamp and apply a work coordinate Z offset. I use a similar setup on my Mill One which probes for X,Y and Z.

Both GRBL_ESP32 and FluidNC can work tethered to a Gcode sender like Easel / ChilliPeppr / cncjs / etc or can be used completely stand alone by loading the GCode file into local memory via the web browser. Running the machine as stand alone eliminates issues with comms / computers / timeouts / screensavers / etc. This is always my preference, especially on big jobs. 

So it's definitely possible to replace the controller with an alternative and not only does it not need to break the bank, you can actually get a better system at the end of it.

Double space for another paragraph

- List item
- List item
- List item

## This is a section heading

Another paragraph
Another paragraph but with a double space at the end -->  
Another paragraph  

### This is a sub Heading

Another paragraph