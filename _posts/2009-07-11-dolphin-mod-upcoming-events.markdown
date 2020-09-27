---
layout: post
title: Dolphin MOD - Upcoming Events
joomla_id: 178
joomla_url: dolphin-mod-upcoming-events
category: Dolphin 6.1.x Modifications
tags: d6 dolphin-6 events mod upcoming
date: 2009-07-11 22:28:44.000000000 +09:30
---
<div id="105" class="post_text">
<p>One thing that has always bugged me about my dolphin site, is that it always shows me events that are waaaay waaaay in the future - This is of little use as it hides the upcoming events - practically meaning that no one knows what is happening in the coming days / weeks / months / etc.</p>
<p>This is easily fixed with a quick hack.</p>
<p>To display events so that they show from the next upcoming event onward...</p>
<p class="code">Edit /inc/classes/BxDolEvents.php</p>
<p>At approximately line 2242 you will see the following</p>
<p class="code"><strong><em> switch ($sOrder) {</em></strong></p>
<p>This selects the appendage to the SQL statement retrieving the events from the database. The default case select statement is 'latest'.</p>
<p>To change the behaviour, we simply replace this case with</p>
<p>&nbsp;</p>
<p><em><strong><span class="code"> $sOrderS = "AND `EventStart` BETWEEN NOW() AND NOW()+ INTERVAL 362 DAY ORDER BY `EventStart` ASC";</span></strong></em></p>
<p>&nbsp;</p>
<p>Now the Events Block will show the next event in time and those after it up to a year away (or the three or so events that the block is allowed to show)</p>
<p>To do this mod properly, ideally another case should be added for 'upcoming' and the relevent code added where required to add another tab to the block - this way the user could select to view upcoming events, latest events or a random selection.</p>
<p>&nbsp;</p>
<p>DM</p>
</div>
