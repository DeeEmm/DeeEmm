---
layout: post
title: Marlin CNC Pendant
joomla_id: 333
joomla_url: marlin-cnc-pendant
category: General
tags: arduino encoder jogwheel mpcnc pendant
date: 2019-12-30 03:17:11.000000000 +10:30
---
<div class="ebd-block  " data-type="text" ><p>I built an MPCNC a while back and am&nbsp;finally getting around to finishing it off. My machine is a combined use CNC and 3D printer so I have elected to use Marlin software. The main use for my machine is 3D printing using a direct granule extruder that I am developing for use with recycled plastics, this requires a larger format and heavier machine than a regular 3D printer due to the size of the extruder. I also have plenty of aluminium CNC work for it, so it's very much a dual use machine.&nbsp;<br></p></div><div class="ebd-block  " data-type="readmore" ></div><div class="ebd-block  " data-type="text" ><p>One aspect that I wanted to add was a jog-wheel control, so that I could control it in the same manner as other CNCs I have used, but being controlled by 3D printer software it does not lend itself well to traditional CNC controls. After looking around for such a solution I did not really see something that worked exactly as I wanted. There are a few solutions using G-Code parsers to send G-Code to the controller, but the issue with using these with a jogwheel is that a small flick of the wheel produces many G-code move commands, which are buffered in the machines memory. This means that the machine will continue to move long after the jog wheel has stopped, resulting in a large overshoot and difficult control characteristics.<br><br>My initial solution was to modify the Marlin code to accept direct input from the jogwheel, but then I came across Jamies joystick solution over at the MPCNC forums and decided that I could leverage this as the protocol for my jog-wheel control.<br><br>Essentially what I have created is an external controller that mimics the joystick and is connected to the same inputs used by the joystick. This connects to Marlin in the standard manner defined by Jamies code, which has now been added to the latest Marlin 2.0 release. This means that there are no code hacks to maintain and no code to change, just the standard connections and standard setup you would have to go through if you were hooking up a regular joystick.<br><br>Here's how it works: The regular joystick control comprises of three potentiometers for X,Y and Z respectively. Using three voltage controlled resistors (VCRs) we can easily make the Arduino mimic the potentiometers within the joystick.<br><br>The controller uses an Arduino nano, a regular CNC style encoder jogwheel and simple selector switches to select the axis and speed. (X, Y, Z &amp; X1, X10, X100). A regular MPG jogwheel pendant like those found on ebay will also work. Three MCP4151 10kohm VCR chips are used to interface with the main controller and mimic the X,Y and Z axis joystick inputs. The arduino controls the VCRs using the SPI serial comms protocol. This uses a two wire serial bus that connects all three chips to the Arduinos MOSI / CLK ports. The relevant chip is selected using a simple Chip Select (CS) signal connected to outputs on the Arduino. The arduino enables the relevant VCR, decodes which speed is selected and then sets the virtual potentiometers to a value that corresponds with the speed selected, for as long as the encoder is rotated.<br><br>When the jogwheel is inactive, the VCRs are set to mid position to mimic the joystick center. If X1 is selected and the jog-wheel rotated, it will move the potentiometers virtual wiper to a position that corresponds with a small joystick movement. As the speed selector is changed, this resistance changes which mimics a larger joystick movement. Of course the movement will only be one axis at a time and only at the selected speed, although smaller movements tend to create short pulses which result in slower movement.<br><br>There is also an adaptive output speed function, which will scale the output such that the output speed (potentiometer position) is proportional to the speed that the jog-wheel is rotated. The faster you rotate the encoder, the faster the CNC will move. Like the regular speed selects, this can be enabled by pulling the assigned input low. The adaptive speed function overrides all other speeds selected.<br><br>The project is currently working and tested with Marlin 2.0. You can view a video of the adaptive speed function working below...<br><br>To download the project or to contribute, please visit the projects Github page at <a href="https://github.com/DeeEmm/Marlin-CNC-Pendant">https://github.com/DeeEmm/Marlin-CNC-Pendant<br><br></a></p></div><div class="ebd-block  " data-type="youtube" ><div class="youtube-embed video-embed-wrapper is-responsive">
	<iframe src="https://www.youtube.com/embed/_DIcDE9QY0A?feature=oembed" width="480" height="270" allowfullscreen></iframe>
