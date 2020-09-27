---
layout: post
title: Dolphin 7 - Get rid of annoying blue padlocks
joomla_id: 228
joomla_url: dolphin-7-get-rid-of-annoying-blue-padlocks
category: Dolphin 7.0.x Modifications
tags: annoying blue d7 dolphin-7 padlocks
date: 2010-12-05 11:34:43.000000000 +10:30
---
<p>This is one of those issues that has annoyed the heck out of most Dolphin users, and one that has been put in the 'too hard basket' by the dolphin devs.</p>
<p>The 'fix', however, is pretty easy.</p>
<p>Just a bit of background info - one of the reasons given for not fixing the issue is that it is too hard to determine which photos should be displayed and which should not. well I would like to call big fat bullshit on that one - if you can determine that you have to display a bug blue padlock, you can certainly determine that it does not have to be displayed at all.</p>
<p>The following fix is simply a hack - all we do is hide the div that contains the nasty blue padlock. This means that the code still gets processed as before - there are no extra overheads, it will not adversely affect your site. And, although this is not the most elegant way of&nbsp;achieving&nbsp;this, the actual solution still involves more or less the same amount of processing. To note - a better way might be to add an admin setting to allow users to select to display it / hide it.</p>
<p>Anyway, here it is...</p>
<p>Edit</p>
<p><strong>photos/templates/base/browse_unit_private.html</strong></p>
<p><em><strong><br></strong></em></p>
<p>Find the following</p>
<p>&nbsp;</p>
<div class="sys_file_search_unit bx_photos_search_unit">
<p>&nbsp;</p>
<p style="font-style: italic;"><strong><em>class="sys_file_search_unit bx_videos_search_unit"</em></strong></p>
<p style="font-style: italic;"><strong><em><br></em></strong></p>
<p style="font-style: italic;">change it to</p>
<p style="font-style: italic;">&nbsp;</p>
<div class="sys_file_search_unit bx_photos_search_unit">
<p style="font-style: italic;">&nbsp;</p>
<p style="font-style: italic; font-weight: bold;"><em><strong>class="sys_file_search_unit bx_videos_search_unit" </strong></em>style="display:none !important"</p>
<p style="font-style: italic; font-weight: bold;">&nbsp;</p>
<p>Job Done. Easy. Quick. Painless.</p>
<p>&nbsp;</p>
<p>You can also do the same to the videos section as well by editing</p>
<p><em>videos/templates/base/browse_unit_private.html</em></p>
<div style="font-style: italic; font-weight: bold;"><em><strong><br></strong></em></div>
<p>/DM</p>
</div>
<strong> </strong></div>
