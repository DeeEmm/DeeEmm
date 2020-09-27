---
layout: post
title: Allow guests to view JomSocial activity stream comments
joomla_id: 241
joomla_url: allow-guests-to-view-activity-stream-comments
category: JomSocial
tags: activity-stream guest-access jomsocial joomla
date: 2012-08-02 04:37:17.000000000 +09:30
---
<p>I have recently migrated a site from Dolphin to JomSocial and needed to modify the way that the activity stream was displayed to visitors. By default the replies and likes of activity stream posts are only displayed to friends of the original poster. This means that the comments are very limited in their reach.</p>
<p>The overall effect of hiding activity stream comments and likes from guests is that this valuable activity is wasted.&nbsp;I wanted to show this activity to guest visitors so that they could see how active the site is. This in turn encourages them to join and hopefully encourages them to comment.&nbsp;</p>
<p>Of course, this may not be suitable for all sites, but in the case of this site, there was no activity that is 'secret' or 'private'; the activity stream is public viewable, and so should be the comments.</p>
<p>The modification you need to do this is pretty straightforward, it simply involves removing or commenting out two lines of code.&nbsp;</p>
<p><strong>Modification Instructions</strong></p>
<p>open the following file...</p>
<p>components/com_community/templates/YOUR_TEMPLATE/activities.index.php</p>
<p>Look for the following line of code at around line 223</p>
<pre class="brush:php">&lt;?php if( $allowComment ) { ?&gt;

</pre>
<p>Replace it with the following</p>
<pre class="brush:xml">&lt;?php //if( $allowComment ) { ?&gt;
</pre>
<p>Next look for the following line of code at about line 263</p>
<pre class="brush:xml">&lt;?php } ?&gt;

</pre>
<p>Replace it with the following</p>
<pre class="brush:xml">&lt;?php //} ?&gt;

</pre>
<p>&nbsp;</p>
<p>This simply comments out the lines. You can also opt to delete them completely if you wish.</p>
<p>Now your activity stream will display comments and likes to visitors as well as all members. The only caveat to this is is that if you are logged in it will display the 'reply' link but will not allow you to actually reply unless you are a friend of the original poster. What happens when&nbsp;you are not a friend of the original poster and you try to post a reply is that you will simply see a popup message box saying 'permission denied'. There are two ways that you can deal with this. These are as follows.</p>
<p>1. Change the message.</p>
<p>To change the message to something a little more meaningful you can do the following...</p>
<p>Edit the file components/com_community/controllers/system.php</p>
<p>At around line 1460 look for the following code...</p>
<pre class="brush:php">$objResponse-&gt;addAlert('Permission denied');
</pre>
<p>Simply change this message to something else - for example...</p>
<pre class="brush:php">$objResponse-&gt;addAlert('Only friends can reply');
</pre>
<p>&nbsp;</p>
<p>2. Allow non-friends to post.</p>
<p>If you want to let anyone be able to post to the Activity stream you can do the following...</p>
<p>The easy way...</p>
<p>Enable the following setting in the admin panel</p>
<p>components &gt; jomsocial &gt; configuration &gt; site &gt; &nbsp;activity &gt; allow everyone to comment</p>
<p>&nbsp;</p>
<p>The hard way...</p>
<p>Find the same line mentioned above, but this time replace it with the following code...</p>
<pre class="brush:php">			$table =&amp; JTable::getInstance('Wall', 'CTable');
			$table-&gt;type 		= $act-&gt;comment_type;
			$table-&gt;contentid 	= $act-&gt;comment_id;
			$table-&gt;post_by 	= $my-&gt;id;
			$table-&gt;comment 	= $comment;
			$table-&gt;store();

			$cache	= CFactory::getFastCache();
			$cache-&gt;clean(array('activities'));

			$comment = CWall::formatComment($table);
			$objResponse-&gt;addScriptCall('joms.miniwall.insert', $actid, $comment);

			CFactory::load( 'libraries' , 'notification' );
			$params		= new CParameter( '' );
			$params-&gt;set( 'message' , $table-&gt;comment );
			$url			= 'index.php?option=com_community&amp;view=profile&amp;userid=' . $act-&gt;actor.'&amp;actid='.$actid;
			$params-&gt;set( 'url' , $url );
			$params-&gt;set( 'stream' , JText::_('COM_COMMUNITY_SINGULAR_STREAM') );
			$params-&gt;set( 'stream_url' , $url );


			CNotificationLibrary::add( 'profile_activity_add_comment' , $my-&gt;id , $act-&gt;actor , JText::sprintf('COM_COMMUNITY_ACITIVY_WALL_EMAIL_SUBJECT' ) , '' , 'profile.activitycomment' , $params );

</pre>
<p>Now anyone can reply to any post in the activity stream. Additionally anyone can also post directly to another users profile page. cool huh?!?</p>
<p>&nbsp;</p>
<p>NOTE</p>
<p>&nbsp;</p>
<p>Well I guess that this modification will not be for everybody, but if like me you have a community site this might just increase your activity.</p>
<p>/DM</p>
