---
layout: post
title: You cannot access the private section of this site.
joomla_id: 258
joomla_url: you-cannot-access-the-private-section-of-this-site
category: General
tags: access assets joomla private
date: 2013-08-08 10:30:46.000000000 +09:30
---
<p>This was the error I was recently faced with when I re-enabled user registrations here on the DeeEmm site.</p>
<p>You may recall from my last blog post&nbsp;<a href="entry/general/virtuemart-revisited">Virtuemart Revisited</a>&nbsp;that I have recently re-installed Virtuemart so that I can sell some extensions via a store front right here on the site.&nbsp;As part of my testing I run through the usual user experience to check that things work as they should and found that after registering a user, confirming the account and then being enabled by an administrator the 'You cannot access the private section of this site.' message was displayed and the new user could not log in.<a class="PostHeader" href="http://tips.paddyonline.net/other-generic/various-tips-tricks/other-generic/joomla-error-you-cannot-access-the-private-section-of-this-site" style="font-family: 'Lucida Grande', 'Lucida Sans Unicode', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 1em; text-decoration: underline; text-align: left; color: #1e6c7b; padding: 0px; margin: 0px;"><br></a></p>
<p>Hmmnnn, not good.&nbsp;</p>
<p>So I&nbsp;check&nbsp;the ACL to ensure that the 'registered' user level has login access to the site. All good there so that isn't the issue. I then turn to Google to see what that turns up and find that most of the solutions given&nbsp;relate&nbsp;to the ACL permissions.</p>
<p>Hmmnnn, so what next?</p>
<p>A bit more digging and I find that this was a common error when migrating from 1.5, which is exactly what I had done, albeit at some point in the distant past. Obviously this had never been raised as an issue as I did not have user registrations enabled but now that I needed to reenable them it was time to fix the problem.</p>
<p>The cause of the issue is somewhat odd and is related to the #__assets table. The assets table stores the relational data that is used to determine the parent &gt; child relationships of all site content. Normally the top level entry is the 'Root Asset' with a parent_id of 0 along side the top level categories which may also have a parent_id of 0. The issue arises if there are any articles that have a parent_id of 0, for some reason this messes with the permissions engine and will not allow normal users to log in.</p>
<p>It's pretty easy to check by either browsing to the #__assets table in phpMyAdmin and filtering the results on the parent_id field or by simply running the following SQL Query.&nbsp;</p>
<pre class="brush:sql">SELECT * FROM `#__assets` WHERE `parent_id` = 0
</pre>
<p>The fix is equally as simple, or at least it can be if you want to assign all the stray articles to a single category. Simply run the following SQL Query and replace the parent_id value with the id corresponding to the category you want to assign the rogue articles to</p>
<pre class="brush:sql">UPDATE `#__assets` SET `parent_id` = 1 WHERE `parent_id`= 0 AND NOT `id` = 1
</pre>
<p style="text-align: left;">This will update all records except the very first record which should be the&nbsp;aforementioned&nbsp;'Root Asset'</p>
<p>You can&nbsp;verify&nbsp;that the Root Asset still has correct parent_id by running the following SQL Query&nbsp;</p>
<pre class="brush:sql">SELECT * FROM `#__assets` WHERE `id` = 0 OR `parent_id` = 0
</pre>
<p>This should return just the Root Asset record. If for some&nbsp;reason&nbsp;it does not you can correct this and set parent_id back to 0 with the following SQL Query</p>
<div>
<div id="highlighter_270126">
<pre class="brush:sql">UPDATE `#__assets` SET `parent_id` = 0 WHERE `title = "Root Asset"
</pre>
<p>I opted to manually trawl through my records and assign each item to the correct category but I only did this as I have a variety of articles in a variety of categories and only about a dozen or so entries that needed fixing. The end result was that a plethora of articles that had been MIA for some time suddenly appeared back in the tutorials section. The mismatched parent_id value was actually preventing the articles from showing.&nbsp;</p>
</div>
</div>
<div>It was quite worrying to think that this issue had actually been present for quite some time and due to the user registrations being disabled had never been discovered. It always goes to show that there is no substitute for a team of testers.</div>
<div>&nbsp;</div>
<div>Whilst I've outlined the solution to the issue above I cannot take credit for it as it was something I discovered whilst googling. Full credit for the solution goes to Paddy Online -&nbsp;<a href="http://tips.paddyonline.net/other-generic/various-tips-tricks/other-generic/joomla-error-you-cannot-access-the-private-section-of-this-site" target="_blank">http://tips.paddyonline.net/other-generic/various-tips-tricks/other-generic/joomla-error-you-cannot-access-the-private-section-of-this-site</a></div>
<p>&nbsp;</p>
