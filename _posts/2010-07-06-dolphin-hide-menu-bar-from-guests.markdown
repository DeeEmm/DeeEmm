---
layout: post
title: Dolphin - Hide Menu Bar from Guests
joomla_id: 220
joomla_url: dolphin-hide-menu-bar-from-guests
category: Dolphin 7.0.x Modifications
tags: d7 dolphin-7 guests hide menu-bar
date: 2010-07-06 21:44:09.000000000 +09:30
---
<p>If you would like to completely hide the menu bar from non-members, then this is the mod for you.</p>
<p>Edit</p>
<p><strong>templates/base/scripts/BxBaseMenu.php</strong></p>
<p>Find</p>
<p class="code">return $this-&gt;sCode;</p>
<p>Change it to...</p>
<pre>if (islogged()){<br><span style="white-space: pre;"> return $this-&gt;sCode;<br>}&nbsp;</span></pre>
<p>All Done!</p>
<p>&nbsp;</p>
<p>If you also want to hide the stripe that the menu bar resided in - you might want to also add this to your template...</p>
<p class="code">div.sys_top_menu {<br> min-height:0px !important;<br>}</p>
<p>Of course YMMV depending on template etc.</p>
<p>&nbsp;</p>
<p>/DM</p>
