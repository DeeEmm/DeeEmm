---
layout: post
title: Set up EXTROOT on Iduino / Dragon YUN shield
joomla_id: 318
joomla_url: set-up-extroot-on-iduino-dragon-yun-shield
category: General
tags: arduino extroot geetech iduino yun
date: 2019-03-27 02:35:29.000000000 +10:30
---
<p style="font-size: 12.16px;"><span style="font-size: 12.16px;">The Arduino YUN shield is a shield that combines an additional stand alone processor and WIFI. It runs a cut down Linux distro</span><span style="font-size: 12.16px;"> called OpenWRT. This WIFI / OpenWRT setup is most often found in things like Wifi routers. Arduino originally combined this with a D</span><span style="font-size: 12.16px;">uemilanove on a single board to make the Arduino YUN, but the good folks at Geeetech and Dragon split the YUN interface out onto a seperate Arduino shield so that it could be used with a variety of different Arduino boards. The cool thing about these setups is that the Linux side of the package can talk to the Arduino side, which not only means that you have effectively given your Arduino WIFI capabilities but also makes it very easy to make IOT devices that need things like WIFI / Web interface / External Logging / Network Logging, well you get the idea, the list goes on. It's truly a very powerful tool.<br /></span></p>
<p style="font-size: 12.16px;"><span style="font-size: 12.16px;">If you want to use the YUN to install additional programs or datalog you will need to expand the existing memory as it is woefully small. You can do this using an external USB drive</span></p>

