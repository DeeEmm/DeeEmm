---
layout: post
title: Dolphin - Record user Name and ID with IP address
joomla_id: 214
joomla_url: dolphin-record-user-id-with-ip-address
category: Dolphin 7.0.x Modifications
tags: d7 dolphin-7 id ip-address mod record username
date: 2010-07-01 02:54:36.000000000 +09:30
---
<p>You can (fairly) easily record the userid along with the ip address by adding an extra field to the database table and modifying member.php<br><br>Here's how...<br><br>Add the following fields to the sys_ip_members_visits table in database</p>
<p><em><strong><code><span><span>ALTER</span> <span>TABLE</span> <span>`sys_ip_members_visits`</span> <span>ADD</span> <span>`UserID`</span> <span>INT</span><span>(</span> <span>10</span> <span>)</span> <span>NOT</span> <span>NULL<br></span></span></code></strong></em></p>
<p><strong><em><code><span><span>ALTER</span> <span>TABLE</span> <span>`sys_ip_members_visits`</span> <span>ADD</span> <span>`UserName`</span> <span>VARCHAR</span><span>(</span> <span>30</span> <span>)</span> <span>NOT</span> <span>NULL</span> </span></code></em></strong></p>
<p>&nbsp;</p>
<p>Then search for following line in <em><strong>member.php</strong></em></p>
<pre>$sInsertSQL = "INSERT INTO `sys_ip_members_visits` SET `From`='{$sCurLongIP}', `DateTime`=NOW()";</pre>
<p>Replace it with</p>
<pre>$aMemberInfo = getProfileInfoDirect($member['ID']);<br>$sUserName = $aMemberInfo['NickName'];<br><br>$sInsertSQL = "INSERT INTO `sys_ip_members_visits` SET `From`='{$sCurLongIP}', `DateTime`=NOW(), `UserID`='{$sUserID}', `UserName`='{$sUserName}'";<br><br></pre>
<p><br>Now edit<strong><em> inc/classes/BxDolAdminIPBlocklist.php</em></strong><br><br>Find</p>
<pre>{$sFromC}{$sDatatimeC}</pre>
<p>Change it to</p>
<pre>IDUserName{$sFromC}{$sDatatimeC}</pre>
<p><br>Find</p>
<pre>$sLastDT = $aIPList['DateTime'];</pre>
<p><br>Add After</p>
<pre>$sUserID = $aIPList['UserID'];<br>$sUserName = $aIPList['UserName'];</pre>
<p><br>Find</p>
<pre>$sTableRes .= "{$sFrom}{$sLastDT}";</pre>
<p>Replace it with</p>
<pre>$sTableRes .= "{$sUserID}{$sUserName}{$sFrom}{$sLastDT}";</pre>
<p>All Done!!<br><br>Now the userid will be recorded with the ip address and displayed in the table on the admin page.</p>
<p><em><strong><code><span><span><br></span> </span></code></strong></em></p>
