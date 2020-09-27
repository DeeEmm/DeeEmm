---
layout: post
title: Dolphin 6 - Login Redirect MOD
joomla_id: 180
joomla_url: dolphin-6-login-redirect-mod
category: Dolphin 6.1.x Modifications
date: 2010-04-01 05:47:01.000000000 +10:30
---
<p>This mod will automatically redirect new members to the profile edit page when logging in for the first time. Every time thereafter members are taken to their profile page</p>
<p>&nbsp;</p>
<div class="blg-pst-content">
<p><strong>DEMO</strong></p>
<p><a href="http://dolphin6.deeemm.com/" title="http://dolphin6.deeemm.com/">http://dolphin6.deeemm.com/</a></p>
<p>&nbsp;</p>
<p><strong>Information</strong></p>
<p>This mod can be downloaded for free from the Boonex marketplace -&nbsp;<a href="http://www.boonex.com/unity/extensions/entry/DeeEmm_Login_Redirect_MOD" title="http://www.boonex.com/unity/extensions/entry/DeeEmm_Login_Redirect_MOD">http://www.boonex.com/unity/extensions/entry/DeeEmm_Login_Redirect_MOD</a> This might be suitable for those users who have a stock Dolphin installation and do not want to manually modify files - simply download the mod and copy the included files.</p>
<p>If you want to manually install the mod - just follow the instructions below.<strong><br></strong></p>
</div>
<p><strong><br>Difficulty of installation<br></strong></p>
<p>Easy - Step by step instructions are included for installation on modded sites, or simply copy the included files.</p>
<p><strong><br>Changelog </strong></p>
<ul>
<li>20/05/2009 Version 1.0 - Initial Version.</li>
</ul>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<pre>/*[MANUAL Installation]=======================================

	FOR NON-STOCK / MODIFIED INSTALLATIONS


--[PRE_REQUISITES]--------------------------------------------

	N/A
	
--[EDIT]------------------------------------------------------

 	member.php

--[FIND]------------------------------------------------------

	$update_res = db_res( "UPDATE `Profiles` SET `DateLastLogin` = NOW() WHERE `ID` = {$member['ID']}" );

--[INSERT BEFORE]---------------------------------------------

            //[START DeeEmm Login Redirect MOD]

            //check if logged in before
            $result = mysql_query("SELECT * FROM `Profiles` WHERE `ID` = {$member['ID']}");
            $value = mysql_fetch_array($result);           

            if ($value['DateLastLogin'] == "0000-00-00 00:00:00"){
                $new_member = TRUE;
            } else {
                $new_member = NULL;
            }
            //[END DeeEmm Login Redirect MOD]


--[FIND]------------------------------------------------------

            $_page['name_index'] = 150;
            $_page['css_name'] = '';

--[INSERT AFTER]----------------------------------------------

            //[START DeeEmm Login Redirect MOD]

            //If new member redirect to profile page
            if ($new_member){
                $sUrlRelocate = 'pedit.php';
            } else {
                $sUrlRelocate = getProfileLink($member['ID']);
            }

            //[END DeeEmm Login Redirect MOD]

--[ADDITIONAL INFO]-------------------------------------------

	The redirect will only apply to those users that have
	previously not logged in after joining. To force the 
	redirect you will need to reset the DateLastLogin
	field in the Profiles table to 0000-00-00 00:00:00 

==[FINISHED]=========================[http://www.deeemm.com]*/
</pre>