<p style="font-size: 12.16px;"><br /><br />First I decided to update the firmware to a more recent version. The Geeeetech Iduino Yun shield that I have was relatively old (Although when I bought it, it had just come out) and I could not find any firmware update files for it available from Geeetech. The Iduino seems to be based on the Dragino Yun shield, but the hardware did not appear to exactly match any of the Dragino versions. I was therefore hesitant to use any of the Dragino firmware files. The same applied to the Arduino YUN firmware. Whilst the Geeetech and Dragon Shields both use the Arduino firmware, they also implement additional code to cater for a variety of boards (the Arduino Yun is effectively an all-in-one based on the arduino duemilanove), so I decided not to try just in case i bricked the device. So my first step - upgrading the firmware to a current version, basically failed at the first hurdle. (NOTE: the arduino firmware uses different pins and is not compatible)<br /><br /></p>
<h3>Connecting to the Geeetech Iduino YUN</h3>
<p style="font-size: 12.16px;">A basic overview of the iduino-YUN shield is available on the <a href="https://www.geeetech.com/wiki/index.php/Iduino_Yun_Shield#The_advantages_of_Iduino_Yun_Shield_compared_to_official_Arduino_Yun" target="_blank" rel="noopener noreferrer">Geeetech WIKI</a> which covers initial set up and connect in more detail, but for a quick and dirty step-by-step follow these steps...</p>
<p style="font-size: 12.16px;">Reset iduino by holding button for over 30 secs</p>
<p style="font-size: 12.16px;">Connect to iduino ad-hoc network by wireless ( it will create a WIFI network you can connect to) </p>
<p style="font-size: 12.16px;">Now navigate to the device in your browser NOTE - Default IP address of the YUN Shield is 192.168.240.1</p>
<p style="font-size: 12.16px;">Log in - the default password - iduino</p>
<p style="font-size: 12.16px;"> </p>
<h3>Updating the firmware</h3>
<p style="font-size: 12.16px;"><span style="font-size: 12.16px;">Next - If like me you have an older version you will need to update the firmware (Later Dragino IOT firmware will also work but there are some caveats) you can skip this step if you don't need to update.</span></p>
<p style="font-size: 12.16px;">Go to: <a href="http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/">http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/</a> </p>
<p style="font-size: 12.16px;"><span style="font-size: 12.16px;">Download the relevant sysupdate file (I used </span>Version 4.1.2)</p>
<p style="font-size: 12.16px;">Go to Admin interface in browser - <strong><em>System &gt; System &gt; Firmware update</em></strong></p>
<p style="font-size: 12.16px;">Select the file you just downloaded and update the firmware - Uncheck the box to 'keep settings'</p>
<p style="font-size: 12.16px;">Once the unit has updated and rebooted it will create a different ad-hoc WIFI network (remember we've just re-flashed the firmware so our previous settings are not available)</p>
<p style="font-size: 12.16px;">Join Dragino-A84041140790 wireless net (or whatever the dragino WIFI net that's just been created is called)</p>
<p style="font-size: 12.16px;">browse to <a href="http://192.168.240.1/cgi-bin/luci/webpanel/homepage">http://192.168.240.1/cgi-bin/luci/webpanel/homepage</a></p>
<p style="font-size: 12.16px;">log in - password is <strong>dragino</strong></p>
<p style="font-size: 12.16px;"> </p>
<h3 style="font-size: 12.16px;">Configure the wireless network</h3>
<p style="font-size: 12.16px;">Go to<strong> <em>System &gt; Wireless parameters</em></strong></p>
<p style="font-size: 12.16px;">Add your local wifi details and then press '<strong><em>configure / restart</em></strong>'</p>
<p style="font-size: 12.16px;">Then rejoin your local wifi net on your computer</p>
<p style="font-size: 12.16px;">Now you should be able to connect to iduino by IP in your browser - you will need to check with your router what ip address has been assigned to the iduino, it will most likely be something like - <span style="font-size: 12.16px;">192.168.x.x</span> </p>
<p style="font-size: 12.16px;">You should also now be able to connect via SSH to <span style="font-size: 12.16px;">192.168.x.x:22 </span><span style="font-size: 12.16px;">using your favourite SSH client. The username / password is: root / iduino You will need to use SSH for the following steps.</span></p>
<p style="font-size: 12.16px;">  </p>
<h3>Using an external USB / SD Card to increase memory.</h3>
<p>If you want to use your YUN for anything worthwhile you will likely want to install other software on it or have some room to store stuff so the first thin that you need to address is the lack of storage space. This is easily done by utilising some form of external drive.</p>
<p style="font-size: 12.16px;">Newer versions of the YUN shield come with an SD slot. The version I have only has a USB port. The Arduino YUNs also have an SD slot. The following should work for any board with access to either an SD or USB port as it essentially does not care where the devices are located, they are just referenced as mount points.</p>
<p style="font-size: 12.16px;">First, lets see what we have to start with...</p>
<p style="font-size: 12.16px;">In your browser, go to the Iduino and navigate to System &gt; Advanced configuration &gt; System &gt; Mountpoints to view existing partitions and mount points along with space used. It will show you what existing filesystems are mounted and their sizes</p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;"> </p>
<h3>Setting up the USB  </h3>
<p style="font-size: 12.16px;">I used a Sandisk 32gb USB 3.0 memory stick simply as it was physically the smallest I could find. You could also use an external hard drive or anything else that suited your project.</p>
<p style="font-size: 12.16px;">We'll be formatting the drive and then telling the Yun to use it instead of the internal memory, which will give us heaps of space to install additional programs and save data.</p>
<p style="font-size: 12.16px;">Now is the time to plug it in.</p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">First we need to update the packages list. Issue the following command via your SSH client</p>
<p style="font-size: 12.16px;"><strong><em>opkg update</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Next install the utilities to format in EXT4 (note these packages were appropriate for my older YUN shield, they should also work for later versions but are untested)</p>
<p style="font-size: 12.16px;"><strong><em>opkg install e2fsprogs mkdosfs fdisk rsync</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Next clear the partition table</p>
<p style="font-size: 12.16px;"><strong><em>dd if=/dev/zero of=/dev/sda bs=4096 count=10</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Create the data partition - this is allocated 1024Meg (1 Gb) This is available to the Arduino and so must be formatted as FAT (which we will do in a sec)</p>
<p style="font-size: 12.16px;"><strong><em>(echo n; echo p; echo 1; echo; echo +1024M; echo t; echo c; echo w) | fdisk /dev/sda</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Create the swap partition (1024 Meg) NOTE: system RAM is only 64Meg so you may need to assign more swap depending on your intended use.</p>
<p style="font-size: 12.16px;"><strong><em>(echo n; echo p; echo 2; echo; echo +1024M; echo t; echo 2; echo 82; echo w) | fdisk /dev/sda</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Create the linux partition (remaining space)</p>
<p style="font-size: 12.16px;"><strong><em>(echo n; echo p; echo 3; echo; echo; echo w) | fdisk /dev/sda</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Next format the data partition to FAT32</p>
<p style="font-size: 12.16px;"><strong><em>mkfs.vfat /dev/sda1</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Format the swap partition</p>
<p style="font-size: 12.16px;"><strong><em>mkswap /dev/sda2</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">and format the linux partition to Linux EXT4</p>
<p style="font-size: 12.16px;"><strong><em>mkfs.ext4 /dev/sda3</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Now we have the relevant partitions we need to copy the existing data from the device onto the USB stick </p>
<p style="font-size: 12.16px;">We start with creating the Arduino folder structure</p>
<p style="font-size: 12.16px;"><strong><em>mkdir -p /mnt/sda1</em></strong></p>
<p style="font-size: 12.16px;"><strong><em>mount /dev/sda1 /mnt/sda1</em></strong></p>
<p style="font-size: 12.16px;"><strong><em>mkdir -p /mnt/sda1/arduino/www</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Next we copy the files from Arduino Yun flash to the USB</p>
<p style="font-size: 12.16px;"><strong><em>mkdir -p /mnt/sda3</em></strong></p>
<p style="font-size: 12.16px;"><strong><em>mount /dev/sda3 /mnt/sda3 </em></strong></p>
<p style="font-size: 12.16px;"><strong><em>rsync -av  --exclude=/mnt/ --exclude=/www/sd /overlay/ /mnt/sda3/</em></strong></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;"> </p>
<h3 style="font-size: 12.16px;">Setting up FSTAB</h3>
<p style="font-size: 12.16px;">So up until now we've formatted and partitioned the USB and we've copied the filesystem from the YUN into the Linux partition we created. Next we need to change which filesystem mount-points the device uses when it boots up. We want it to use our newly created USB partitions as our 'external root' or 'extroot' as it is referred to on the OpenWrt project page.  To do this the /etc/config/fstab file needs to be modified so that the appropriate mount points are used on boot. you can use the command...</p>
<pre class="code bash" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace; font-size: 14px; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);">block detect <span class="sy0" style="color: #66cc66;">&gt;</span> <span class="sy0" style="color: #66cc66;">/</span>etc<span class="sy0" style="color: #66cc66;">/</span>config<span class="sy0" style="color: #66cc66;">/</span>fstab </pre>
<p style="font-size: 12.16px;">you will need to edit the file with vim:</p>
<pre class="code bash" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);"><span style="font-size: 14px;"><span style="font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace;">vim /etc/config/fstab<br /></span></span></pre>
<p style="font-size: 12.16px;">Or if like me you prefer nano you can install it with the following command</p>
<pre class="code bash" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);"><span style="font-size: 14px;"><span style="font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace;">opkg update &amp;&amp; opkg install nano</span></span></pre>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">I needed to change the targets to /data and /overlay extend delay_root and also enable each option...</p>
<p style="font-size: 12.16px;"> </p>
<pre class="code bash" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);"><span style="font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace; font-size: 14px;">       <br /></span><span style="font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace;"><span style="font-size: 14px;">config 'global'
        option  anon_swap       '0'
        option  anon_mount      '0'
        option  auto_swap       '1'
        option  auto_mount      '1'
        option  delay_root      '35'
        option  check_fs        '0'

