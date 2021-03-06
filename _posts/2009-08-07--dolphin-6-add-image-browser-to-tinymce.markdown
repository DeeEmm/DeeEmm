---
layout: post
title: Dolphin 6 - Add Image Browser To TinyMCE
joomla_id: 176
joomla_url: "-dolphin-6-add-image-browser-to-tinymce"
category: Dolphin 6.1.x Modifications
tags: browser d6 dolphin-6 image tinymce
date: 2009-08-07 22:08:47.000000000 +09:30
---
<p>One thing that Dolphin 6 lacks is a decent way for users and admin to be able to add images to posts<br><br>This is now available with the ezfilemanager plugin for tinyMCE - <a href="http://www.webnaz.net/ezfilemanager/" title="http://www.webnaz.net/ezfilemanager/">http://www.webnaz.net/ezfilemanager/</a> <br><br>To get this up and running you should do the following...<br> <br> Down load the EzFileManager plugin from the link above and then copy the plugin files to</p>
<p><br> <br> <span class="code">/plugins/tinymce/plugins/</span><br> </p>
<p>Now you need to edit the configuration file</p>
<p>&nbsp;</p>
<p class="code">/ezfilemanager/includes/config.inc.php</p>
<p>Basically you need to set the paths for your installation - this will be as follows... <br><br></p>
<pre>define("WN_URL","http://yoursite.com/");//your domain  url <br>define('WN_PATH','/full/path/to/your/site/');//domain root  absolute path</pre>
<p>If they do not exist, you will also need to create the follwing folders... '/images/', '/docs/' and '/media/' you might also want to consider changing these from the standard locations.</p>
<p>Now you need to add the call for EzFileManager into the tinymce.init for the pages you want it to appear on, for me this is just the admin page so I edited /inc/classes/BxDolPageviewAdmin.php to include the following...<br> <br> After the function for tinyMCE_GZ.init but before the closing script tag add the following...<br> </p>
<p class="code">function ezfilemanager (field_name, url, type, win) {<br>var PluginPath = "/plugins/tiny_mce/plugins/ezfilemanager/ezfilemanager.php";<br>if (PluginPath.indexOf("?") &lt; 0)<br>{<br>PluginPath = PluginPath + "?type=" + type;<br>} else {<br>PluginPath = PluginPath + "&amp;type=" + type;<br>}<br>tinyMCE.activeEditor.windowManager.open({</p>
<p>Then add the following calls within both tinyMCE_GZ.init and tinyMCE.init functions.</p>
<p><br> <br> <span class="code">file_browser_callback : "ezfilemanager", relative_urls : false,</span></p>
<p>&nbsp;</p>
<p>You should now be able to access the image upload part of EzFileManager by clicking on the new button created in the image dialog on admin pages.</p>
<p>You can also add a button for EzFileManager by including 'ezfilemanager' in the list of plugins - accessing EzFileManager via the dedicated button will also allow access to the file manager aspect of the code.</p>
<p>If you want to also add it for users you will need to modify the relevent files to include same modifications within headers - To do this search for tinymce.init and determine which files need to be modified.</p>
<p>I have not added it for my users as there is no security and no differentiation between the files uploaded for each user (all files are saved in the same place) this means that all users have access to everyone else's files - not good for my site where some users may be members of private groups.</p>
<p>DM</p>
