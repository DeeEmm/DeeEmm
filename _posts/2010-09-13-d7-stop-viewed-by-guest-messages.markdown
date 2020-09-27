---
layout: post
title: D7 - Stop 'viewed by guest' messages.
joomla_id: 225
joomla_url: d7-stop-viewed-by-guest-messages
category: Dolphin 7.0.x Modifications
tags: d7 dolphin-7 fix messages mod viewed-by-guest
date: 2010-09-13 21:52:11.000000000 +09:30
---
<p>If, like me you get tired of seeing an activity feed that is full of <em>"profile blah viewed by guest</em>" type messages, the fix is very easy.</p>
<p>Edit modules/boonex/spy/BxSpyProfilesActivity.php</p>
<p>Look for the following code</p>
<pre>case 'view' :<br>if($iSenderId != $iRecipientId) { &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</pre>
<p>Replace it with</p>
<pre>case 'view' :<br>if($iSenderId != $iRecipientId &amp;&amp; $iSenderId != 0) {</pre>
<p>That's it!!</p>
<p>Enjoy.</p>
<p>/DM</p>
