---
layout: post
title: Dolphin - Redirect users after editing profile
joomla_id: 219
joomla_url: dolphin-redirect-users-after-editing-profile
category: Dolphin 7.0.x Modifications
tags: d7-redirect dolphin-7 edit mod profile
date: 2010-07-06 02:51:58.000000000 +09:30
---
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">If you would like to redirect users to a different page after editing their profiles, then make the following changes.</p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">Edit</p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;"><em><strong>pedit.php</strong></em></p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">Find...</p>
<pre style="background-color: white; color: #009900; display: block; padding: 5px; margin: 0px; border: 1px solid green;">if( empty( $this -&gt; aErrors[0] ) and empty( $this -&gt; aErrors[1] ) ) { // do not save in ajax mode
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if (!$this -&gt; bAjaxMode or $this-&gt;bForceAjaxSave) {
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;$this -&gt; saveProfile();
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;$sStatusText = '_Save profile successful';</pre>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">Add underneath...</p>
<p style="line-height: 17px; background-color: white; color: #009900; display: block; padding: 5px; margin: 0px; border: 1px solid green;">header("Location: index.php");<br>exit;</p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">&nbsp;</p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">It's a bit of a hack, but if the profile save is successful, then it will redirect the user to the index page.</p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">Simply change the page to suit your needs.</p>
<p style="margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; line-height: 17px;">/DM</p>
