---
layout: post
title: Dolphin - Remove 'unregister' Links
joomla_id: 212
joomla_url: dolphin-remove-unregister-links
category: Dolphin 7.0.x Modifications
tags: d7-remove dolphin-7 links mod unregister
date: 2010-06-30 00:41:52.000000000 +09:30
---
<p>To disabled the un-register buttons on your site - go to admin &gt; builders &gt; navigation builder and un-check both member and guest check boxes from the unregister link. This will prevent it from being displayed in the top menu and the quick links menu.<br><br>You will then need to also get rid of the link from the members menu too.<br><br>To do this you will need to edit your database - look in the sys_menu_member table for the entry named Dashboard - Then you will need to edit the PopupMenu field - simply remove the following text, leaving the rest intact</p>
<pre>&nbsp;&nbsp;&nbsp; 'unregister' =&gt; array(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'url'&nbsp;&nbsp;&nbsp;&nbsp; =&gt; 'unregister.php',<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'icon'&nbsp;&nbsp;&nbsp; =&gt; 'memeber_menu_sub_unregister.png',<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'caption' =&gt; _t( '_Unregister' ),<br>&nbsp;&nbsp;&nbsp; ),</pre>
<p><br>Then delete all files in cache folder except for the .htaccess file.</p>
<p>Refresh and enjoy.</p>
<p>/DM</p>
