---
layout: post
title: Cloning your Joomla site
joomla_id: 255
joomla_url: cloning-your-joomla-site
category: General
tags: app-api clone joomla monetization multisite
date: 2013-07-29 02:05:33.000000000 +09:30
---
<p>A while back I was working on a project that allowed replication of an instance of Joomla. The reason for this was that&nbsp;I have a couple of sites that are set up as SaaS applications. Rather than use the traditional method of selling access to multiple user accounts on a single site I needed to provide complete anonymity between users. The nature of these apps were that all data is private and for me the best way to manage both the&nbsp;segregation&nbsp;and anonymity was to provide completely&nbsp;separate&nbsp;sites for each user.&nbsp;</p>
<p>I wanted to use a basic site as a template and then replicate it for each user. This meant replicating both the physical files and the database information for each subsequent user.</p>
<p>I had previously used JMS multisites but had found the component to be a bit overly complicated and limiting when used in a commercial capacity as licenses were required for each replication. It also did not do exactly what I required. I did have a look at modifying the code to do what I wanted but in the end my solution was to simply write my own component.</p>
<p>For my setup I required that each instance had it's own subdomain, but that users could log in from the main domain. Each instance was also created from creating a subscription on the main domain.</p>
<p>I settled on only replicating the files and directories that were specifically different for each instance. This meant creating a new&nbsp;configuration&nbsp;file, tmp, cache, log and media folders. Symlinks could be used for the remainder of the information. This also meant that updates could be applied across all sites by updating the original (master) set of files.</p>
<p>The database was replicated from a master instance, this was simply a case of copying the data verbatim and updating the fields that related to file paths and any identifying information.</p>
<p>In my apps users do not have access to the administration panel, all site&nbsp;administration&nbsp;is provided vie the front end through a custom interface, Joomla is never exposed to the end user. An administrative account is provided that allows users to be created and managed, and other user groups can be created depending on the requirement of the app. Access to the admin panel is removed from within the subdomain.&nbsp;A data backup / export function is provided to allow users to manage&nbsp;their&nbsp;own backups, it also allows users to retain ownership of their data.&nbsp;</p>
<p>The whole cloning process was handled through a custom written extension that allowed integration into the master site. I also integrated the process to utilise the excellent Akeeba subscriptions component to take care of the account creation and management.</p>
<p>My vision with the component was to enable me to easily monetize web ideas developed on the Joomla platform, but what started off as a way to replicate my initial idea so that it could be used by multiple users soon expanded into a second idea and then a third. It was pretty clear to me that there was as much value in the vehicle that I had developed to replicate the Joomla sites as in the sites themselves</p>
<p>By writing simple websites that function as applications, by&nbsp;implementing&nbsp;the subscriptions / cloning script &nbsp;I could allow users to subscribe to the use of their own dedicated site (app). Inspired by the Apple store where low cost high volume apps seem to be the current business model, it seemed like a good model to adopt.</p>
<p>I'm now in the final stages of releasing the first site (app) and am contemplating on whether to release my cloning script commercially. It would be great to earn some money from my hard work, but then it may also remove the edge from my advantage as no one has anything like this.&nbsp;Further developments in the pipeline include development of an app API to allow users to easily interface with their apps (sites) from third party code. For example a mobile device. This would involve exposing database data through the API so that it could be accessed remotely. This would actually be completely&nbsp;autonomous&nbsp;and function in isolation to the cloning script but would be a perfect&nbsp;accompaniment&nbsp;to the 'app' philosophy.</p>
<p>If you would be interested in a commercial version of my cloning component or the 'app' API, please comment below. If there is enough interest I may consider releasing them as commercial components available through the JED.</p>
<p>/DM</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