</div></div><div class="ebd-block  " data-type="links" ><div class="media-table">
		<a class="media-thumb" href="https://github.com/DeeEmm/Marlin-CNC-Pendant/" data-preview-image-wrapper="" target="_blank">
			<img class="media-object" alt="..." width="160" height="160" data-preview-image="" src="https://avatars0.githubusercontent.com/u/3038710?s=60&amp;amp;v=4">
		</a>
		<div class="media-body">
			<h4 class="media-heading">
				<a href="https://github.com/DeeEmm/Marlin-CNC-Pendant/" data-preview-title="" target="_blank">GitHub - DeeEmm/Marlin-CNC-Pendant: A jogwheel based pendant controller to interface to Marlin / Arduino controlled 3D printers &amp; CNCs</a>
			</h4>

			<div class="media-content" data-preview-content="">A jogwheel based pendant controller to interface to Marlin / Arduino controlled 3D printers &amp; CNCs  - DeeEmm/Marlin-CNC-Pendant</div>

			<div class="media-link">
				<a href="https://github.com/DeeEmm/Marlin-CNC-Pendant/" data-preview-link="" target="_blank">https://github.com/DeeEmm/Marlin-CNC-Pendant/</a>
			</div>
		</div>
	</div></div><div class="ebd-block  " data-type="links" ><div class="media-table">
		<a class="media-thumb" href="https://forum.v1engineering.com/t/joystick-managed-by-marlin/10863/60" data-preview-image-wrapper="">
			<img class="media-object" alt="..." width="160" height="160" data-preview-image="" src="https://us1.dh-cdn.net/uploads/db5587/original/2X/8/80a6ba28d95c089e3a0b7432139a26faa946cd84.png">
		</a>
		<div class="media-body">
			<h4 class="media-heading">
				<a href="https://forum.v1engineering.com/t/joystick-managed-by-marlin/10863/60" data-preview-title="">Joystick managed by Marlin - Hardware Development - V1 Engineering Forum</a>
			</h4>

			<div class="media-content" data-preview-content="">As a bit of a diversion from my second build, I’ve put together a joystick that allows jogging with analog control of the feed rate.  https://youtu.be/b2xEmkZEF6Y  I decided to take a different approach from the approach&amp;hellip;</div>

			<div class="media-link">
				<a href="https://forum.v1engineering.com/t/joystick-managed-by-marlin/10863/60" data-preview-link="">https://forum.v1engineering.com/t/joystick-managed-by-marlin/10863/60</a>
			</div>
		</div>
	</div></div><div class="ebd-block  " data-type="links" ><div class="media-table">
		<a class="media-thumb" href="https://forum.v1engineering.com/t/jogwheel-mpg-pendant-control/13829" data-preview-image-wrapper="">
			<img class="media-object" alt="..." width="160" height="160" data-preview-image="" src="https://us1.dh-cdn.net/uploads/db5587/original/2X/8/80a6ba28d95c089e3a0b7432139a26faa946cd84.png">
		</a>
		<div class="media-body">
			<h4 class="media-heading">
				<a href="https://forum.v1engineering.com/t/jogwheel-mpg-pendant-control/13829" data-preview-title="">Jogwheel / MPG pendant control - Hardware Development - V1 Engineering Forum</a>
			</h4>

			<div class="media-content" data-preview-content="">Hi All.  I built an MPCNC a while back and finally getting around to finishing it off. My machine is a combined use CNC and 3D printer so I have elected to use Marlin software. The main use for my machine is 3D printing &amp;hellip;</div>

			<div class="media-link">
				<a href="https://forum.v1engineering.com/t/jogwheel-mpg-pendant-control/13829" data-preview-link="">https://forum.v1engineering.com/t/jogwheel-mpg-pendant-control/13829</a>
			</div>
		</div>
	</div></div>
