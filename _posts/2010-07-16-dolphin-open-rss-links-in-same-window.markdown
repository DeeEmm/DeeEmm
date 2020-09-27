---
layout: post
title: Dolphin - Open RSS links in same window
joomla_id: 223
joomla_url: dolphin-open-rss-links-in-same-window
category: Dolphin 7.0.x Modifications
tags: d7 dolphin-7 rss
date: 2010-07-16 05:25:36.000000000 +09:30
---
<p>If you do not want a new window opening when you click on links in RSS feeds - such as the forum feed, you will need to do the following.</p>
<p>Edit</p>
<p><strong><em>/inc/js/jquery.dolRSSFeed.js</em></strong></p>
<p>find two instanced of</p>
<p class="code">target="_blank"</p>
<p>replace them with</p>
<p class="code">target="_top"</p>
<p>/DM</p>
