---
layout: post
title: VMware Fusion - Increase virtual machine size
joomla_id: 199
joomla_url: vmware-fusion-increase-virtual-machine-size
category: Mac How To's
tags: fusion increase mac osx size virtual-machine vmware
date: 2010-02-27 10:31:58.000000000 +10:30
---
<p>Like many ex M$ Windows users, I still have the occasional need to use it to run programs on that will not run under OSX. For example, probably all of the programs I use for PLC programming simply will not run natively on the Mac. This leaves me with two options - carry round another laptop (sometimes happens), or use a virtual machine.</p>
<p>A job I did recently for a client required I install some additional windows based software, to program the obscure controller that they had. At the time I just had my Mac on me, so I powered up Vmware and started to install the code. Unfortunately the installation started to hang about half way though - the issue was a nearly full disc.</p>
<p>I keep my virtual disc size fairly lean - the work I do is quite storage intensive, requiring lots of space, so I tend not to waste space if I can avoid it. It's easy enough to resize the disc if necessary. So that is what I did. Fortunately I am usually prepared for these things as you never know what will happen when you are stuck working in the middle of nowhere,</p>
<p>A friend of mine, just emailed me to ask how to change the disc size, so I thought I might as well add it up here</p>
<p>Pre-requisites - Ubuntu install CD + enough spare room on hard drive</p>
<ol>
<li>BACK UP YOUR VIRTUAL MACHINE</li>
<li>To make bigger you need to delete all snapshots</li>
<li>Then you will be able to alter the size of the drive in VMWare settings by typing in a new value. This is greyed out if the Virtual Machine is running or a snapshot exists.</li>
<li>So now you have increased disc size but your virtual machine still only see's the partision size it was installed on. Next you have to extend the partitions allocated size to include the extra 'physical' size you just gave the virtual disc. NOTE - you can see this in disc manager under admin tools in windows, but you will not be able to change the partition size for the primary disc.</li>
<li>Fear not - There are many ways to do this, but best for me was to use Ubuntu (all ways are a variation on similar theme - just choose your flavour of Linux)</li>
<li>Download Ubuntu (www.ubuntu.com)</li>
<li>Burn image to a CD</li>
<li>Boot up your virtual machine with Ubuntu CD in it so that it boots into Ubuntu live mode (don't install anything - just run from the CD).</li>
<li>Then in system tools there is a partition utility called 'gparted' - open it</li>
<li>You will see your virtual disc, with the unallocated space to right side - allocate this unused space to your virtual drive.</li>
<li>Shut down Ubuntu + eject disc</li>
<li>Reboot virtual machine - DO NOT SKIP THE DISK CHECK</li>
<li>Reboot again</li>
<li>Your virtual machine should now be the full allocated size.</li>
</ol>
<p>DM</p>
