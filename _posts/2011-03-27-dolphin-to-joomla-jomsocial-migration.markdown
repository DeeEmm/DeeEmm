---
layout: post
title: Dolphin to Joomla (JomSocial) migration
joomla_id: 141
joomla_url: dolphin-to-joomla-jomsocial-migration
category: General
tags: dolphin jomsocial joomla migration
date: 2011-03-27 11:26:42.000000000 +10:30
---
<p>It's been a while since I've finished the Geeklog to Joomla (JomSocial) migration, and with a new update released by Boonex, I've decided that it is about time to look at migrating my sites away from the Dolphin platform.</p>
<p>With even a mildly modified site, Dolphin updates are usually a nightmare. It is rare that something does not break, or mess up in some manner, so I've decided that instead of wasting time updating third party addons to work with the new Dolphin core, it is much more cost and time effective to write a migration script.</p>
<p>The target platform will be Joomla, running the JomSocial component. This is a&nbsp;comparative&nbsp;product for those who are using Dolphin as a community site, and pretty much, all standard modules have an equivalent Joomla component.</p>
<p>At the moment the project is at the drawing board stage, but the basic outline is complete.</p>
<p>The migration script will be available as either a stand alone component that you upload to your WSP, or potentially as a Dolphin module. In either case it will be driven via a web interface, allowing you to tailor it to suit your own needs.</p>
<p>Migration will be provided for standard Dolphin modules, and also some of the major third party modules, such as the IBDW Wall module.</p>
<p>One small issue relates to password migration. As previously discussed in <a href="home/191-jomsocial-vs-dolphin.html#comment-45" title="http://www.deeemm.com/home/191-jomsocial-vs-dolphin.html#comment-45">THIS THREAD</a> the password handling in Dolphin is a little different to Joomla, and due to the encryption&nbsp;used, it is not possible to perform a direct migration of password fields. This is something that can be handled in several ways...</p>
<p>Mass password reset.<br>Forced account reactiviation<br>Modification of Joomla core to use Dolphin encryption<br>Auto password creation based on existing Dolphin data.</p>
<p>Of the above methods, the last method is something that I am currently looking into. In essence, when the user logs in, the password is checked against the values stored in the Dolphin database, if it matches, then the password is added to the Joomla database in the correct format. This process is transparent to the user, who simply uses the logon process as normal.</p>
<p>To adopt this method correctly I need to create a Joomla authentication module, so that the passwords can be verified. However, this means that the module needs to be installed for it to work, and additionally the Dolphin database needs to be available.</p>
<p>Ultimately, whatever method is used for password migration or re-creation, there will be a compromise to be made.</p>
<p>The project will be developed in stages, this is simply due to time availability. The results will then be released in one package, allowing migration to be carried out in one step.</p>
