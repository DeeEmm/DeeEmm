---
layout: post
title: Dolphin - Change landing page after login
joomla_id: 213
joomla_url: dolphin-change-landing-page-after-login
category: Dolphin 7.0.x Modifications
tags: d7 dolphin-7 landing-page login mod
date: 2010-07-01 02:19:15.000000000 +09:30
---
<p>If you want to direct members to a page other than the standard dashboard page (member.php) after they log in, then follow these simply steps.</p>
<p>Edit <em><strong>member.php</strong></em></p>
<p>Find the following code</p>
<pre>if(!$sUrlRelocate = $_REQUEST['relocate'] or $_REQUEST['relocate'] == $site['url'] or basename( $_REQUEST['relocate'] ) == 'join.php' ) <br>$sUrlRelocate = $_SERVER['PHP_SELF'];</pre>
<p>Change it to...</p>
<pre>if(!$sUrlRelocate = $_REQUEST['relocate'] or $_REQUEST['relocate'] == $site['url'] or basename( $_REQUEST['relocate'] ) == 'join.php' ) <br>{<br>   $sUrlRelocate = $_SERVER['PHP_SELF'];<br>}else{<br>&nbsp;&nbsp; $sUrlRelocate = 'profile.php';<br>}</pre>
<p>Where <strong><em>profile.php</em></strong> is the page to redirect to.</p>
