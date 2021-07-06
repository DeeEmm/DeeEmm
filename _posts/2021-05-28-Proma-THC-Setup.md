---
published: true
title: Proma THC Setup
tags: Plasma, Proma, THC, 
category: CNC
image: /images/plasma-update.jpg
date: 2020-10-20 08:30:00 +9:30
---

![/images/plasma-update.jpg](/images/plasma-update.jpg)

This week I've finally got around to getting the plasma table back up and running. The table has lain dormant for some time now, despite buying both a new plasma cutter and compressor some time ago it has just been sitting there waiting to be fired up.

One of the big changes to the plasma table, apart from the DDCSV controller, was the installation of a Proma THC unit, that's it in the photo above stuck to the side of my control panel. To use THC with the DDCSV I needed to swap out my old Proma 150 unit for an SD unit. The 150 unit was designed to input torch up and torch down signals into a BOB interface, which was fine when I was running LinuxCNC. Unfortunately the DDCSV controller I am using has no provision for THC and so lacks the needed torch up / down inputs. The Proma SD unit works slightly differently in that it cuts into the step signals between the DDSCV and the stepper amplifier, allowing it to be able to inject additional steps to the stepper amplifier as required whilst still retaining control by the DDCSV. It kinda sucks that I had to buy a completely new unit rather than get the old one upgraded but ultimately the table needs it and the cost is easily amortised.

 Setting the Proma unit up requires that it is calibrated to the Lotos LTD5500D. THis will prevent the torch fro diving into the table or winding itself up in knots. Calibration is relatively simple to do but is not well documented so I thought I would document it here, as much for my own future benefit as anyone else's.

 Essentially you need to tell the Proma unit what voltage it is reading from the plasma unit. To do this you need to measure the voltage that is outputted by the plasma cutter and then enter it into the THC controller.
 
- With the plasma torch in free air, take your multimeter and switch it to read DC volts.
- Now turn the plasma on and measure the reference voltage coming from the plasma unit. This could be full volts or could be 50:1 reference voltage depending on your plasma unit and how you have the THC connected. Whatever it is, this is the voltage we need to program into the Proma THC controller. On the Lotus LTD5500D I have, there is a dedicated connector at the back of the plasma unit for connection to a CNC / THC unit, this gives the full plasma voltage at 1:1 ratio.
- Next, restart the proma unit, and whilst the 'thc' screen is showing press and hold both the up and down button. The screen will flicker and then show 'CAL'.
- You can now input the voltage using the up and down arrows. NOTE: if you have a voltage divider in your plasma unit and it outputs a 50:1 voltage signal, you would have measured 1:50th of the actual voltage so you need to enter 50x the value on the proma screen. For example if you measured 5v, then you would enter (50 x 5 =) 250v on the THC calibration screen.
- Once you have entered the correct voltage you can exit the calibration setup screen by pressing and holding both of the buttons simultaneously

Thats it. Pretty simple eh. Now the THC unit will display the correct voltage.

Next up you need to setup the torch cut voltage target. This is the voltage that gives you the cut height you want. This is a bit of a trial and error exercise. The actual voltage will differ depending on the cutting amps and material thickness. I ended up doing a series of tests until I achieved the results I wanted. To adjust the voltage simply press the up / down buttons until the desired target is displayed. You can also do this on-the-fly if you wish

I did a bunch of tests to set up the cutting speed and plasma settings. Basically making a series of cuts at different cutting speeds and voltage settings and noting the results. 

I've started to save the results in a spreadsheet. Feel free to use / edit / fork as required.

[https://github.com/DeeEmm/CrossFire](https://github.com/DeeEmm/CrossFire)

This is actually a fork of someone else's similar spreadsheet with my results added to the bottom. I forked it as it is specifically for the Lotos LTD5500D albeit used on a different table.
