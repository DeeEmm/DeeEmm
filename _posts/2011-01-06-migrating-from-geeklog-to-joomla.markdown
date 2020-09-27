---
layout: post
title: Migrating from Geeklog to Joomla
joomla_id: 140
joomla_url: migrating-from-geeklog-to-joomla
category: General
tags: geeklog joomla migrate
date: 2011-01-06 23:25:06.000000000 +10:30
---
<p><strong>[UPDATED!]</strong></p>
<p>Now that the New Year is under way, I've turned my focus back to the Joomla project that i have been working on. This is the migration of an existing Geeklog site over to the Joomla (JomSocial) platform.&nbsp;The basic site design and functionality has now been finalised, and the next stage is to start migrating the existing data across.</p>
<p>The migration away from Geeklog is due to the lack of development on both the Geeklog and GLFusion platforms. Although there have been releases in recent times, these have been little more than security updates. GLFusion promised to take Geeklog into the current Web 2 age, but after over a year, it has failed to really pick up any momentum, plus, with many features missing from the core and requiring non-existant third party plugins, the decision was made to migrate away from Geeklog, to the better supported Joomla.</p>
<p>Unfortunately, it does not appear that many (any) have trodden this path before, and so i was not able to turn up any suitable info from the usual Google, search. This meant a bit of DIY hacking to get the data migrated. I did manage to find enough info on user authentication to be able to figure out how to migrate the users across without needing to get users to change passwords, which is a boon for a site like this one, which has some 1600 odd members.</p>
<p>I've now completed the migration process, and decided to document what I have done, to assist those who may want to do the same. I will release this in several tutorials, each dealing with a separate aspect of the migration, which is basically how I have tackled the job.</p>
<p>User migration (Geeklog to Joomla / JomSocial)</p>
<p>Forums migration (Geeklog to Kunena)</p>
<p>Gallery migration (MediaGallery to JomSocial)</p>
<p>Blog migration (GL Journal to MyBlog)</p>
<p>Stories migration (Geeklog to Joomla)</p>
<p>The Geeklog site is version 1.5.2, but I believe the process will work the same for the current 1.7 version and also the spin off GLFusion port. The Geeklog set up uses the MediaGallery plugin (MG), which is now an integrated part of GLFusion. We had previously migrated from 4Images to MediaGallery, so the same upgrade path is available for those wishing to migrate image info. Other plugins that we are running are GL Journal, a blogging plugin, and the standard GL forums, which have been migrated to Kunena.</p>
<p>First tutorial, is migration of the user data. Once performed, your users will be able to log into the Joomla / JomSocial site with their existing Geeklog credentials. You can find the article in the tutorials section or by clicking the following link</p>
<p><a href="resources/tutorials/53-joomla-how-tos/201-joomla--jomsocial-import-users-from-geeklog--glfusion.html">http://www.deeemm.com/resources/tutorials/53-joomla-how-tos/201-joomla--jomsocial-import-users-from-geeklog--glfusion.html</a></p>
<p>Second tutorial is migration of the Geeklog forums into Kunena.</p>
<p><a href="resources/tutorials/53-joomla-how-tos/203-joomla--jomsocial-import-forum-from-geeklog--glfusion-into-kunena.html">http://www.deeemm.com/resources/tutorials/53-joomla-how-tos/203-joomla--jomsocial-import-forum-from-geeklog--glfusion-into-kunena.html</a></p>
<p>Third tutorial is migration of media gallery</p>
<p><a href="resources/tutorials/53-joomla-how-tos/204-joomla--jomsocial-import-user-galleries-from-geeklog--glfusion-media-gallery-mg.html">http://www.deeemm.com/resources/tutorials/53-joomla-how-tos/204-joomla--jomsocial-import-user-galleries-from-geeklog--glfusion-media-gallery-mg.html</a></p>
<p>The final tutorial covers how to convert Geeklog stories into Joomla articles</p>
<p><a href="resources/tutorials/53-joomla-how-tos/205-joomla--jomsocial-import-stories-from-geeklog--glfusion.html">http://www.deeemm.com/resources/tutorials/53-joomla-how-tos/205-joomla--jomsocial-import-stories-from-geeklog--glfusion.html</a></p>
