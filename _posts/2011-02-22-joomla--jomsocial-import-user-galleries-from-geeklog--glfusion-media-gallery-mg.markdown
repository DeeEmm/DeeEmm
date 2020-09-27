---
layout: post
title: Joomla / JomSocial - Import user galleries from Geeklog / GLFusion Media Gallery
  (MG)
joomla_id: 197
joomla_url: joomla--jomsocial-import-user-galleries-from-geeklog--glfusion-media-gallery-mg
category: Joomla 1.5 How To's
tags: galleries geeklog glfusion import jomsocial joomla medi mg
date: 2011-02-22 23:47:49.000000000 +10:30
---
<p>If you are using Media Gallery to provide image handling functionality to your Geeklog site, the following will help you migrate your images. Media gallery is now an integral part of GLfusion, and so the same principles should apply to GLFusion too.</p>
<p>If you are using 4Images, it is possible to migrate to Media Gallery, using the media gallery import functions, or alternatively you may modify the code below to migrate direct.</p>
<p>The version of Media Gallery that I have migrated from is 1.5.1. and is no longer available as a stand alone plugin. However, a diligent web search will likely be able to turn up a version.<br><br>So.... On with the migration.<br><br>The first thing to do is to copy the following tables from your old geeklog database to your new Joomla database.</p>
<p><strong>gl_mg_media<br>gl_mg_media_albums<br>gl_mg_albums</strong></p>
<p>Once these have been copied over, you can start to migrate the data.</p>
<p>&nbsp;</p>
<p>First up we copy the image info over</p>
<p><em>INSERT INTO `jos_community_photos` (albumid, caption, published, creator, permissions, image, thumbnail, original, created, hits)<br>SELECT<br>b.album_id,<br>a.`media_title`,<br>'1',<br>c.owner_id,<br>'0',<br>concat('images/photos/',concat(a.media_user_id,concat('/',concat(b.album_id,concat('/',concat((SELECT media_filename from gl_mg_media WHERE media_id = a.media_id), concat('.', a.media_mime_ext))))))),<br>concat('images/photos/',concat(a.media_user_id,concat('/',concat(b.album_id,concat('/thumb_',concat((SELECT media_filename from gl_mg_media WHERE media_id = a.media_id), concat('.', a.media_mime_ext))))))),<br>concat('images/originalphotos/',concat(a.media_user_id,concat('/',concat(b.album_id,concat('/',(SELECT media_filename from gl_mg_media WHERE media_id = a.media_id), concat('.', a.media_mime_ext)))))),<br>a.media_upload_time,<br>a.media_views<br>FROM gl_mg_media a<br>JOIN gl_mg_media_albums b ON b.media_id = a.media_id<br>JOIN gl_mg_albums c ON c.album_id = b.album_id<br>WHERE c.album_parent='45'</em></p>
<p><br><br>Next the album info...</p>
<p><em>insert into jos_community_photos_albums (id, photoid, creator, name, description, permissions, path, type,hits)<br>SELECT album_id, '', owner_id, album_title, album_desc, '0', concat('images/photos/',concat( owner_id, '/')), 'user', album_views from gl_mg_albums WHERE album_parent = '45'</em></p>
<p>&nbsp;</p>
<p>And finally, we set the album cover image</p>
<p><em>//set gallery default image (arbitrary image)<br>UPDATE jos_community_photos_albums a, jos_community_photos b<br>SET a.`photoid` = b.id<br>WHERE a.`creator` = b.`creator`<br>AND a.`photoid` ='0'</em></p>
<p>&nbsp;</p>
<p>Once done all that is left is to copy the images into the correct location. This is done with the aid of a bit of PHP code. The images need to be organised into the proper folder hierarchy, which involves interrogating the database, creating the relevant folder structure, and then copying the images.<br><br>Points to note...</p>
<ul>
<li>Be sure to change the database login details + database name</li>
<li>If not on the same domain, you will need to copy the existing /images/mediaobjects/orig/ contents across.</li>
<li>Correct folder permission will need to be granted to allow the script to create the folders.</li>
</ul>
<p>&nbsp;</p>
<pre><br><!--?php     <br ?--> <br>//copy function<br>function copyemz($file1,$file2){ <br> $contentx =@file_get_contents($file1); <br> $openedfile = fopen($file2, "w"); <br> fwrite($openedfile, $contentx); <br> fclose($openedfile); <br> if ($contentx === FALSE) { <br> $status=false; <br> }else $status=true; <br> <br> return $status; <br>} <br><br>//estabish database connection<br>$con = mysql_connect('localhost','USER','PASSWORD');<br>if (!$con)<br> {<br> die('Could not connect: ' . mysql_error());<br> }<br>mysql_select_db('DATABASENAME', $con);<br><br><br>//get filename from database<br>$result = mysql_query("SELECT Image FROM jos_community_photos");<br><br>while($row = mysql_fetch_array($result))<br> {<br> //generate filenames + paths<br><br> $strpart = explode('/', $row['Image']);<br> $filename = $strpart[4];<br> $filepath = explode($filename, $row['Image']);<br> <br> $sourcepart = explode( '_', $filename);<br> <br> //get current directory<br> $thisdir = getcwd(); <br> <br> <br> <br> //get filename and directory<br> $SourceFile = 'images/mediaobjects/orig/' . $sourcepart[0] . '/' . $filename;<br> $DestFile = $row['Image'];<br> $DestPath = $thisdir . '/images/photos/' . $strpart[2] . '/' . $strpart[3];<br> <br> //create user directory<br> if(mkdir($DestPath , 0777, true)) { <br> echo "Directory $DestPath has been created successfully...<br>"; <br> } else { <br> echo "Failed to create $DestPath directory...<br>"; <br> }<br> <br> //copy file<br> if (!copyemz($SourceFile, $DestFile)) {&nbsp;&nbsp; &nbsp;<br> echo "failed to copy $DestFile ...<br>";<br> } else {<br> echo $SourceFile . ' -&gt; ' . $DestFile . ' copied successfully<br>';<br> }<br><br> //get filename and directory for thumbnails<br> $SourceFile = 'images/mediaobjects/tn/' . $sourcepart[0] . '/' . $filename;<br> $DestFile = 'images/photos/' . $strpart[2] . '/' . $strpart[3] . '/thumb_' . $filename;<br><br> if (!copyemz($SourceFile, $DestFile)) {&nbsp;&nbsp; &nbsp;<br> echo "failed to copy $DestFile ...<br>";<br> } else {<br> echo $SourceFile . ' -&gt; ' . $DestFile . ' copied successfully<br>';<br> }<br><br><br><br> //get filename and directory<br> $SourceFile = 'images/mediaobjects/orig/' . $sourcepart[0] . '/' . $filename;<br> $DestFile = 'images/originalphotos/' . $strpart[2] . '/' . $strpart[3] . '/' . $filename;<br> $DestPath = $thisdir . '/images/originalphotos/' . $strpart[2] . '/' . $strpart[3];<br> <br> //create user directory<br> if(mkdir($DestPath , 0777, true)) { <br> echo "Directory $DestPath has been created successfully...<br>"; <br> } else { <br> echo "Failed to create $DestPath directory...<br>"; <br> }<br><br> if (!copyemz($SourceFile, $DestFile)) {&nbsp;&nbsp; &nbsp;<br> echo "failed to copy $DestFile ...<br>";<br> } else {<br> echo $SourceFile . ' -&gt; ' . $DestFile . ' copied successfully<br>';<br> }<br><br> <br> }<br><br>mysql_close($con);<br><br>?&gt;</pre>
<p>Once you have run the script, you should now be able to see all of your users photo albums</p>
<p>/DM</p>
