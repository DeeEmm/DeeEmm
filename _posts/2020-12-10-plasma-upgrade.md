---
published: true
title: Plasma Upgrade
tags: Lotos, LTP5500D, IPT80, Plasma, Machine, Torch
category: Plasma, CNC
image: /images/plasma-torch.jpg
date: 2020-12-10 13:30:00 +9:30
---

![/images/plasma-torch.](/images/plasma-torch.jpg)

### Lotos LTP550D Plasma Unit

If you've read my post about the [DDCSV Fusion 360 Plasma Post Processor](https://deeemm.com/general/2020/09/30/ddcsv-fusion360-plasma-post-processor.html) you may recall that I've been resurrecting the plasma CNC table I built. In addition to replacing the controller I decided that all of the niggling issues that impacted reliability and accuracy also needed to be addressed. One aspect that was causing issues with the previous controller was the HF start on the old plasma unit. The HF piezo spark used to initiate the plasma arc between the torch and workpiece had a tendency to wreak havoc with the NC controller causing all kinds of issues; from the screen locking up to the controller itself freezing. This was likely one of the contributing factors to the original Linux CNC based controller deciding it could take no more. I also think that it was this that killed my original THC controller, there's just something about electronics and high frequency high voltage that simply does not mix. So with this in mind I decided that I needed to replace the el-cheapo plasma unit with something that was more appropriate for CNC use.

Scratch start is not really optimum with CNC plasma but fortunately there is another option, a blowback torch. The blowback torch uses an air driven electrode inside the torch that opens when the air pressure is turned on. The action of the electrode opening causes a small spark that in turn initiates the plasma arc allowing the torch turn on in mid air - exactly what you want on a CNC machine, plus it does all of this without using a HF start. Perfect. 

After doing some research I decided to buy A LOTOS LTP5500D inverter plasma unit. This machine has really good reviews from CNC plasma users online and is a quarter of the cost of the equivalent power hypertherm unit, plus it can be purchased with a CNC interface which brings the on/off control and voltage divider out to handy interface plugs on the rear of the unit making it easy to connect up to the DDCSV controller and my Proma THC controller. The machine uses a standard euro connector and is supplied with a PT60 hand held torch. Unfortunately I could not find the machine supplied with a CNC torch and so had to order this separately. I managed to find an IPT80 blowback style torch on ali-express that wasn't an extortionate amount of money, but it had no info on the pin-out connections and so I could not determine if it would actually work with the Lotos unit prior to ordering it. I decided to take a bit of a gamble as I figured I could easily reconfigure the plug should it be different, plus it claimed to work with most major brands. I received the plasma unit a few weeks back but the torch only arrived earlier in the week. I cross checked the manual torch connections with the CNC torch connections and found them to be the same. Cool. 

![/images/plasma-torch-2.jpg](/images/plasma-torch-2.jpg)

The main difference between the machine torch and the hand held torch that was supplied with the plasma cutter is that the machine torch has a straight handle and no trigger so it can easily be mounted onto the Z-axis. Unfortunately it is a different diameter to the previous HF CNC torch from the old unit and so does not fit the old torch holder, so today I decided to make another torch holder. I wanted to make something halfway decent and knocked up a quick bracket on the mill and lathe using an aluminium off cut. I had considered 3D printing a new holder, which probably would have been fine but figured that it was worth making it from something a little more heat resistant as the torch gets pretty hot when in continuous use.

![/images/plasma-torch-3.jpg](/images/plasma-torch-3.jpg)

### Compressor

Another aspect with the old plasma setup was my compressor, it's always been pretty borderline, not quite enough puff, plus really noisy. As my workshop is in a residential area the noise aways made me apprehensive of using it. I had always planned on making some kind of acoustic enclosure but that was just another one of those jobs that I never got around to doing, plus there were always alternatives to air tools so I just used those instead. So I figured that with investing time and effort into making sure that the system is both reliable and repeatable and to end up with a system that I will actually use, I decided that it really needed a decent compressor which seemed like the perfect opportunity to buy a noiseless compressor.

These units have pairs of cylinders mounted on a common shaft, so when one cylinder is compressing the air the other is on the intake stroke. As the cylinders are plumbed into common manifolds the result is that instead of generating the typical 'chug, chug, chug' sound that most compressors make, the noise of each cylinder is cancelled out by its twin making it much quieter. I opted for the largest size I could run on a single phase supply which has a 100 litre tank and produces about 25 cfm. 

![/images/compressor.jpg](/images/compressor.jpg)

So all that is left to do is to put it all together. I still have some wiring to finish off in the control panel for the manual jog control, plus I have to connect up the plasma unit and THC. There's probably about a days work there. Once it's up and running I have a growing list of jobs that I need to cut, some of which include updating the table itself. It's going to be one busy machine.