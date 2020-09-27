---
layout: post
title: Installing CNCJS on Arduino Yun Shield
joomla_id: 319
joomla_url: installing-cncjs-on-arduino-yun-shield
category: General
date: 2019-04-07 01:25:52.000000000 +10:30
---
<h3>Intro</h3>
<p>OpenWRT&nbsp;</p>
<p>&nbsp;</p>
<h3>Updating OpenWRT to latest version</h3>
<p>I tried to install CNCJS under the Last version of Yun firmware available via the Dragino repository but found that it was not possible. After much trying what I discovered was that development for the YUN firmware was dropped&nbsp;in favour of the current IOT branch leaving the last version of node at 0.12.7 which was too old to install CNCJS on. I tried in vain the update node to at least version 4 but found that it simply was not possible to compile it on the earlier version of OpenWRT. So leaves the only possible pathway as upgrading the&nbsp;</p>
<p>First step update firmware to the current IOT branch, this involves two steps as trying to install the IOT image via the browser update manager will return an error. so there is an intermediate firmware that needs to be installed to negate this.</p>
<p>The YUN repositories are no longer maintained so the latest openWRT firmware now resides un the IOT branch</p>
<p><a href="http://www.dragino.com/downloads/downloads/motherboards/ms14/Firmware/">http://www.dragino.com/downloads/downloads/motherboards/ms14/Firmware/</a></p>
<p>First step is to install the intermediate firmware</p>
<p>&nbsp;</p>
<p>Next you have to enable to firmware which has to be invoked from the command lin within the SSH terminal</p>
<p>&nbsp;</p>
<p>then update to IOT firmware</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h3>&nbsp;installing Node.js&nbsp;&nbsp;</h3>
<p>On the Dragino YUN firmware node is installed by default, you can check if it is installed on your distro by issuing the check version command</p>
<p><em><strong>node -v&nbsp;&nbsp;</strong></em></p>
<p>&nbsp;</p>
<p>Same applies for npm</p>
<p><em><strong>npm -v</strong></em></p>
<p>If you do not have node.js installed on your distro you can install them via opkg</p>
<p>&nbsp;</p>
<p>Package lists</p>
<p><b>src/gz chaos_calmer_base https://archive.openwrt.org/chaos_calmer/15.05/ar71xx/generic/packages/base</b></p>
<p><b>src/gz chaos_calmer_packages https://archive.openwrt.org/chaos_calmer/15.05/ar71xx/generic/packages/packages&nbsp;</b></p>
<p><b>src/gz chaos_calmer_luci https://archive.openwrt.org/chaos_calmer/15.05/ar71xx/generic/packages/luci&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</b></p>
<p><b>src/gz chaos_calmer_routing https://archive.openwrt.org/chaos_calmer/15.05/ar71xx/generic/packages/routing&nbsp; &nbsp;&nbsp;</b></p>
<p><b>src/gz chaos_calmer_telephony https://archive.openwrt.org/chaos_calmer/15.05/ar71xx/generic/packages/telephony</b></p>
<p><b>src/gz chaos_calmer_management https://archive.openwrt.org/chaos_calmer/15.05/ar71xx/generic/packages/management</b></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>no nodejs included in packages for chaos_calmer</p>
<p>&nbsp;</p>
<p>opkg update</p>
<p>&nbsp;</p>
<p>opkg install node</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Before we go any further...</p>
<p>These are the 'fixes' that I needed to do to enable the installation process to be successful. It's probably worth just doing these right from the get-go as it will save you a heap of time in the long run. Of course, these fixes may not be exhaustive as your particular flavour of hardware / firmware may have other gremlins that need to be addressed, but for my early Iduino Yun board this is what worked for me.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>I found that sometimes OpenWRT does not handle HTTPS very well and will give you a bunch of socket errors, if you are having issues the best option is to point the NPM package manager at the HTTP version of the registry. It will work exactly the same but does not have the overhead of establishing secure connections for each transfer / transaction. Not only does it massively reduce the risk of network issues, but the reduced overheads probably make it a bit quicker too</p>
<p>&nbsp;</p>
<p>npm config set registry http://registry.npmjs.org/</p>
<p>&nbsp;</p>
<p>Additionally, to further reduce issues with timeouts due to socket errors, it might be worth limiting the number of sockets you are using. The standard is 50. You can tweak the value but basically whilst more concurrent connections will be faster they will also chew up memory and overheads, of which neither are in great supply.</p>
<p>&nbsp;</p>
<p>npm set maxsockets 3</p>
<p>I've found it necessary to do both of these along with the large swap to get the installation to work. You may have more luck on later processors / with larger memory but definitely on the earlier board I had, there was no chance it was going to work out of the box.</p>
<p>&nbsp;</p>
<p>I also disabled IPV6 handing via the web interface for the network adaptor I was using. This was another fix for random network hangs.</p>
<p>&nbsp;</p>
<p>network &gt; interface &gt; advanced settings&nbsp;</p>
<p>&nbsp;</p>
<p>I also installed version 4 of webpack as many dependencies relay on this version&nbsp;</p>
<p>&nbsp;</p>
<p>npm install webpack@4.x --save-dev -verbose</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Other things to check are that your DNS server settings are correct, they should be passed from your cable-modem, you can view them in the web interface on the status overview page</p>
<p>&nbsp;</p>
<p>Also make sure that your computer will not go to sleep, and that its memory does not get consumed by other processes, or that your internet connection does not get dragged down or cut off as all of these things will likely make the installation process stall.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Updating NPM</p>
<p>Depending on your end goal, you may need to update npm, this is the recommendation by CNCJS for running CNCJS on earlier versions of node</p>
<p>&nbsp;</p>
<p>&nbsp;npm install npm@latest -verbose&nbsp;</p>
<p>&nbsp;The issue with this is that there are a LOT of dependencies and it will take ABSOLUTELY AGES and you may well end up with incompatibilities with other packages. It is actually fR better to simply flash more up to date firmware which includes more up to date versions of everything. Or at least it would be if there was an updated firmware image available. :(&nbsp;</p>
<p>&nbsp;</p>
<p>So my advice is, unless you absolutely cannot get it to work any other way - do not update NPM</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Installing CNCjs</p>
<p>Now to install CNCjs itself</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>We clone CNCJS from GIT and then install it locally.</p>
<p>&nbsp;</p>
<p>I absolutely recommend installing CNCJS with the verbose option checked, the installation will take ages and without verbose reporting you will have no idea is it is stuck, has crashed or is simply grinding away doing its thing.</p>
<p>&nbsp;</p>
<p>The --unsafe-perm option is also necessary as on OpenWRT everything is installed and run as root.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;</p>
<p>&nbsp;</p>
<p>First, to install from GIT you will need to install bash or else you will not be able to run any of the installation scripts</p>
<p>&nbsp;</p>
<p>opkg update</p>
<p>&nbsp;</p>
<p>opkg install bash</p>
<p>&nbsp;</p>
<p>&nbsp;and also GIT...</p>
<p>&nbsp;</p>
<p>opkg update &amp;&amp; opkg install git</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>then you can clone the repo..</p>
<p>&nbsp;</p>
<p>git clone git://github.com/cncjs/cncjs.git</p>
<p>cd /root/cncjs</p>
<p>git checkout master</p>
<p>npm install -verbose --unsafe-perm</p>
<p>Your terminal will now churn away for (possibly a day) so time to go do something else.</p>
<p>&nbsp;</p>
<p>Once you have success, don't put the cuppa down just yet, there's more...</p>
<p>&nbsp;</p>
<p>npm run prepublish</p>
<p>If the installation fails, check the error message and try to find a fix, this can involve - manually installing dependencies / modding installation scripts / whatever else Google suggests. I found that I had a LOT of network errors, I tried various 'fixes' including those outlined above. I also disabled NPV6 via the web interface as I had read that this can cause issues. I probably tried 4 or 5 times to install, each time the installation would get a bit further before crashing. One thing to note however, is that&nbsp; every time it does manage to download a dependency it caches it locally in the npm/node_modules folder, so the next time you try to install it at least has the file cached.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>NOW you can run cnc...</p>
<p>&nbsp;</p>
<p>./bin/cnc</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>References</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>installation troubleshooting...</p>
<p>&nbsp;</p>
<p>https://github.com/cncjs/cncjs/wiki/Troubleshooting</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;https://github.com/dragino/linino</p>
<p>&nbsp;</p>
<p>&nbsp;https://github.com/dragino/openwrt-yun</p>
<p>&nbsp;</p>
<p>https://openwrt.org/docs/guide-user/additional-software/extroot_configuration</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;https://www.v1engineering.com/assembly/ramps-wiring/</p>
<p>&nbsp;</p>
<p>https://www.v1engineering.com/marlin-firmware/</p>
<p>&nbsp;</p>
<p>&nbsp;https://github.com/Allted/Marlin/tree/CHOOSE_VERSION&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>https://github.com/Allted/Marlin/tree/MP3DP_Ramps_16T_MK</p>
<p>&nbsp;</p>
<p>https://github.com/cncjs/cncjs</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>https://github.com/gnea/grbl-Mega</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>https://www.joemotacek.com/putting-a-newer-version-of-node-js-on-linkit-smart-7688-duo/</p>
<p>&nbsp;</p>
<p>http://techfindings.one/archives/2175</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Specification：</p>
<p>CPU: ATHEROS AR9331 chipset, which integrates MIPS 24Kc processor, CPU 400MHz, Switch (MAC, PHY) and integrates with MAC, RF, PA and LNA for WiFi.&nbsp;</p>
<p>RAM : 64MB;</p>
<p>Flash : 16MB</p>
<p>Interfaces: 2 x RJ45, 1 x USB Host, 1 x UART, 14 multiplex GPIOs</p>
<p>OS: Open Source OpenWrt&nbsp;</p>
<p>Power: 3.3v power input</p>
<p>WiFi: Support 150M 2.4Ghz WiFi, 802.11 b/g/n</p>
<p>Frequency range: 2.4~2.4835GHz</p>
<p>Modulation: BPSK, QPSK, CCK and OFDM (BPSK/QPSK/16-QAM/ 64-QAM)</p>
<p>Sensitivity @PER : 135M : -65dBm@10%PER; 65M : -65dBm@10%PER; 54M : -68dBm@10%PER; 11M : -84dBm@8% PER; 6M : -88dBm@10% PER; 1M : -90dBm@8% PER</p>
<p>Typical Distance: Indoor: 60m (max); Outdoor 150m (max) (with 2 dBi antenna)&nbsp;</p>
<p>RF Power: 11n: 13dBm; 11g: 13-15dBm, 11b: 16-18dBm,</p>
<p>Connector: I-PEX connector. Provide Optional ANT pin out for SMT</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
