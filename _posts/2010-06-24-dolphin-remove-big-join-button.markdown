---
layout: post
title: Dolphin - Remove big join button from promo
joomla_id: 210
joomla_url: dolphin-remove-big-join-button
category: Dolphin 7.0.x Modifications
tags: d7-remove dolphin-7 join-button mod promo
date: 2010-06-24 05:18:27.000000000 +09:30
---
<p>There are a few different ways of removing the join button from the promo banner. The method you use will vary depending on your requirements. You can even change the location that it navigates to.</p>
<p>Here's a few different methods.</p>
<p>&nbsp;</p>
<p><strong>Remove (hide) button via CSS</strong></p>
<p>Edit the following file</p>
<p><em>templates/tmpl_uni/css/top_menu.css</em></p>
<p>Add the following to the bottom of the file</p>
<p class="code">.sys_tm_actions div.button_wrapper .bigJoinButton {<br> display:none !important;<br>}<br><br>.sys_tm_actions div.button_wrapper .bigJoinButton + .button_wrapper_close{<br> display:none !important;<br>}</p>
<p>This hides the button, but relies on some CSS3 attributes (the plus sign is a boolean operator used to say that both&nbsp;<span style="font-family: 'Courier News', monospace; line-height: 15px;">.</span>bigJoinButton + .button_wrapper_close are required) - this is not supported by earlier versions of explorer.</p>
<p>The requirement for the second css statement is to hide the image that forms the right hand side of the button - the Boonex code does not differentiate between the login and join buttons, so without the conditional statement it will hide this image on both buttons.</p>
<p>If your template does not include this, then simply use the first statement to hide the button.</p>
<p>&nbsp;</p>
<p><strong>Remove button via base template</strong></p>
<p>To remove the code that generates the button, edit the following file</p>
<p><em>/templates/base/login_join.html</em></p>
<p>find the following...</p>
<p>&nbsp;</p>
<div class="button_wrapper" style="margin-right: 14px;"><input class="form_input_submit bigJoinButton submit" type="button" name="join" value="value">
<div class="button_wrapper_close">&nbsp;</div>
</div>
<p>delete it or comment it out like this...</p>
<p>&nbsp;</p>
<pre style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; margin-top: 5px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 10px; padding-right: 15px; padding-bottom: 10px; padding-left: 15px; border-left-width: 5px; border-right-width: 1px; border-top-width: 1px; border-bottom-width: 1px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f6f6f6; font: normal normal normal 1em/1.5 'Courier News', monospace; white-space: pre-wrap; word-wrap: break-word; background-position: initial initial; background-repeat: initial initial; border-color: #999999; border-style: solid;">&nbsp;</pre>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Change the target of the button</strong></p>
<p>The last option is to leave the button as it is, and simply change it to open a different target.</p>
<p>Edit</p>
<p><em>/templates/base/login_join.html</em></p>
<p>find the following...</p>
<p>&nbsp;</p>
<pre style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; margin-top: 5px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 10px; padding-right: 15px; padding-bottom: 10px; padding-left: 15px; border-left-width: 5px; border-right-width: 1px; border-top-width: 1px; border-bottom-width: 1px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f6f6f6; font: normal normal normal 1em/1.5 'Courier News', monospace; white-space: pre-wrap; word-wrap: break-word; background-position: initial initial; background-repeat: initial initial; border-color: #999999; border-style: solid;"><input class="form_input_submit bigJoinButton submit" type="button" name="join" value="value"></pre>
<p>Change it to the following</p>
<p>&nbsp;</p>
<pre style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; margin-top: 5px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 10px; padding-right: 15px; padding-bottom: 10px; padding-left: 15px; border-left-width: 5px; border-right-width: 1px; border-top-width: 1px; border-bottom-width: 1px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f6f6f6; font: normal normal normal 1em/1.5 'Courier News', monospace; white-space: pre-wrap; word-wrap: break-word; background-position: initial initial; background-repeat: initial initial; border-color: #999999; border-style: solid;"><input class="form_input_submit bigJoinButton submit" type="button" name="join" value="value"></pre>
<p>&nbsp;</p>
<p>In all of these cases, dont forget, that the button is not the only link that directs to the join.page. If your goal is to provide a custom join page, you may also have to edit other areas of the site.</p>
<p>The easy one to fix is the link that the promo banner navigates to - this can be changed via the admin panel. Harder are the links in the breadcrumbs bar and the login popup. But that's something for another article.</p>
<p>/DM</p>
<p>&nbsp;</p>
