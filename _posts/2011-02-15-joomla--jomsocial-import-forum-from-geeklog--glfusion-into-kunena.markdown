---
layout: post
title: Joomla / JomSocial - Import Forum from Geeklog / GLFusion into Kunena
joomla_id: 196
joomla_url: joomla--jomsocial-import-forum-from-geeklog--glfusion-into-kunena
category: Joomla 1.5 How To's
tags: forum geeklog glfusion import jomsocial joomla kunena
date: 2011-02-15 21:32:02.000000000 +10:30
---
<p>This is the second article in the migrate from Geeklog to Joomla series and outlines the method by which you can inport your existing geeklog forum into Kunena. Our previous article outlined how to migrate your users across to Joomla and also integrate them into the JomSocial component. You can find the first article here -<span> <a href="resources/tutorials/53-joomla-how-tos/201-joomla--jomsocial-import-users-from-geeklog--glfusion.html" style="color: #0062d5; text-decoration: underline;">Joomla / JomSocial - Import users from Geeklog / GLFusion</a></span></p>
<p>Kunena is a great forum component, and easily rivals dedicated forums such as phpBB or SMF. It also integrates nicely with JomSocial, allowing proper integration of avatars and profiles. Although there are other forum components available, only Kunena integration will be covered here.</p>
<p>The migration process requires that you have access to both the original site's SQL database, and the target sites database via an SQL editor. I personally favor phpMyAdmin, mostly as it comes pre bundled in C-Panel, but any other flavour will also do the job. You need to be able to export and import tables, and also execute SQL commands.</p>
<p>The basic premise is this.</p>
<p>The relevant tables will be exported from the old site and then imported into the target database. We will then execute some SQL statements to copy this data into the target database at the correct locations, and then tidy up some secondary information to make it all work. Sounds easy huh.</p>
<p>First off you will need to export the following tables from your geeklog database.</p>
<p><strong>gl_forum_topic<br>gl_forum_forums</strong></p>
<p>Next. Import these tables into your Joomla database. (You can delete them later.)</p>
<p>Once the tables have been imported you will need to run the following SQL statements, in sequence.</p>
<pre>insert into jos_kunena_messages (id, parent, thread, catid, name, userid, email, subject, time, ip, hits) SELECT id, pid, pid, 'forum', name, uid, email, subject, date, ip, views from gl_forum_topic</pre>
<p>This copies the topic titles across. it sets much of the topic information, such as which categories they belong to, but some of this needs to be 'fixed' later.</p>
<p>&nbsp;</p>
<pre>insert into jos_kunena_messages_text (mesid, message) SELECT id, comment from gl_forum_topic</pre>
<p>This statement imports the actual posts into the new database.</p>
<p>&nbsp;</p>
<pre>insert into jos_kunena_categories (id, name, parent) SELECT forum_id, forum_name, '100' from gl_forum_forums<br>insert into jos_kunena_categories (id, name, parent) values('100', 'forum category','0')<br>update jos_kunena_categories set published = '1' where published = '0'</pre>
<p>These statements set the category information, and also set each category to 'published' so that it is visible in the browser.</p>
<p>&nbsp;</p>
<pre>update jos_kunena_messages set thread = id where thread = '0'<br>update jos_kunena_messages, gl_forum_topic set jos_kunena_messages.catid = gl_forum_topic.forum where jos_kunena_messages.id = gl_forum_topic.id;<br>update jos_kunena_messages set parent = thread<br>update jos_kunena_messages set parent = '0' where id = thread<br>update jos_kunena_categories set pub_access = '0' , pub_recurse = '1', admin_access = '30'</pre>
<p>Finally, these statements tidy up the messages table and correctly allocate the categories to the messages.</p>
<p>Once you have carried out the above steps you should then be able to see all of your old geeklog forum posts in Kunena.</p>
