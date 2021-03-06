---
layout: post
title: Dolphin - Auto membership level on join
joomla_id: 218
joomla_url: dolphin-auto-membership-level-on-join
category: Dolphin 7.0.x Modifications
tags: dolphin-7-auto join level membership
date: 2010-07-05 22:38:06.000000000 +09:30
---
<div>
<p><strong><em></em></strong>If you would like to automatically apply membership levels to new members, then this mod is for you.</p>
<p>This can also be useful when wanting to differentiate between different member groups - ie - making all female members of a female only member group. Both methods are shown below.</p>
<p>in <strong><em>profile_activate.php</em></strong></p>
<p>Find<strong><em><br></em></strong></p>
<p class="code">//Promotional membership<br> if ( getParam('enable_promotion_membership') == 'on' )<br> {<br> $memership_days = getParam('promotion_membership_days');<br> setMembership( $p_arr['Couple'], MEMBERSHIP_ID_PROMOTION, $memership_days, true );<br> }<br> }</p>
<p>add underneath</p>
<p class="code">setMembership( $p_arr['ID'], MEMBERSHIP_GROUP_ID, 0, true );</p>
<p>Change MEMBERSHIP_GROUP_ID to the ID of the group you want members to automatically become a member of. You can get this by looking in the sys_acl_levels database table.</p>
<p>If you wish to target a specific type of member - for example females, then you need to determine which type the new member belongs to. In this case instead of the code above, use the following code instead.</p>
<p class="code">if ($p_arr['Sex'] == 'female') {<br> setMembership( $p_arr['ID'], FEMALE_MEMBERSHIP_ID, 0, true )<br>}</p>
<p>Simply change <strong><em>$p_arr['Sex']</em></strong> to whatever profile field you wish to check for, this also includes any custom profile fields that you have added.</p>
<p>/DM</p>
</div>
