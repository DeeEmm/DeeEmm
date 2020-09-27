---
layout: post
title: Recovering InnoDB tables from database files.
joomla_id: 269
joomla_url: joomla-nginx-php7-sef
category: General
tags: database innodb mysql mysqlfrm recovery
date: 2017-03-15 11:18:44.000000000 +10:30
---
<p>After a hiatus of several months the site is back up. The site was unfortunately victim to some script kiddies and fell under the scrutiny of my hosting provider. After a failed attempt to rewind to a previous backup, which turned out to be corrupt, I decided that rather than spend a bunch of time that I did not have spare trying to fix it, I would simply turn the server off and get back to it later. Of course I did not consider that 'later' may stretch to be several months but that's just the way it panned out to be.</p>
<p>So I&nbsp;finally got some free time and&nbsp;decided to take a look at getting the server&nbsp;back up and running. The original&nbsp;issue with the original server was that due to a kernal issue with the server itself, the backup service provided by my host generated corrupted backups, so reinstalling from a backup invariably led to a bricked server. I spent some time working with the host to get the server repaired and whilst I did get a server that I could SSL into&nbsp;I&nbsp;unfortunately did not get any further as the SQL service would not run due to toasted database files.</p>
<p>So with renewed enthusiasm to get the site back up the first thing I did was to create a new server instance. Might as well start afresh, especially with the kernel issue - a problem I did not want to walk back into. I then grabbed all of the database files from the original server which were located at&nbsp;<span style="color: #545454; font-family: arial, sans-serif; font-size: small; font-variant-ligatures: normal; orphans: 2; widows: 2;">/var/lib/</span><span style="font-weight: bold; color: #6a6a6a; font-family: arial, sans-serif; font-size: small; font-variant-ligatures: normal; orphans: 2; widows: 2;">mysql</span><span style="color: #545454; font-family: arial, sans-serif; font-size: small; font-variant-ligatures: normal; orphans: 2; widows: 2;">/"</span><span style="font-weight: bold; color: #6a6a6a; font-family: arial, sans-serif; font-size: small; font-variant-ligatures: normal; orphans: 2; widows: 2;">DB</span><span style="color: #545454; font-family: arial, sans-serif; font-size: small; font-variant-ligatures: normal; orphans: 2; widows: 2;">-Name"</span></p>
<p><span style="color: #545454; font-family: arial, sans-serif; font-size: small; font-variant-ligatures: normal; orphans: 2; widows: 2;">MySql is great in that you can simply physically copy the files from one database to another and the database will become available, however there are some caveats to this.&nbsp;</span></p>
<p>You can then run check tables / repair tables to fix any issues, however, and rather unfortunately, this will not work on innodb tables. Bugger.</p>
<p>With my database the innodb tables were the tables that corrupted. On inspection I could see in the database folder the tables were present by not in the same format as the normal tables. Normally you will find three files for each table -&nbsp;table.frm table.MYD and table.MYI. In the case of innodb tables there were only two files - table.frm and table.IBD.</p>
<p>It is easy enough to generate an insert statement from the FRM file which will allow you to recreate the table structure, but to recover the contents requires a little messing about.</p>
<p>&nbsp;</p>
<p><strong>To recover the table structure</strong></p>
<p><code>install mysqlfrm</code></p>
<p>CD into the database directory and then run the following statement</p>
<p><code>mysqlfrm --server=username:password@localhost --port=3307 yourtablename.frm &gt; yourtablename.txt</code></p>
<p>This will create a text file with the SQL to create the table.</p>
<p>However - Before you run the SQL code you will need to do the following...</p>
<p>Rename the <em>yourtablename.ibd</em> file to&nbsp;<em>yourtablename.ibd.old</em></p>
<p>Delete the <em>yourtablename.frm</em> file</p>
<p>Then you can run the SQL statement.&nbsp;</p>
<p>&nbsp;</p>
<p><strong>To recover the table contents</strong></p>
<p>Once the table structure has been created you will note that you now have two new files in the database folder</p>
<p><em>yourtablename.frm</em></p>
<p><em>yourtablename.ibd</em></p>
<p>&nbsp;</p>
<p>To recover the data you need to discard the exisitng ibd file and replace it with the old one. You can do this as follows:</p>
<p>Run the following SQL statement</p>
<p><code>ALTER TABLE yourtablename DISCARD TABLESPACE;</code></p>
<p>This will discard the new ibd file. You will note it is no longer in the folder</p>
<p>Rename the original <em>yourtablename.ibd.old</em> file to&nbsp;<em>yourtablename.ibd</em></p>
<p>Then run the following SQL</p>
<p><code>ALTER TABLE yourtablename IMPORT TABLESPACE;</code></p>
<p>This will bring the contents into the database. Browse to the table using phpmyadmin and check.</p>
<p>Repeat&nbsp;for the other tables.</p>
<p>&nbsp;</p>
<p>This will work 90% of the time, however there are some occasions where an error will be thrown and the tablespace will not be imported. For me it allowed me to recover enough information to be able to recreate the site. Fortunately the tables that contained the main content were able to be saved, the tables that I had an issue with were able to be simply recreated with the new installation, of course your mileage may vary.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
