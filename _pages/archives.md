---
layout: page
title: Archives
permalink: /archives/
---

<p>The information contained in these posts is provided as-is.</p> 
<p>Some of these posts are very old and are for long forgotten or outdated platforms. Additionally after being imported into the various different CMS's I've used over the past decade or so, many posts have broken links, missing images and messed up formatting, there's even some draft posts and other random musings thrown in for good measure. (gotta love auto importers :D ) Fixing this stuff is on my 'someday' list, right under all of the other stuff I never manage to make time to do.</p>
<p>If you find anything here of use, please pay it forward with a random act of kindness. /DM</p>
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>&nbsp;&nbsp;
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
