---
layout: post
title: XBOX DIY VR Headset
joomla_id: 317
joomla_url: xbox-diy-vr-headset
category: General
tags: arduino vr xbox
date: 2019-03-23 02:47:25.000000000 +10:30
---
<p>I was looking at this DIY VR headset the other week - <a href="https://github.com/relativty/Relativ" target="_blank" rel="noopener noreferrer">https://github.com/relativty/Relativ</a><br /> <br /> It uses a gyro and arduino to create controller movements on your PC so that you can map the head movements to your games and display the screen in the headset. It's not a full VR experience but would be cool as a DIY project.</p>

<p><br /> I've always been pretty keen to make a VR set up for Minecraft and have experimented with various smart phone hacks, but none have really been that good. This is mostly as I'm on a mac and so software choices are limited.<br /> <br /> When I saw the Relativ DIY headset I thought that this is a much better solution. I already have a smart phone style headset I can hack up, plenty of spare arduinos and even a low res 5" screen I could experiment with. The only part I was missing was the gyro, so I ordered some from the net.<br /> <br /> My plan is to use this setup on my sons Xbox, but I've not mapped out how to tap into the thumb-stick controls to hijack the view direction. That is until I just stumbled across ArduinoXinput - an Arduino library that allows you to communicate via USB with the Xbox controller. It basically allows you to use the I/O of arduino to trigger controller events. This means that I can create a new controller that uses the gyro for head movement but normal physical buttons for the rest of the controls.<br /> <br /> So now that I have a solution I need to get cracking and actually make it.<br /> <br /><a href="https://github.com/dmadison/ArduinoXInput" target="_blank" rel="noopener noreferrer">https://github.com/dmadison/ArduinoXInput</a><br /> <br /><a href="https://github.com/relativty/Relativ" target="_blank" rel="noopener noreferrer">https://github.com/relativty/Relativ</a></p>
