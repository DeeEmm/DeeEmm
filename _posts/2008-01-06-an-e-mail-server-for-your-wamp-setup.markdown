---
layout: post
title: An E-Mail Server For Your WAMP Setup
joomla_id: 104
joomla_url: an-e-mail-server-for-your-wamp-setup
category: General
date: 2008-01-06 00:00:00.000000000 +10:30
---
<p>For all of my development work I use an AMP stack running on my  windows machine (commonly referred to as a WAMP server). This allows me  to run Apache / PHP / MySQL on my windows box without the need for a  Linux machine - very handy if you are developing something like DMCMS  and don't have a linux box on which  to test your work. Over the years I  have tried many different WAMP distro's -  I've even installed the  seperate components myself.</p>
<p>Nowdays I tend to favour Wampserver -  <a href="http://www.wampserver.com/" target="_blank">http://www.wampserver.com/</a> as it is compact, easy to install and has a nice, easy to use  interface. I have also used UniServer (<a href="http://www.uniformserver.com/" target="_blank">http://www.uniformserver.com/</a> )  as it has a very small footprint and can be installed on a memory  stick so it can be used an any PC. However, it didn't integrate  correctly with the syntax checking function in Ultraedit so for the time  being Wampserver is my tool of choice (although I must admin I have no  use for SqlLiteManager).</p>
<p>The only problem I found with Wampserver  is that it does not include a mail server - this makes it impossible to  test any mail functions within your software.</p>
<p>With my current  focus on getting DMCMS Version 080 ready, it didn't take long for me to  get bored with uploading changed files to a test site, so that I could  test out changes involving sending mail, so I decided to install a mail  server on my Windoze machine.</p>
<p>A little searching about lead me to <a href="http://center.uniformserver.com/mail_server/mail_server_1.html" target="_blank">this article</a> on the UniServer website.</p>
<p>The  article outlines the installation and setup of Office Mail. (available  from <a href="http://www.burrotech.com/om_download.php" target="_blank">http://www.burrotech.com/om_download.php</a> )</p>
<p>Office mail is a free to use program that runs a mail server /  service on your Windoze box, usefull for internal and external  corporate applications, it also seamlessly integrates with your Apache  installation allowing you to test any sendmail functionality you may  have within your code. There is a free version and a registered version -  for my purposes the free version is great - it adds a footer to the  bottom of outgoing emails which is customisable in the registered  version but then as it's only for testing I wasn't worried about the  footer.</p>
<p>Installation is straight-forward and once installed you  basically need to set the 'SMTP Delivery' so that 'outgoing mail is  returned to sender'. You can then add a user by clicking on the add user  button on the the 'Users' tab - You will need to associate an email  address with the user account by setting an alias under the 'Local  Distribution' tab. Once this is done you are all set to test.</p>
<p>You  may need to modify your php.ini file if the 'sendmail_from' directive is  commented out or not set as this will end up returning an error when  you try to send an email using your php script - dont forget to restart  your servce after doing this.</p>
<p>You can now test your mail script  using the php <a href="http://au2.php.net/manual/en/function.mail.php" target="_blank">mail()</a> function - set the 'to' field to the alias  address of the user you previously added - make sure Office Mail is  running and then run your code - if all is good, you can then view the  mail in the office mail program by clicking on the user name in the  application.</p>
<p>For more detailed instructions view the article  above on the UniServer website - for UniServer users there is also a  further article on how to integrate Office mail into your portable  UniServer setup.</p>
<p>DM.</p>
