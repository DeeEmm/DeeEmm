---
layout: post
title: Show Joomla template elements on selective pages
joomla_id: 188
joomla_url: show-template-elements-on-selective-pages
category: Joomla 1.6 How To's
date: 2011-05-07 01:04:51.000000000 +09:30
---
<p>We have already discussed how to hide template elements from logged in members in <a href="resources/tutorials/59-joomla-16-how-tos/211-hide-template-elements-from-members-logged-in-users.html" title="http://www.deeemm.com/resources/tutorials/59-joomla-16-how-tos/211-hide-template-elements-from-members-logged-in-users.html">this tutorial</a>, but what about if we wish to only display template elements on certain pages.</p>
<p>Taking the same example used in the previous tutorial, we can easily modify the code so that it is displayed only on the home page.</p>
<p>Here is the code we used to hide template elements from logged in users</p>
<pre>&lt;?php <br />$user = JFactory::getUser();<br />if($user-&gt;guest ) : ?&gt; <br />...<br />...<br />&lt;?php endif; ?&gt;<br /></pre>
<p>We can expand this simple method to only display the template elements on specific pages. This is done by checking the item ID for the page like this...</p>
<pre style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; margin-top: 5px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 10px; padding-right: 15px; padding-bottom: 10px; padding-left: 15px; border-left-width: 5px; border-right-width: 1px; border-top-width: 1px; border-bottom-width: 1px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f6f6f6; font: normal normal normal 1em/1.5 'Courier News', monospace; white-space: pre-wrap; word-wrap: break-word; background-position: initial initial; background-repeat: initial initial; border-color: #999999; border-style: solid;">&lt;?php <br />$user = JFactory::getUser();<br />if($user-&gt;guest &amp;&amp; JRequest::getInt('Itemid') == 101)) : ?&gt; <br />...<br />...<br />&lt;?php endif; ?&gt;<br /></pre>
<p>To find the item ID for the page, simply check the value for the ID column in the article manager, and substitute this in the statement above.</p>
<p> </p>
<p> </p>
