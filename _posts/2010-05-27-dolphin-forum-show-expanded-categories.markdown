---
layout: post
title: Dolphin Forum - Show Expanded Categories
joomla_id: 206
joomla_url: dolphin-forum-show-expanded-categories
category: Dolphin 7.0.x Modifications
tags: categories d7 dolphin-7 expanded forum
date: 2010-05-27 22:02:48.000000000 +09:30
---
<p>Here's a quick hack to get the forum categories to display as expanded by default on the forum home page.</p>
<p>Edit <strong><em>modules/boonex/forum/classes/Forum.php</em></strong></p>
<p>Search for the following...</p>
<pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if (( isset($p['cat']) &amp;&amp; $p['cat'] == $r['cat_uri'] ) /*|| 1 == $r['cat_id'] */)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; $this-&gt;setTitle ($r['cat_name']);<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; $c .= ''.$this-&gt;getForumsXML ($r['cat_uri'], 0) . '';<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }</pre>
<p>Comment the following lines</p>
<pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //if (( isset($p['cat']) &amp;&amp; $p['cat'] == $r['cat_uri'] ) /*|| 1 == $r['cat_id'] */)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //{<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; //&nbsp;&nbsp;&nbsp; $this-&gt;setTitle ($r['cat_name']);<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; $c .= ''.$this-&gt;getForumsXML ($r['cat_uri'], 0) . '';<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; //}</pre>
<p>Now go to the forum home page and compile the language by clicking the compile link.</p>
<p>All done...</p>
<p>Enjoy</p>
<p>/DM</p>
