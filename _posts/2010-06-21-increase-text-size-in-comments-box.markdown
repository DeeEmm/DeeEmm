---
layout: post
title: Dolphin 7 - Increase text size in comments box
joomla_id: 208
joomla_url: increase-text-size-in-comments-box
category: Dolphin 7.0.x Modifications
tags: comments-box css d7-increase dolphin-7 font mod size text
date: 2010-06-21 01:58:59.000000000 +09:30
---
<p>If you have the tinymce editor enabled for comments boxes, and you wish to increase the size of the text, then you will need to do the following.</p>
<p>To alter the size of the text in the comments area - if you have tinymce enabled for comments.</p>
<p>Edit <em><strong>/tinymce/themes/advanced/skins/default/content.css</strong></em></p>
<p>look for the following element</p>
<pre>body, td, pre {color:#000; font-family:Verdana, Arial, Helvetica, sans-serif; <strong><span style="color: #ff0000;">font-size:10</span></strong> &nbsp;&nbsp; px; margin:8px;}</pre>
<p>Simply change the value in red to the desired setting.</p>
<p>/DM</p>
<p>&nbsp;</p>
