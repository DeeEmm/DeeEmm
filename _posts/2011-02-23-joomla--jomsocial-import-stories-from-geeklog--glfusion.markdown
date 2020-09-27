---
layout: post
title: Joomla / JomSocial - Import Stories from Geeklog / GLFusion
joomla_id: 198
joomla_url: joomla--jomsocial-import-stories-from-geeklog--glfusion
category: Joomla 1.5 How To's
tags: geeklog glfusion import jomsocial joomla stories
date: 2011-02-23 05:03:22.000000000 +10:30
---
<p>The final part of our Geeklog to Joomla / Jomsocial migration deals with migrating the main site content.</p>
<p>With Geeklog, content is organised into 'Stories'. Similarly, with Joomla, content is organised into 'Articles'.</p>
<p>Migration is simple, and requires running one SQL command.</p>
<p>First, ensure that you copy the following tables to your new database</p>
<p><strong>gl_stories</strong></p>
<p>then simply run the following command<br><br><em>INSERT INTO `jos_content` (`title`,`introtext`,`fulltext`,`catid`,`created`,`hits`)<br>SELECT title,introtext,bodytext,tid,date,hits<br>FROM gl_stories<br></em></p>
<p>You will now be able to see all of your old Geeklog stories in the Article manager.</p>
