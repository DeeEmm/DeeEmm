---
layout: post
title: EasyBlog - Display list of blog titles using the Latest Blogs module
joomla_id: 232
joomla_url: easybog-display-list-of-blog-titles-using-the-latest-blogs-module
category: Joomla 1.7 How To's
tags: blog easyblog latest-posts list module posts tip
date: 2012-01-21 01:16:43.000000000 +10:30
---
<p>When recently migrating the DeeEm.com site I needed a way to be able to organise the tutorials section so that each tutorial was easily accessible. This meant creating an index of blog posts so that visitors could browse through each category so see if there were any mods that applied to their site. Whilst EasyBlog makes provision for listing category titles, there is no way to list the blog posts without additionally showing an intro portion from the post itself. This is achieved using the 'Latest Blogs' module, and whilst there is a setting to control the length of text displayed, even setting this to the minimum possible value, you will still display a couple of newlines in the output.</p>
<p>Whilst digging though the code to see if there was a way that I could modify the CSS or core code to force the list to display as I wanted, I discovered that there is a hidden value within the administration settings for the module that hides the intro text. The solution is to manually apply this value by directly editing the database table.</p>
<p>The value in question is for the 'introtext' variable: (<span style="color: #000000; font-family: Arial, Helvetica, sans-serif; line-height: normal; text-align: left;">Content be taken from</span>). This will only allow you to select between 'introtext' or 'main content'. What you cannot see is there is a third value 'Hidden'. I assume that this does not display, due to it having the value '-1', or at least it does not display in the browsers that I am using.</p>
<p>The solution is therefore very simple.&nbsp;</p>
<p>using phpMyAdmin or your favourite MySQL client, browse to the #__modules table and search for the Latest Posts module you wish to edit (TIP - search for the module title + if you have just added the module it will be on the last page!). When you have found it, hit the edit button, and then scroll down to the 'params' section and search for the text "showintro":"0" . This may have the value of either 0 or 1 depending on the value of the setting in the admin section. Simply change the value to -1 and save it. Be careful not to change any of the other text.</p>
<p>Now you will notice that the intro text is gone, and the additional&nbsp;carriage&nbsp;returns are no longer visible.</p>
<p>One caveat is that if you edit any other settings within the admin section, it will overwrite this value and you will neeed to manually re-apply this fix.</p>
<p>/DM</p>