config 'mount'
        option  target  '/data'
        option  uuid    'CD16-9E2C'
        option  enabled '1'

config 'swap'
        option  device  '/dev/sda2'
        option  enabled '1'

config 'mount'
        option  target  '/overlay'
        option  uuid    'a48cb511-2aca-4bcc-bbab-fd872383239e'
        option  enabled '1'</span></span>
</pre>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Next we need to enable fstab at boot</p>
<pre class="code" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace; font-size: 14px; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);"><span style="text-decoration: line-through;">/etc/init.d/fstab enable</span></pre>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;"> then reboot by issuing the following command</p>
<pre class="code bash" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);"><span style="font-size: 14px;"><span style="font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace;">reboot</span></span></pre>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;">Wait until the WIFI LED on the board is flashing to indicate that it has rejoined the WIFI network and rejoin your SSH &amp; browser sessions</p>
<p style="font-size: 12.16px;">Check the mounted filesystems - either in the admin interface<em> System &gt; Mount Points</em> or on the command line using the <em>df</em> command...</p>
<p style="font-size: 12.16px;"> </p>
<pre class="code bash" style="margin-top: 0px; margin-bottom: 1.4em; padding: 0.7em 1em; font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Bitstream Vera Sans Mono', 'Nimbus Mono L', Monaco, 'Courier New', monospace; font-size: 14px; direction: ltr; border-radius: 2px; overflow: auto; overflow-wrap: normal; border: 1px solid #cccccc; box-shadow: #cccccc 0px 0px 0.5em inset; background: rgba(255, 255, 255, 0.9);">root@dragino-140790:~# df<br />
Filesystem           1K-blocks      Used Available Use% Mounted on
rootfs                29184600    565376  27156392   2% /
/dev/root                 8960      8960         0 100% /rom
tmpfs                    30560       636     29924   2% /tmp
tmpfs                      512         0       512   0% /dev
/dev/sda3             29184600    565376  27156392   2% /overlay
overlayfs:/overlay    29184600    565376  27156392   2% /
/dev/sda1               511720        16    511704   0% /data</pre>
<p style="font-size: 12.16px;">As you can see both overlay and rootfs are now the size of the linux partition we created earlier</p>
<p style="font-size: 12.16px;"><em>TIP: Before we go any further it's worth checking that the swap is actually enabled in the Dragon admin panel under System &gt; Mount Points, without the swap enabled file actions will be a LOT slower as the unit only has limited ram, in fact installation of larger apps will likely fail.</em></p>
<p style="font-size: 12.16px;"><span style="font-size: 12.16px;">Congrats, now you have some room to use. Now we can start to install other stuff.</span></p>
<p style="font-size: 12.16px;"> </p>
<p style="font-size: 12.16px;"> </p>
