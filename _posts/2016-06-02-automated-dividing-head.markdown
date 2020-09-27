---
layout: post
title: Automated dividing head
joomla_id: 311
joomla_url: automated-dividing-head
category: General
date: 2016-06-02 08:16:40.000000000 +09:30
---
<p>This weeks project - to automate my dividing head for my Mill (to make it easier to use). Now I can elect number of divs or degrees to increment and don't have to count holes in the dividing plate. Much less risk of buggering up the workpiece This way <span title="grin emoticon"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f603.png" alt="" width="16" height="16" /></span></p>
<p><span title="grin emoticon">All parts are straight from EvilBay. It uses an Arduino nano as the controller which drives a 5amp stepper amplifier. There's a 16x2 screen and a rotary encoder (click wheel) that acts as a user interface. I've programmed it to have a bunch of different menus so that you can select from divisions or degrees and then index forwards or backwards as necessary.</span></p>
<p><span title="grin emoticon"><img style="display: block; margin-left: auto; margin-right: auto;" src="images/easyblog_articles/311/b2ap3_large_13315349_1184477314920377_813127233973668342_n.jpg" width="960" height="720" align="center" data-style="clear" /></span></p>
<p><span title="grin emoticon">Arduino Nano. This is the brains and literally only the size of a USB stick. That's the rotary encoder next to it</span></p>
<p> </p>
<p><span title="grin emoticon"><img style="display: block; margin-left: auto; margin-right: auto;" src="images/easyblog_articles/311/b2ap3_large_13307264_1184477568253685_8299051339368757574_n-1.jpg" width="960" height="720" align="center" data-style="clear" /></span></p>
<p> </p>
<p><span title="grin emoticon">It has a basic display and menu system</span></p>
<p> </p>
<p><span title="grin emoticon"><img style="display: block; margin-left: auto; margin-right: auto;" src="images/easyblog_articles/311/b2ap3_large_13321997_1184477968253645_2126735094685142873_n.jpg" width="960" height="720" align="center" data-style="clear" /></span></p>
<p> </p>
<p><span title="grin emoticon">The Nano drives this stepper amplifier, and this in turn drives the motor. It uses a stepper amplifier rather than a stepper driver board like a 4988 as the larger frame Nema 24 Stepper motors take more current to drive than say a Nema 17 liek you would find on a 3D printer. </span></p>
<div>
<p>Just a few bits of code to tidy up and it's pretty much ready to mount up and install.</p>
<p> </p>
<hr />
<p>Update: now available on GitHub - <a href="https://github.com/DeeEmm/DIY-Dividing-Head">https://github.com/DeeEmm/DIY-Dividing-Head</a>  </p>
</div>
