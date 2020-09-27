---
layout: post
title: Dophin X-Site RSS Feed Bouncer
joomla_id: 179
joomla_url: dophin-x-site-rss-feed-bouncer
category: Dolphin 6.1.x Modifications
tags: bouncer dophin-6 feed rss x-site
date: 2009-06-24 22:30:25.000000000 +09:30
---
<p>Using Boonex Dolphin software can be a bit taxing on your patience, there are many idiosynchracy's that alter the way that Dolphin works from how you would expect most 'normal' scripts to function. One of these is the way that it displays forum posts within groups, blogs and on the main page.</p>
<p>Like many sites, forum posts are aggregated in RSS feeds, different feeds are available for different users, groups, forums and categories. The feeds are available to anyone who wants to view them. Unfortunately Boonex have decided that they should use the same feeds to aggregate data within the site, whilst this may seem like a great idea on the outside, it does however introduce problems on some servers.</p>
<p>So you have installed Dolphin and are now stuckk looking at te spinning icon that tells you the latest forums posts are loading.. and loading... and loading. In fact it seems that they will never load.</p>
<p>This can be one of two things.</p>
<p><a class="link" href="http://us3.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen">allow_url_fopen</a> is not enabled on your server. This can be enabled via php.ini if your server allows php.ini at runtime. (php.ini within local directories)</p>
<p>or...</p>
<p>If allow_url_open is enabled, then it is likely that your host does not allow circular references - ie you cannot call your domain url from within your domain in an fopen transaction. My host is setup like this - they refuse to change it claiming security as a reason, I think it's because they are missing the reference to my domain in their hosts file and are too dumb to be able to fix it - but that's besides the point. (Host - if you are reading this - please fix this issue.)</p>
<p>You can test this by posting the RSS feed URL directly into your browser, if it works the problem&nbsp;is most likely because your host is preventing loopback URL's - ie won't allow local scripts to access the fully qualified name.</p>
<p>Eg the URL for your RSS feed will be something like http://yoursite.com/inc/classes/BxRSS.php?your-rss-info but your host will not allow you to call http://yoursite.com from within your server (if that makes sense).</p>
<p>The usual solution is to use relative paths instead ie ../../inc/classes/BxRSS.php?your-rss-info but the htaccess url rewrite for pretty urls mucks these up (or it needs an entry to handle local paths added).</p>
<p>I also have this problem and it's a tad annoying that they should process local feeds this way. But life sucks and I'm used to it.</p>
<p>There is however half a solution - this is to aggregate your feeds on another site by using a script and then call this script instead. I say half a solution as this does not account for user verification and so cannot access feeds for hidden groups etc. But the hidden groups degrade nicely - there is simply nothing shown, and the link to the forums still appears.</p>
<p>There was a post over at Boonex that outlined one solution you could use, including a script. The script was quite large and did not solve the verification issue. I decided to see if I could improve on this and ended up with the following. Simply paste the following into a text file and name it feedbouncer.php then save it to a different server from your Dolphin site</p>
<p class="code"><!--?php <br ?-->echo (readfile($_GET['feed']));<br>?&gt;</p>
<p>Then - making a note of the RSS feed's URL that you require in the admin panel of Dolphin, it will be something like -</p>
<p class="code">http://yoursite.com/inc/classes/BxRSS.php?your-rss-info</p>
<p>Simply replace it with the following (replace the urls with those that you require)</p>
<p class="code">http://your-different-site.com/path-to/feedbouncer.php?feed=http://yoursite.com/inc/classes/BxRSS.php?your-rss-info</p>
<p>In essence it just echo's back the url. (You can test it by typing the url directly into your browser)</p>
<p>Simple huh? :)</p>
<p>Be aware that this may / may not work depending on the settings of the second server</p>
<p>It is worth noting that you can also use this script to perform further actions on the feed - I have used this on other sites to harvest feeds, pages and add / filter data. This can be easily done by loading the feed or page into a variable and then editing it using basic text manipulation techniques such as string replace.</p>
<p>ie -</p>
<p class="code">$feed = readfile($_GET['feed']);<br>$new_feed = str_replace('old text', 'new text', $feed);<br>echo $new_feed</p>
<p>This can be expanded much much further using more complex manipulation techniques such as regular expressions. Some stuff I have written before using these techniques include ebay harvesters, weather harvesters, news feed harvesters, even automatic translators. the techniques is always the same - read the page into a string, manipulate the string, use / echo the result.</p>
<p>DM</p>
