---
layout: post
title: Fix iTunes 'genius is unavailable' issue
joomla_id: 202
joomla_url: fix-itunes-genius-is-unavailable-issue
category: Mac How To's
tags: error itunes
date: 2010-11-04 10:03:02.000000000 +10:30
---
<p>If you suffer from a non-working iTunes genius, you may find that the following fix is of some help. I recently changed my mac, and restored everything from my time machine backup, but after synching my ipod, I noticed that there were no genius mixes on the device. A bit of further digging and I found that no matter what I did I could not get genius to work in Itunes.</p>
<p>Selecting 'Start Genius' whilst clicking on a track simply returned a message telling me that genius was not available for the particular track, and that I should update genius or select another track. Unfortunately, neither worked.</p>
<p>A trawl through the web returned a couple of things to try, such as closing itunes and deleting all genius related files in the library/itunes/ folder, making sure all songs were checked, even, trying genius in different view layouts. Unfortunately none worked.</p>
<p>Eventually, I managed to track the issue down to something very simple, and also unrelated to my recent update. It turns out that a recent import of songs created with a different program, had some illegal (non alpha-numeric) characters in the ID3 tags. I changed these characters to something readable, and magically the genius then started to work.</p>
<p>it appears that non alpha-numeric characters cannot be processed by the iTunes store, my guess is that they make the track info unreadable, so genius cannot determine what songs you have.</p>
<p>A simple fix to a frustrating problem, I hope this helps someone else out.</p>
<p>iTunes 10</p>
<p>/DM</p>
