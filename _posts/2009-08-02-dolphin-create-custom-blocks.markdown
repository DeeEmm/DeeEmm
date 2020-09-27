---
layout: post
title: DOLPHIN - Create Custom Blocks
joomla_id: 177
joomla_url: dolphin-create-custom-blocks
category: Dolphin 6.1.x Modifications
tags: blocks create custom d6 dolphin-6
date: 2009-08-02 22:25:03.000000000 +09:30
---
<p>Just a very quick tutorial this time.<br><br>i was looking for a way to create a block that didn't have the normal border and header so that I could add in my own custom HTML. After looking through the code, this is very easy to do - in fact it doesn;t even really need a modification (well not in the traditional sense of the word).<br><br>Basically what you need to do is this...<br><br></p>
<ol>
<li>Go to the Page Builder in the admin interface</li>
<li>Create a block by dragging the 'Simple HTML' sample into position.</li>
<li>Add your HTML / text etc, give it a meaningful caption and save it</li>
<li>Now you will need to get access to your database by using something like phpMyAdmin.</li>
<li>Go to the 'Page Compose' table and find the entry for your newly added block - TIP look for the same caption</li>
<li>Now edit this record so that the value of 'Design Box' is 0</li>
<li>Now you can checkout your new border-less block by viewing your site in a browser.</li>
</ol>
<p>DM</p>
