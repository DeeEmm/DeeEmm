---
published: false
title: Arduino Mega Pro Serial Comms Issue
tags: Arduino, Mega Pro, 
category: Arduino
image: /images/123-template.jpg
date: 2021-06-07 08:30:00 +9:30
---

![/images/123-template.jpg](/images/123-template.jpg)

I use the Robotdyn Arduino Mega Pro mini boards in a number of different projects that I make. Some of these use a serial bluetooth module to allow communications with external devices. I have experienced the odd issue on occasion where the bluetooth module does not work. Generally swapping this out for another module has resolved the issue, so I've always just assumed that the bluetooth module must be at fault. Recently I have had entire batches of bluetooth modules refuse to work and even one Mega that would not work at all, despite the bluetooth module working with other boards.

I've tried swapping to different manufacturers for the bluetooth modules, I've also tried HC-05's, HC-06's and even the newer JDY-30/31 modules. Every time I think I've had some success and found a solution, I eventually end up with the same issue. So today I had another issue with a bluetooth module and so decided to take a deeper look. I was unable to establish comms between the third party app and the Arduino via the BT module and so decided to engineer some tests to try and pin point the root cause.

I have suspected that the issue may be related to the 3.3/5v tolerance of the bluetooth module. The bluetooth chips used are not 5v tolerant, and so whilst the Arduino is happy to accept a 3.3v data signal from the bluetooth module, the module is not really supposed to take a 5v data signal from the Arduino in return. Of course most are actually happy to do this and work fine, but knowing that this is one of the issues often cited I decided to add some voltage dividers to the bluetooth modules themselves. This is a fairly tricky mod as it involves locating and breaking into the PCB traces and soldering some SMD resistors in place to create the voltage divider in the RX line. I can't actually take credit for this mod as I found it in an instructable:

[Make Bluetooth HC-05 Module 5v Compatable](https://www.instructables.com/Make-Bluetooth-HC-05-Module-5v-Compatable/)

So After making a few of these and still not being able to connect via bluetooth to the arduino I decided that perhaps this was not the issue.

So I set up some tests using the Mega Pro, a UART serial adaptor and a BT module.

First I set up a test to transmit directly between BT and UART modules. I wanted to take the mega out of the picture and see if comms would work peer-to-peer. I connected the modules to each other (RX-TX) / TX-RX) and used two instances of CoolTerm (my favourite OSX terminal emulator) to send and receive data between the devices. A point to note here was that the UART was set to 5v and I used an unmodified bluetooth module. Both devices sent and received data with no issues. So far, so good. It looks like this particular module is happily 5v tolerant.

Next I did a test using the serial monitor in the Arduino IDE and the BT module connected to Serial 2 (pins 18/19). I wrote a quick sketch to passthrough the data between Serial 1 and Serial 2. Again the test was successful. It looks like the impedance matching of the Bluetooth module and Arduino is not an issue.

Next I wanted to test the BT module connected to Serial 1 (Pins 0/1) as these are the pins that are used in the projects, however those pins are also connected to the USB port so it is not possible to use both the BT module and the USB port at the same time. This in turn meant that I could not use the serial monitor in the Arduino IDE to test the data. So instead I connected the BT module to Serial 1 and connected the UART module to Serial 2 and used two instances of CoolTerm. Again I used the sketch to pass data between Serial 1 and Serial 2.

What I found was very interesting. It was possible to send data from the UART to the BT module (via the mega) but not the other way around. Commands typed into the UARTs serial terminal appeared in the BT's serial terminal, but commands typed into the BT's serial terminal did nothing / went nowhere.

To validate what I had found I swapped the connections for the UART and BT modules over and found the same thing happened to the UART module when connected to Serial 1. Commands typed into the BT's serial terminal appeared in the UARTs serial terminal but not vice versa. I also retried with a modified Bluetooth module that had the voltage divider added. Again the same results.

