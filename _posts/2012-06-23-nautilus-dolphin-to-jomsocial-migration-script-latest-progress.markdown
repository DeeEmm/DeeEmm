---
layout: post
title: 'Nautilus: Dolphin to JomSocial migration script - Latest progress.'
joomla_id: 236
joomla_url: nautilus-dolphin-to-jomsocial-migration-script-latest-progress
category: Latest News
tags: boonex dolphin jomsocial joomla migrator nautilus
date: 2012-06-23 04:22:38.000000000 +09:30
---
<p>After restarting work on the migration script a few weeks back I have made great progress on getting it finished. I have gone through a few revisions and am now on version 0.10. The bugs are slowly getting addressed and the end is nearing.</p>
<p>The current version 0.10 is still in progress. I'm currently working on migrating the group forum posts into the discussion section of each group, but this is proving to be harder than originally anticipated. Still to go before I release the next version are to migrate articles, navigation structure and IBDW Spywall entries.&nbsp;I finally decided to migrate Spywall posts as the user profile pages look very bare. Plus the transition from old to new will be a lot smoother for members.</p>
<p>One major change is that I decided to flip the way that the migration is carried out. Originally I opted to install JomSocial and copy the Boonex files into a sub directory. However, after some thought I decided that it would be better to do the opposite. Now the migration is carried out by installing JomSocial into a sub directory. This means that you can get the whole migration up and running before going live. It also allows you to easily retain or switch between both sites by using htaccess rules.</p>
<p>The other major change is to move away from the corePHP Wordpress plugin and use EasyBlog. EasyBlog is much more user friendly and comparable with Wordpress on a basic level. OK so it doesn't have the plethora of plugins available to Wordpress, but on a community site this is probably a good thing. I do Have one JomSocial site that uses the corePHP Wordpress plugin, and whilst it works well, it is generally too complex for most users to get their heads around. If anyone really wants / needs a specific blogging platform I would be happy to write a custom script, although I would not do this for free.</p>
<p>I have addressed most of the issues with the previous release including the video and photo sections. All videos, both embedded and uploaded are now supported. Groups are migrated as are events, forums and groups. I have also added messages to the migrator. Although my own site does not really utilise the messaging function, there would be plenty that do.&nbsp;</p>
<p>One nagging issue that I have not been able to fix relates to the forums. There is a bug that means a small amount of posts are not being converted from HTML into the BBcode that the forum uses. This means that the HTML tags display in the posts. I've stared at this particular issue for so long that I now have code blindness. It only happens to longer posts and almost seems to be an issue related to REGEX or database limitations. For the time being I've decided to focus on the outstanding issues, and leave this issue until later.</p>
<p>Once the basic migration script has been finished I will then look towards writing some code to allow htaccess redirects for the moved content. This is really important for SEO and retaining any rankings that you may have already amassed. The redirect script will utilise both htaccess rules and a custom php script to lookup the new data and return the correct link with a 301 (permanent) redirect. This will also allow any hot linked images or videos to still work.</p>
<p>At the moment I'm throwing all of the time that I can at getting the script finished as I want to migrate my remaining Dolphin site to JomSocial. Timeframe for the finished article including redirect script is probably still at least a month away, although a fully functional migration script will hopefully be closer.</p>
<p>Anyhows, Here's the changelog...</p>
<p>/DM</p>
<p>&nbsp;</p>
<p>Version 0.10 (so far)</p>
<p>21.06.12<br>- Improved forum migration<br>- Kunena setup (categories to be enabled - add viewing permissions)&nbsp;<br>- Fixed group avatars&nbsp;<br>-</p>
<p>Version 0.9 <br>20.06.12 <br>- Fixed Video migration <br><br>Version 0.8<br> 08.06.12 <br>- Improved video migration <br>- Updated Photo migration <br>- Reformatted script to work from subfolder of dolphin installation <br>- Added groups migration <br>- Added easyblog integration <br>- Improved Forum migration <br>- Added Message migration <br>- Added Sites migration</p>
