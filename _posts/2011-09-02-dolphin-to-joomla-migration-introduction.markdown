---
layout: post
title: Dolphin to Joomla Migration - Introduction
joomla_id: 181
joomla_url: dolphin-to-joomla-migration-introduction
category: Dolphin to Joomla Migration
tags: dolphin joomla migration overview
date: 2011-09-02 02:24:32.000000000 +09:30
---
<p>If like me, you have had enough of your Boonex Dolphin website, and want to change to a more stable platform, you will need to migrate your existing database information and copy files across to work on a new script. To successfully do this, the existing data will need to be modified so that it functions with the new script, and files changed to suit. You will also need to set up the new script and modify it to suit your site. This means lots of tweaking, template changes and honing of site settings will be required before things are set up to your liking.</p>
<p>As I am providing and promoting the use of my migration script to migrate your site to use the JomSocial platform, I decided to write up a few articles to help make the transition a little smoother.&nbsp;As with any script, there is a steep learning curve required to be able to quickly use and manage a new script, and to make this easier I will provide a step by step guide to walk you through how to quickly get things up and running.</p>
<p>The migration process is quite involved and requires the possession of a number of skills. For this reason it will not be something that everyone will be able to perform. I advise everyone to read the notes at the top of the migration script to ensure that you fully understand the process. The script itself is also commented and should be easy enough for most novice coders to understand.</p>
<p>&nbsp;</p>
<p><strong>Scope</strong></p>
<p>The following items will be migrated by the migration script</p>
<ol>
<li>Users</li>
<li>Standard user profile info</li>
<li>Avatars</li>
<li>Mail messages</li>
<li>Friends</li>
<li>Events</li>
<li>Photos</li>
<li>Videos</li>
<li>Forums</li>
<li>Groups</li>
<li>Blogs</li>
<li>Articles</li>
<li>Sites</li>
<li>Spywall info</li>
<li>IBDW Spywall data</li>
<li>Modzzz Points data</li>
</ol>
<p>&nbsp;</p>
<p><strong>Limitations</strong></p>
<p>As everyone's dolphin installations will be different, it is impossible to cater for all modifications and setups, and so migration will be limited to standard modules plus the additional custom modules listed above. What this means in practice is that if you have a modified site, some data may not be transferred. It is of course possible to cater for custom or non-standard modules, but this will require custom work.</p>
<p>At the time of publishing, the following limitations are noted</p>
<ol>
<li>Modules not listed above will not be migrated</li>
<li>Only standard Dolphin tables will be imported. Modified tables may not work.</li>
<li>Old passwords will not work. All user passwords will need to be reset via the password reset function.</li>
<li>There is an issue for converting HTML to Kunena BB code in long forum posts. This is a REGEX limitation and a workaround is currently being devised</li>
</ol>
<p>&nbsp;</p>
<p><strong>Step-by-step</strong></p>
<p>The migration process follows a set procedure, this is outlined as follows.</p>
<ol>
<li>Backup existing site files and database.</li>
<li>Download Joomla + JomSocial + required 3rd party components</li>
<li>Create a directory in your webroot called 'joomla'</li>
<li>Copy Joomla files to this folder</li>
<li>install Joomla using existing database credentials</li>
<li>Install JomSocial component using Joomla integrated installer</li>
<li>Install 3rd party components using Joomla integrated installer</li>
<li>Change some administration and template settings</li>
<li>Run the migration script</li>
<li>Set up the site.</li>
<li>Once happy you can then copy the contents of the Joomla folder to the root folder</li>
</ol>
<div>(Please refer to the comments in the migration script for more detailed instructions)</div>
<p>The migrator will automatically read the old database information, convert it and use it to populate the new database tables. The script will also physically move existing photo and video files into the correct directories for the Joomla script. It can optionally also delete the old Boonex data once it is finished.</p>
<p>Included with the script is a file called rewrite.php which allows you to retain your old dolphin style links and rewrite them&nbsp;using htaccess&nbsp;to point at the new Joomla locations. You can also issue a 302 redirect to permanently redirect search engines to the new location.&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Requirements</strong>.</p>
<p>The following versions have been tested to work together.</p>
<p><strong>Easyblog&nbsp;</strong><span class="Apple-style-span" style="font-family: Tahoma; font-size: 11px; color: #000000; line-height: normal;"><strong style="font-family: Tahoma; font-size: 11px;">3.5.12286</strong></span></p>
<p><a href="http://stackideas.com/easyblog.html" title="http://stackideas.com/easyblog.html">http://stackideas.com/easyblog.html</a></p>
<p><strong>Kunena 1.7.2</strong><a href="http://stackideas.com/easyblog.html" title="http://stackideas.com/easyblog.html"></a></p>
<p><a href="http://www.kunena.org/download">http://www.kunena.org/download</a></p>
<p><strong>JomSocial 2.6.2</strong><br><a href="http://www.jomsocial.com/">http://www.jomsocial.com/</a></p>
<p><strong>Joomla 2.5.6</strong><br><a href="http://www.joomla.org">http://www.joomla.org<br></a><em>PLEASE NOTE - you must currently use this version!!</em></p>
<p><strong>Dolphin 7.0.4</strong><br><em>PLEASE NOTE - I will test migration of newer Dolphin versions after I have successfully migrated and tested my own sites. I have not upgraded my own sites since Dolphin 7.0.4 as it was simply too much work and I did not want to jeopardise the integrity of my sites. Once things are up and running I will update my Dolphin code and check that the script works with newer Dolphin versions. In all likelihood it will work, please post back here if you have success on a later version.</em></p>
