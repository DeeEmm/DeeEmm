---
layout: post
title: Fix your painfully slow PHP mail() function.
joomla_id: 256
joomla_url: fix-your-painfully-slow-php-mail-function
category: General
tags: apache hosts mail ubuntu
date: 2013-08-02 12:17:49.000000000 +09:30
---
<p>Having moved all of my sites to the Excellent <a href="https://www.digitalocean.com/?refcode=a6a4bd4b10c9" title="https://www.digitalocean.com/?refcode=a6a4bd4b10c9">Digital Ocean</a>&nbsp;hosting I noticed that on some sites the php mail function seemed to be painfully slow and in some cases threw up some error messages telling me that it had failed. Googling didn't turn up too much in the way of solutions, most information seemed to suggest that the sendmail or postfix packages be installed instead.</p>
<p>Whilst sendmail and postfix are both great solutions, I did not really want to install a fully fledged mail server on my box as all email handling for my domains is handled on a separate server. It seemed like too much of a waste of resources so I decided to simply fix the issue with the php mail() function.&nbsp;</p>
<p>After doing a bit of digging I discovered that the issue lay with the hosts file. The host info was incorrect.</p>
<p>Editing the hosts file is pretty easy to do, but first you will need to know what the current hostname is set to. To do this simply type in the following command at the command prompt</p>
<pre>hostname</pre>
<p>This will return the hostname for your server, in my case it was marzipan</p>
<p>Next edit your hosts file. On Ubuntu this is can be found at /etc/hosts. To edit the hosts file invoke your favourite editor, for example</p>
<pre>sudo nano /etc/hosts</pre>
<p>What I found in my hosts file was that the fully qualified local host name was missing. Instead of looking like this</p>
<pre>127.0.0.1 &nbsp; &nbsp; &nbsp; localhost&nbsp;localhost.localdomain marzipan</pre>
<p>It looked like this</p>
<pre>127.0.0.1 &nbsp; &nbsp; &nbsp; localhost marzipan</pre>
<p>I simply edited the file, adding the&nbsp;<em>localhost.localdomain</em>&nbsp;reference and then saved the file. (obviously)</p>
<p>To ensure that the change was picked up I restarted apache, on my server I use the following command</p>
<pre>sudo service apache2 restart</pre>
<p>That's it! My email is now fixed and my websites can happily and easily send email messages without issue. There's no delays and my php code doesn't hang when trying to call the php mail() function. A pretty easy fix for a rather annoying issue.</p>
<p>/DM</p>
