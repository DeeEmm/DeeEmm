---
layout: post
title: Sparkduino - Arduino based automotive ignition system.
joomla_id: 292
joomla_url: sparkduino-arduino-based-automotive-ignition-system
category: General
tags: arduino sparkduino speeduino
date: 2018-06-18 13:09:04.000000000 +09:30
---
<p>I've been a long time supporter / user of open source EFI systems and have been playing with Speeduino for the past year or so. Speeduino is an Arduino based EFI system that uses a custom shield to provide the necessary signal processing to interface the Arduino to the engine sensors, coils and injectors allowing it to control the engine.<br /> <br /> It is also possible to use Speeduino without the injectors (ie spark-only), turning it into a well featured ignition system, which is very useful for those of us who want to run a distributor-less ignition system without paying a heap of cash.</p>

<p>I've also done similar thing in the past, using Megasquirt without the injectors to control ignition system (which is heaps cheaper than using Megajolt), however, the thing that I dislike about the Megasquirt/jolt is that it is a closed source system.<br /> <br /> So using the Speeduino as a spark-only system ticks a lot of boxes for me, however it does have one drawback. The fuel related settings are still present within Tuner Studio. Whilst this is not really a massive issue, it is a bit of an annoyance. <br /> <br /> So I decided to fork the Speeduino code and create an ignition-only version that only displays the Tuner Studio options relevant to the ignition. I've nicknamed the project 'Sparkduino' (did you see what I did there?) and you can access it on Github here &gt; https://github.com/DeeEmm/sparkduino<br /> <br /> The goal is to try and keep up to date with any ignition related improvements implemented in Speeduino and to implement some useful features that are not currently planned for release in the Speeduino code.<br /> <br /> Full details including roadmap etc can be found on the GitHub page.<br /> /DM</p>
