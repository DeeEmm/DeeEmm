---
layout: post
title: D7 Hide Promo from logged in users
joomla_id: 205
joomla_url: d7-hide-promo-from-logged-in-users
category: Dolphin 7.0.x Modifications
tags: d7 dolphin-7 hide logged mod promo users
date: 2010-05-02 13:52:25.000000000 +09:30
---
<p>If you would like to hide the flash promo from displaying to logged in members all you have to do is the following.</p>
<p>Edit <strong>inc/design.inc.php</strong></p>
<p>Find the following line in the getPromoCode() function (it's the last line)</p>
<p class="code">return $sCode;</p>
<p>Then add just before it:</p>
<p class="code">if(isMember()) $sCode = '';</p>
<p>That's it! Easy huh?</p>
<p>/DM</p>
<p>&nbsp;</p>
