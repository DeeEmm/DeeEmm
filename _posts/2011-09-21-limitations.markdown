---
layout: post
title: Dolphin to Joomla Migration - Limitations
joomla_id: 184
joomla_url: limitations
category: Dolphin to Joomla Migration
tags: dolphin joomla limitations migration nautilus
date: 2011-09-21 12:31:26.000000000 +09:30
---
<p>Currently the following limitations should be noted</p>
<ol>
<li>Only standard Dolphin tables will be imported. Modified tables may not work.</li>
<li>The joomla admin user you created on installation is copied to userid 9999999.</li>
<li>You can use this user id to log into the administration panel.</li>
<li>Dolphin user #1 is made into a superadmin (user #1 is normally admin)</li>
<li>Old passwords will not work. All user passwords will need to be reset via the password reset function</li>
<li>Facebook connect will need to be set up again -&nbsp; Please note - default settings will pull data in from facebook (avatar etc) so you might want to check these first.</li>
<li>Old URL's will not work so SEO will be affected. A php file is included to redirect URLS. This must be called from htaccess</li>
<li>Forum view counts will be zero as this is not recorded in Dolphin</li>
</ol>
