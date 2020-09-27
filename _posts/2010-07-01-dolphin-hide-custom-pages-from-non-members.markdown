---
layout: post
title: Dolphin - Hide custom pages from non-members
joomla_id: 215
joomla_url: dolphin-hide-custom-pages-from-non-members
category: Dolphin 7.0.x Modifications
tags: custom d7 dolphin-7 hide mod non-members pages
date: 2010-07-01 11:07:51.000000000 +09:30
---
<p>Dolphin is not very good with permissions, as a result it is impossible to assign permissions to individual pages. So if you have created some custom pages for your site that you only want to display to logged in members, you will need the following hack...</p>
<p>Edit</p>
<p><em><strong>viewPage.php</strong></em></p>
<p>Find</p>
<p class="code">$sPageName = process_pass_data( $_GET['ID'] );</p>
<p>Add underneath</p>
<p>(be sure to change YOURPAGE to the name of your page!!)</p>
<p>&nbsp;</p>
<p class="code">if ($sPageName == 'YOURPAGE' &amp;&amp; !isMember()){<br> $oSysTemplate-&gt;displayAccessDenied ();<br>}else{</p>
<p>Find</p>
<pre>} else {
&nbsp; &nbsp;$oSysTemplate-&gt;displayPageNotFound();
}</pre>
<p>Add Underneath</p>
<p class="code">}</p>
<p>That's it.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Enjoy</p>
<p>/DM</p>
<p>&nbsp;</p>