This seems to point towards an issue with the TX line itself (Pin1), and I'm guessing is most likely related to the CH340 serial chip on the Mega Pro somehow affecting the TX line. The CH340 specs state that when not in use the line is held high, perhaps this is the issue?

So next I did something drastic and desoldered the CH340 from the board. I then retried connecting to the third party app using the bluetooth module and and it connected first time. 

Bingo!

So I now have an idea of what is causing the issue, but not an exact cause. Nor do not have a fix at this stage as removing the CH340 chip is not really a workable solution as the bluetooth line is not as straightforwards to upload sketches by.

I tried adding pullup and pulldown resistors to the TX line at Pin 1 which has been suggested elsewhere, but this did not work. Blocking diodes may work, but there is no easy way to implement them as the issue resides on the mega itself not on the shield that I make.

So I decided to take a look at the Robotdyn schematics and cross referenced them against the CH340 datasheet to see if there was any way I could find out what was causing the issue. I figured that as sometimes things were okay and other times they were not it might possibly be a borderline component value that was causing the issue. The dual usage of the serial data lines is technically incorrect as despite removing the external USB device when you want to use the Serial 1 data ports, it still has the CH340 in circuit, so there's actually still a serial device connected to the Mega. This is a big faux pas when it comes to circuit design. Of course it's not really an issue in most Arduino Mega implementations but for some reason on the Mega Pro it is. 

I noted that there were some peripheral componentry to the CH340 but none really influenced its operation. The only components that would have any affect on the data signals were the current limiting resistors in the TX and RX line between the USB port and the CH340 and two more in the TX and RX lines between the CH340 and the Mega CPU. So to further my testing I traced the PCB tracks between the TX and RX pins, The CH340 and the Mega CPU. What I found was that the TX/RX pins connected directly to the CPU, whereas the RX/TX Data lines from the CH340 went through the current limiting resistors before connecting to the CPU. 

So I made another small test, I removed the current limiting resistors between the CH340 and the CPU, effectively disconnecting the CH340 from the external RX/TX pins. I then tried to connect the bluetooth. It worked. On a hunch I decided to increase the value of the current limiting resistor on the TX line. The standard value was R220. I increased this to 1K. (as that's all I had). To my surprise (and joy) it worked. The bluetooth connected and was very stable. I then disconnected it and connected by USB, half expecting it to not work at all, but it also worked and was stable too. WOOT!

I repeated the modification to another Mega Pro and repeated the tests. Again it worked. WOOT!

So it looks like one solution is to increase the value of the limiting resistor between the CH340 and CPU. I'm guessing that with the lower value the external data signal to the Bluetooth device was shunted and unable to change. Increasing the value of the limiting resistor reduced the shunting effect allowing it to function correctly whilst still retaining correct operation when the USB is used. 

There is one caveat to this however. I tested as many different types of bluetooth module as I had at hand. I noted that to get some to connect I needed to instigate a reset on the Arduino by pressing the reset button. This is actually a common trick when trying to upload sketches via bluetooth and is related to the way that the serial comms works. Whilst checking the schematics for the CH340 I noted that this reset line is integrated into the USB serial control. So to get the bluetooth to work in the same way it is necessary to connect the 'State' pin of the bluetooth to the reset pin of the Arduino via a coupling capacitor. What this does it reset the Arduino when the bluetooth comms is ready which is essentially a rudimentary DTR signal. It is also exactly how the CH340 USB serial interface works. The DTR pin of the CH340 is connected to the reset pin of the CPU. So in both cases when the serial comms is ready the Arduino is reset and then data transfer can begin.

So to make a robust bluetooth connection (on any Arduino) it is preferable to connect the DTR (State) Pin to the CPUs Reset pin. This ensures that the Bluetooth comms is initiated correctly.





https://robotdyn.com/pub/media/0G-00005641==MEGA-PRO-CH340GATmega2560/DOCS/Schematic==0G-00005641==MEGA-PRO-CH340GATmega2560.pdf

https://cdn.sparkfun.com/datasheets/Dev/Arduino/Other/CH340DS1.PDF