---
layout: post
title: Configuring Joomla to use Zoho mail with MSMTP on Ubuntu.
joomla_id: 261
joomla_url: configuring-joomla-to-use-zoho-mail-with-msmtp-on-ubuntu
category: General
tags: joomla msmtp sendmail ubuntu zohomail
date: 2014-01-15 13:40:27.000000000 +10:30
---
<p>A while ago I switched to using zohomail for the email handling on a number of sites that I run. Zohomail is a nice alternative to hotmail or gmail and is also free for a limited number of users which makes it perfect when you just need to add a contact method to a website or just need something to process user messages.</p>
<p>I had previously been running zohomail under the SMTP service on my Joomla installs as I do not have sendmail installed. I find that it's simply too much to maintain and that SMTP is much simpler. Unfortunately for some reason whilst updating one of my sites the SMTP function simply stopped working and no amount of googling could give me an answer. So unperturbed I decided to engineer an alternative to the native Joomla SMTP functionality. After a bit of research and stumbling across Emanuel Tessores <a href="http://www.emanueletessore.com/how-to-configure-msmtp-as-a-gmail-relay-on-ubuntu-server/" target="_blank">excellent article</a> I decided to give <a href="http://msmtp.sourceforge.net/" target="_blank">MSMTP</a> a shot</p>
<p>MSMTP is a very simple and easy to use smtp client with excellent <span class="extiw">sendmail</span> compatibility. It can be used to in place of sendmail to allow you to send emails via a third party SMTP server such as zoho, gmail or hotmail. Installation and setup is relatively straightforward being installable via apt-get via the following command</p>
<pre>sudo apt-get install msmtp
</pre>
<p>Once installed you need to create two files; a configuration file for the email server details that you wish to connect to and a log file to record each mail transaction. You can do this by using the commands below</p>
<pre class="brush:plain">sudo mkdir /etc/msmtp
sudo mkdir /var/log/msmtp
</pre>
<p>Next you need to create the config file</p>
<pre class="brush:plain">sudo touch /etc/msmtp/yourservername
sudo nano /etc/msmtp/yourservername
</pre>
<p>With the config file opened in nano you need to add the following information - (simply cut and paste it in.)</p>
<pre class="brush:plain"># Define here some setting that can be useful for every account
defaults
        logfile /var/log/msmtp/general.log

# Settings for default account
account default
        protocol smtp
        host smtp.zoho.com
        tls on
        tls_starttls off
        tls_certcheck off
        port 465
        auth plain
        user username[A]yourdomain.com
        password yourpassword
        from username[A]yourdomain.com
        logfile /var/log/msmtp/yourservername.log

# If you don't use any "-a" parameter in your command line,
# the default account "default" will be used.
account default: default

</pre>
<p>Obviously you need to substitute the relevant account details for those of your own email account.</p>
<p>One point to note is that to be able to use the email account it will have to be configured as a 'send mail' address. This can be done by logging in to the zoho webmail client and going to &gt; settings &gt; mail &gt; send mail as and then adding the email address you wish to use. You will also need to confirm ownership of the email by pasting in a confirmation code emailed out to the email address.</p>
<p>With the configuration file finished save it and then run the following command to change it's permissions. If you don't do this MSMTP will not work.</p>
<pre class="brush:plain">sudo chmod 600 -R /etc/msmtp/yourservername 
</pre>
<p>Now that the email address and MSMTP are configured it's time to test. This is easy enough to do from the command line but first you will need to temporarily change the file ownership of the config and log files to allow you to run them. This is very easily done as follows</p>
<pre class="brush:plain">sudo chown -R yourusername:yourusername /var/log/msmtp 
sudo chown -R yourusername:yourusername /etc/msmtp/
</pre>
<p>(Replace yourusername with the username you used to log into your server with) Now lets send a test message:</p>
<pre class="brush:plain">sudo echo -e "Subject: Test Mail\r\n\r\nThis is a test mail" | msmtp --debug --from=sender[A]yourdomain.com -t receipient[A]thierdomain.com --file=/etc/msmtp/yourservername
</pre>
<p>Again, note the parts to be changed. It is important that the from address is exactly the same as the one you specified in the configuration file and set up as the 'send mail' address, if there is a discrepancy here it will likely result in a 553 Relaying disallowed response from the server.</p>
<p>When you hit return you should be able to see the entire transaction scroll up on the terminal screen, if everything is okay you will get a 250 Message received response at the end. If you get any other response you will need to note the error and address it accordingly.</p>
<p><br />With the email now set up to work from the command line it's now time to switch out the sendmail function to use MSMTP instead. To do this you will need to edit your php.ini file. this should reside at&nbsp; /etc/php5/apache2/php.ini you can check this viewing the php info print out under &gt; system information &gt; php information in the administration panel. Open up php.ini in nano by using the following command.<br /><br /></p>
<pre class="brush:plain">sudo nano /etc/php5/apache2/php.ini
</pre>
<p>Locate or search for the following</p>
<pre class="brush:plain">sendmail_path =
</pre>
<p>Depending on your server configuration it may or may not be empty. You need to change it to the following:</p>
<pre class="brush:plain">sendmail_path = "/usr/bin/msmtp -C /etc/msmtp/yourservername --logfile /var/log/msmtp/yourservername.log -a default -t"
</pre>
<p>Again - replace the relevant details with those of your own and save your changes. be sure to restart your server afterwards.</p>
<pre class="brush:plain">sudo service apache2 restart
</pre>
<p>Finally you need to reverse those permissions you set earlier by issuing following commands...</p>
<pre class="brush:plain">sudo chown -R www-data:www-data /var/log/msmtp 
sudo chown -R www-data:www-data /etc/msmtp/
</pre>
<p>...and also checking that you have the Joomla mail settings set to use the php mail function NOT sendmail or SMTP. You can set this in &gt; system &gt; global configuration &gt; server &gt; mail settings.</p>
<p>Great, now for some more testing.</p>
<p>I tested my setup by filling out and submitting a contact form but you could also use the mess message feature (limit the number of messages by only sending it to a user groups with one or two members) - if everything is okay you should see a 'message is sent' message.</p>
<p>Whilst this is not a straightforward solution it does completely do away with sendmail which is not trivial to setup and manage. It also allows you to use any SMTP server you want, I used zohomail but you could easily use your&nbsp; ISPs SMTP server or googlemail, yahoomail etc. (a google will turn up results that contain the relevant SMTP settings for gmail / yahoo mail / hotmail)</p>
<p>&nbsp;</p>
<p>A couple of caveats....&nbsp;</p>
<p>1: You need to ensure that you have the correct MX records set up for your domain for your zohomail account to work correctly with your domain. These are as follows:</p>
<pre class="brush:plain">10 mx.zohomail.com
20 mx2.zohomail.com
</pre>
<p>(This does not apply if you are using an @zohomail.com email address.)</p>
<p>I recommend making sure everything works with your regular email client before jumping into this. It might save some headaches later</p>
<p>2: For some reason the code highlighter has gone nuts and will not let me post the @ sign in the code snippets so I have replaced these with [A] but I'm guessing that you probably realized that already ;)</p>
<p>DM</p>
<p>&nbsp;</p>
