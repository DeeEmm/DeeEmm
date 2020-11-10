---
published: false
title: Acqua - connecting the nano
tags: Acqua, nano, Arduino, RaspberryPi, I2C
category: Acqua
image: /images/I2C.png
date: 2020-10-20 08:30:00 +9:30
---


I'm using an Arduino Pro Mini (AtMega168P), which is similar to the Nano and pin compatible, they are also the same form factor. Actual pin layout will differ between models, the differences usually relate to the location of analog pins A4 through A7, which may be placed on the end, or somewhere in the centre of the board. It pays to check the documentation or datasheet fo the actual device you are using to make sure as the SDA and SCL pins that we need to use are on pins A4 and A5 respectively. I also opted to use boards without the USB interface as this saves on cost and space. These boards are programmed by an external USB interface that attaches to the VCC | GND | RX | TX pins at the head of the board. Programming is then the same as per a regular Arduino. 


Arduino nano / Pro Nini I2C pins are on:

`
	SDA              Pin A4  
	SCL              Pin A5  
`



