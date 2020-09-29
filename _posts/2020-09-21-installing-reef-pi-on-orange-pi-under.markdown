---
layout: post
title: Installing reef-pi on orange pi under armbian
joomla_id: 412
joomla_url: installing-reef-pi-on-orange-pi-under
category: General
date: 2020-09-21 01:37:28.000000000 +09:30
published: false
---
<div class="ebd-block  " data-type="text" ><p>Download image<br><br>http://www.orangepi.org/downloadresources/<br><br>for my orange pi pc I used the latest Armbian 'buster'<br><br>https://www.armbian.com/orange-pi-pc/<br><br><br><br>http://www.orangepi.org/orangepibbsen/forum.php?mod=viewthread&amp;tid=342<br><br>https://drive.google.com/drive/folders/0B1hyW7T0dqn6fndnZTRhRm5BaW4zVDVyTGlGMWJES3Z1eXVDQzI5R1lnV21oRHFsWnVwSEU<br><br><br><br><br><br>Flash to SD using etcher<br><br>https://www.balena.io/etcher/<br><br>Install card into orange pi<br><br>Turn on<br><br>get ip address<br><br>ssl root@192.168.1.4<br><br>password orangepi<br><br>boom, you;re in. now to insstall reef pi<br><br>sudo apt-get update -y <br><br>sudo apt-get upgrade -y<br><br><br><br>add following to <br><br>/boot/orangepiEnv.txt<br><br>dtparam=i2c_arm=on <br>dtparam=spi=on <br>dtparam=audio=on <br>enable_uart=1 <br>dtoverlay=w1-gpio<br><br><br><br><br><br>wget -c https://github.com/reef-pi/reef-pi/releases/download/3.0/reef-pi-3.0-pi3.deb <br>sudo dpkg -i reef-pi-3.0-pi3.deb<br><br><br>then install wifi (if you have it)<br><br>https://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/<br><br><br><br><br><br>https://pypi.org/project/OPi.GPIO/<br><br>pip install OPi.GPIO<br></p></div>
