---
layout: post
title: Dolphin Tag Converter
joomla_id: 207
joomla_url: tag-converter
category: Dolphin 7.0.x Modifications
tags: converter d7 dolphin-6 dolphin-7 migrate mod tag
date: 2010-06-10 13:25:54.000000000 +09:30
---
<p>If like me, you used the migration tool to transfer your Dolphin 6 based site over to Dolphin 7, you will notice that there are some things that need a little tweaking. One of these things for me was the tags.</p>
<p>On D6 tags could use a space as a delimiter, but on Dolphin 7 the space is ignored, this is to allow multi word tags. What this effectively does is create massive long 'tag words' out of those tags that were entered without using a comma as a delimiter in D6.</p>
<p>The following code reads the tags and splits them up if more than one word is detected. it then deletes the original entry and creates a new entry for each word detected using the original data. Single word tags are ignored</p>
<p>$sql_query = mysql_query("SELECT * FROM `sys_tags`");</p>
<p>while($sql_result = mysql_fetch_array($sql_query))</p>
<p>{</p>
<p>$sTag = $sql_result['Tag'];</p>
<p>$sObjID = $sql_result['ObjID'];</p>
<p>$sType = $sql_result['Type'];</p>
<p>$aTag = explode(" ", $sTag);</p>
<p>if (count($aTag) &gt; 1){</p>
<p>mysql_query("DELETE FROM `sys_tags` WHERE `Tag` = '{$sql_result['Tag']}'");</p>
<p>foreach($aTag as $sNewTag) {</p>
<p>mysql_query("INSERT INTO `sys_tags` (`Tag`, `ObjID`, `Type`, `Date`) VALUES ('$sNewTag', '$sObjID', '$sType', '{$sql_result['Date']}') ") or die(mysql_error());</p>
<p>echo 'new tag ' . $sNewTag . ' created<br>';</p>
<p>}</p>
<p>}</p>
<p>}</p>
<p>You will need to decide how you deploy the code - I downloaded the&nbsp;<span style="font-family: 'Courier News', monospace; line-height: 15px; white-space: pre-wrap;">sys_tags </span>table from my site and created a test database on my local test server with it, then I simply added a database connection to the above code it and ran it locally. I then uploaded the resultant table back to my sites database.</p>
<p>Please make sure you make a backup before running this script, as once the values have been modified there is no way to go back.</p>
<p>/DM</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
