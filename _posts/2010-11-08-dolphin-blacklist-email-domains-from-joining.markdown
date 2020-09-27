---
layout: post
title: Dolphin - Blacklist Email domains from joining
joomla_id: 227
joomla_url: dolphin-blacklist-email-domains-from-joining
category: Dolphin 7.0.x Modifications
tags: antispam blacklist d7 dolphin-7 domains email spam
date: 2010-11-08 09:09:49.000000000 +10:30
---
<p>If you are suffering from spammers repeatedly joining up from the same email domains, this mod will help stop this.</p>
<p>It's a quick and dirty mod that compares the email address submitted via the join form against a list of banned domains. If the submitted email matches an entry in the list, the standard 'please enter correct email' message will be displayed, preventing the join form from being submitted.</p>
<p>Create a file called <em><strong>validate_email.php</strong></em> and add the following info. Save it in your webroot. Be sure to add additional domains as required.</p>
<pre><!--?php <br ?-->$is_valid = false;<br>&nbsp;<br>//banned email domains<br>$banned_domains = array(<br>'163.com',<br>'yahoo.cn',<br>'126.com');<br><br>$email_domain = explode('@',$arg0);<br><br>foreach ($banned_domains as $domain) {<br>if ($email_domain[1] == $domain) {<br>$is_valid = false;<br>break;<br>} else {<br>$is_valid = (bool) preg_match('/^([a-z0-9\+\_\-\.]+)@([a-z0-9\+\_\-\.]+)$/i', $arg0);<br>}<br>}<br>?&gt;</pre>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;">Next go to the profile builder</span></span></p>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;">in admin &gt; builders &gt; profile &gt; email &gt; advanced &gt; check</span></span></p>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;">change</span></span></p>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;"><strong><em>return (bool) preg_match('/^([a-z0-9\+\_\-\.]+)@([a-z0-9\+\_\-\.]+)$/i', $arg0);</em></strong></span></span></p>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;">to</span></span></p>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;"><em><strong>include ('validate_email.php');</strong></em></span></span></p>
<p><span style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="line-height: normal; white-space: normal;"><em><strong>return $is_valid;</strong></em></span></span></p>
<p>Save the change.</p>
<p>Now test the mod out by trying to join up using one of the banned email domains.</p>
<p>Job done :)</p>
<p>/DM</p>
