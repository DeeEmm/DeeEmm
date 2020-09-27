---
layout: post
title: Dolphin - Hide banners from guests
joomla_id: 222
joomla_url: dolphin-hide-banners-from-guests
category: Dolphin 7.0.x Modifications
tags: banners d7 dolphin-7 guests hide
date: 2010-07-15 13:22:07.000000000 +09:30
---
<p>If you want to hide advertising banners from non members - do this...</p>
<p>Edit</p>
<p><strong>/inc/banners.inc.php</strong></p>
<p>Search for</p>
<pre>return $out;</pre>
<p>Replace it with</p>
<pre>if (islogged()){<br>&nbsp;&nbsp; return $out;<span style="white-space: pre;"> <br></span>}</pre>
<p>Thats it!</p>
<p>/DM</p>
