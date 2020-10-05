---
published: true
title: DDCSV Fusion 360 Plasma Post Processor
tags: Plasma DDCSV CNC Fusion360 Post-Processor Gcode Proma-THC
category: general
image: /images/ddcsv-plasma-post-processor.png
date: 2020-09-30 22:00:00 +9:30
---

![ddcsv-plasma-post-processor](/images/ddcsv-plasma-post-processor.png)

So todays project has been setting up my CNC plasma (again). It's been offline for a number of years waiting for me to finish the THC integration. When I initially started to undertake the integration I was using LinuxCNC, I purchased a Proma THC that directly connected to Linux CNC via the BOB (break-out-board). This required [code changes](https://forum.linuxcnc.org/49-basic-configuration/27900-thc-config-that-works) to the Linux CNC controller to produce the on-the-fly corrections needed for the THC to work. At some point I had an upgrade issue with the Desktop PC and so the machine has sat there for the past few years bring used as a storage shelf.

### DDCSV Offline CNC

Some time ago I purchased a DDCSV1.1 standalone CNC controller for use in the CNC mill project that I'm working on. Roll on a few months / years and the DDCSV1.1 unit has become superseded (they are currently on version 4) and so I decided that I would use it for the Plasma, replacing the old desktop running Linux CNC and buy a new and improved (5 axis) controller for the CNC mill project instead. (easy justification for buying the 5-axis controller :) )

However,  the way that the DDCSV works means that there is no provision for on-the-fly THC corrections, which mean that I needed to buy another type of Proma THC that intercepts the step signals between the DDCSV and the stepper drivers and is able to provide on-the-fy corrections directly to the Z-axis stepper driver.

okay. so that's all well and good, but how do I actually use this setup? Previously I used sheetcam on the Linux machine, which took my DXF file and then turned it into a plasma path, with the necessary lead ins / lead outs etc.

### CAD to CAM Workflow

Back then I was using 123D Design, a predecessor of Fusion360 to create my models (and occasionally autoCad). 123D did not have any CAM capabilities, but Fusion360 does so it makes sense to tap into that capability with the plasma. So what does the Fusion360 CAM workflow look like for my plasma?

Essentially once your (2D) design has been made, you can then enter into the manufacturing functions in Fusion360. You can then use a post processor to generate the necessary tool-paths and tool handling to convert your design into something that your machine understands, which in the case of the DDCSV is Gcode. There are a bunch of included post processors for a variety of commercial machines along with a few generic ones too, but nothing for the DDCSV.

A quick Google found the awesome [brainright CNC controller](https://www.brainright.com/Projects/CNCController) project where Jay McClellan has already created a post processor for the DDCSV1.1, unfortunately this did not work for my plasma as it was set up for a milling machine. Fortunately Jay has generously shared his design under the BSD license so I decided to use it as a base to write a plasma based DDCSV post processor.

I researched other plasma based post processors using Fusion360 and eventually found [a post by woodysmuniciple](https://forums.autodesk.com/t5/hsm-post-processor-forum/post-processor-for-mach-3-plasma-table/m-p/6407657) that included 'Touch off' torch height control, which is the configuration of my machine (floating z-axis). Essentially the torch is driven downwards into the workpiece until the torch touches and 'lifts' up the z axis torch carrier activating a microswitch. An offset is then added to the workpiece coordinates to set the actual z height of the workpiece. The torch then backs off to the pierce height and the pierce operation is started. 

So I combined this and some other aspects to create a new post processor for the DDCSV that includes touch off THC and created a github repo for it: 

[DeeEmm / DDCSV11-Plasma](https://github.com/DeeEmm/DDCSV11-Plasma). 

I still need to add some documentation for it, and do some testing, but in principle it's working. I'll add to it as I commission my machine and integrate further functions.

### So how do you use it?

Here's a quick run down on setting up Cam workflow for Fusion 360 plasma on DDCSV Standalone CNC 

To add the post processor to your machine you will need to copy the file to Fusion360s 'post' folder. 

On a mac this resides in

```
Users>MAC USERNAME>Library>Containers>com.autodesk.mas.fusion360>Data>Autodesk>Fusion 360 CAM>Posts
```

You will need to make hidden files visible to be able to see the Library folder. You can either do this by pressing the OPTION key whilst viewing the 'Go' menu in Finder, or you can toggle the visibility of all hidden files by pressing 'CMD + SHIFT + .' whist in Finder.

On a windows machine the path is different

Once added, your workflow will look like this:

- Make your 2D part in fusion 360
- Go to the manufacture page
- Create a setup using a plasma tool
- Select the paths you want to cut 
- Make sure that the cut direction arrows are on the outside of the workpiece
- Go to the Additive menu and select post process
- Select personal posts from the source dialog
- Here you should see the post processor file you added - DDCSV11-Plasma
- Change the settings for pierce height / pierce delay etc to suit your workpiece.
- Hit the OK button to create your Gcode.


![ddcsv-plasma-post-processor-settings](/images/ddcsv-plasma-post-processor-settings.png)

On the first run, because the post processor uses javascript, you will get a security popup message...

![ddcsv-plasma-js-warning](/images/ddcsv-plasma-js-warning.png)

You will then be asked where to save your freshly generated Gcode and the code will also open up in the standard code editor if you enabled this option. Then just load it up into your DDCSV via USB and away you go. 

You can also right(control)-click the profile and run a simulation. This will show you the tool path along with lead-ins etc. It will also alert you to any errors in the setup, for example if your lead-in distance is larger than a hole. Pretty cool eh.

![plasma-simulation.png](/images/plasma-simulation.png)
<br><br>
By the way, if you struggle with plasma settings like I do, I found [this awesome online resource ](https://www.plasma-automation.com/partsdatabase/CuttingCharts/hpr260.pdf) which lists cutting speeds / pierce height / pierce delay / cut height. Just look up the corresponding table for your material thickness & cutting gas and it will list all of the info you need. By the way, just in case you cannot find it, to set the cutting speed you need to edit the tool itself.

A note on program names. You will note that the standard name is a number. This numbering convention is used a lot on CNC machines. It's not necessary on the DDCSV, but is provided as a standardised method of naming for good practice.

If you want to do more with the post processor, taking a look through the existing post processors supplied with Fusion360 is a good stating place. Also a helpful overview on how the Fusion360 post processor works including the available hooks can be found in the [Autodesk Post Processor documentation](https://cam.autodesk.com/posts/posts/guides/Post%20Processor%20Training%20Guide.pdf)   There is also the [Autodesk PostProcessor class documentation](https://cam.autodesk.com/posts/reference/classPostProcessor.html) as well

---
<br>
If you find the post processor of use, please pay it forwards with a random act of kindness. Please feel free to fork it and improve it, and don't forget to push any changes you make back to the main repo. 

Happy CNCing  

/DM