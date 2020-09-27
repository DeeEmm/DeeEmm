---
layout: post
title: Increasing server memory limit
joomla_id: 190
joomla_url: increasing-server-memory-limit
category: PHP
tags: increase limit memory memorylimit php phpini server
date: 2010-06-21 05:40:19.000000000 +09:30
---
<p>If you are experiencing memory issues with scripts, it may be necessary to increase the memory available to the script.</p>
<p>If you have access to your servers php.ini file, this is relatively straightforward -&nbsp; simply increase the value of the memory_limit directive to 128M then restart apache. However, I'm guessing that if you're reading this post, looking for a solution to memory issues, then the last sentence probably made little sense, and chances are that you do not have access to your servers php.ini file - this is true for most shared servers.</p>
<p>If you do not have access, all is not lost - you can override the value in either a custom php.ini file, or via the htaccess file - the method needed depends on the following:</p>
<p>If PHP is compiled to run as a cgi script then you will need to use a custom php.ini, but if it is compiled to run as a module then you will need to use htaccess. (tip - you can view your servers php_info() to find out which one)</p>
<p>To set via php.ini&nbsp; file use the following syntax - add this to a file named php.ini and put it in your webroot</p>
<p><em><strong><code>memory_limit = 128M</code></strong></em></p>
<p>To set via htaccess - add this to your htaccess file</p>
<p><em><strong><code>php_value memory_limit 128M</code></strong></em><strong></strong></p>
<p>If you wish to set these values within your script - you can also use the ini set method from within php</p>
<p><strong><em><code><span class="html"><span class="default">ini_set</span><span class="keyword">(</span><span class="string">'</span></span></code></em><em><code>memory_limit</code><code><span class="html"><span class="string">'</span><span class="keyword">, </span><span class="string">'On'</span><span class="keyword">);</span></span></code></em></strong></p>
<p><strong><em><span class="html"><span class="keyword"><br></span></span></em></strong></p>
<p>You can also use the same methods to set other php.ini directives. However, not all directives are available for modification in this manner.</p>
<p>For more info on available directives, see - <a href="http://www.php.net/manual/en/ini.list.php" title="http://www.php.net/manual/en/ini.list.php">http://www.php.net/manual/en/ini.list.php</a></p>
<p>/DM</p>
