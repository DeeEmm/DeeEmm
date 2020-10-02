---
layout: page
title: Archives
permalink: /archives/
---
<p>Generally the information contained in these posts is provided as-is. There's no support, you're on your own. ;) That is  unless there is a github or soruceforge repo. In which case you _may_ find support there.</p> 
<p>If you do find anything here of use, I don't beg for coffee donations or Patreon support.  Simply pay it forward with a random act of kindness. /DM</p>
<p>Welcome to the archives. Just a heads up, some of these posts are very old and are for long forgotten or outdated platforms. Additionally after being imported and exported from the various different CMS's I've used over the past decade or so, many posts have broken links, missing images and messed up formatting, there's even some draft posts and other random musings thrown in for good measure. (gotta love auto importers :D ) Fixing this stuff is on my 'someday' list, right under all of the other stuff I never manage to make time to do.</p>
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>&nbsp;&nbsp;
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
