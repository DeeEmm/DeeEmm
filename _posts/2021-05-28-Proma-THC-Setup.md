---
published: false
title: Proma THC Setup
tags: Plasma, Proma, THC, 
category: CNC
image: /images/123-template.jpg
date: 2020-10-20 08:30:00 +9:30
---

![/images/123-template.jpg](/images/123-template.jpg)

This week I've finally got around to getting the plasma table back up and running. The table has lain dormant for some time now, despite buying both a new plasma cutter and compressor waiting to be fired up.

One of the bgg changes to the plasma table, apart from the DDCSV controller, was the installation of a Proma THC unit. To use THC with the DDCSV I needed to swap out my old Proma 150 unit for an SD unit. This particular unit cuts into the step signals between the DDSCV and the stepper amplifier, allowing it to be able to inject additional steps as required. 

 Setting the unit up requires that it is calibrated to the Lotos LTD5500D unit. This is relatively simple to do but is not well documented so I thought I would document it here, as much for my own future benefit as anyone else's.

 Essentially you need to calibrate the Proma unit so that the voltage it reads from the plasma unit is correct. To do this you need to measure the voltage that is outputted by the plasma cutter and then enter it into the THC controller.
 
- With the plasma torch in free air, take your multimeter and switch it to read DC volts.
- Now turn the plasma on and measure the voltage coming from the plasma unit. This could be full volts or could be 50:1 reference voltage depending on how you have the THC connected. Whatever it is, this is the voltage we need to program into the controller.
- Next, restart the proma unit, and whilst the 'thc' screen is showing press and hold both the up and down button. The screen will flicker and then show 'CAL'.
- You can now input the voltage using he up and down arrows. NOTE: if you have a voltage divider in your plasma unit, you will see 1:50th of the actual voltage so be sure to enter 50x the value on the screen. For example if you measured 5v, then you would enter 250v on the THC calibration screen.
- Once you have entered the correct voltage you can exit the calibration setup screen by pressing and holding both of the buttons simultaneously

Thats it. Pretty simple eh. Now the THC unit will display the correct voltage.

Next up you need to setup the torch cut voltage target. This is the voltage that gives you the cut height you want. This is a bit of a trial and error exercise. The actual voltage will differ depending on the cutting amps and material thickness. I ended up doing a series of tests until I achieved the results I wanted.

I did the same kind of tests to set up the cutting speed and plasma settings. Basically making a series of cuts at different cutting speeds and noting the results. 

I've started to save the results in a spreadsheet. This is actually a fork of someone else's similar spreadsheet with my results added to the bottom. Feel free to use / edit / fork as required.


[I'm an inline-style link](https://www.google.com)

# This is a heading

This is a paragraph

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