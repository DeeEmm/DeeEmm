---
layout: post
title: Installing mysql2 under OSX with gem
joomla_id: 417
joomla_url: installing-mysql2-under-osx-with
category: General
tags: gem jekyll lssl-error osx sysql2
date: 2020-09-26 01:58:33.000000000 +09:30
---
<div class="ebd-block  " data-type="text" ><p>I ran into the following error when trying to install MYSQL2 under gems. I was trying to install MYSQL2 to be able to import content from deeemm.com&nbsp;into my local jekyll dev site using the instructions posted here -&nbsp;https://import.jekyllrb.com/docs/joomla3/ but kept getting an ssl dependency error.<br></p><p>I got this error&nbsp;</p></div><div class="ebd-block  " data-type="code" ><script type="text/javascript">
EasyBlog.require()
.library("ace")
.done(function($){

	var editor = ace.edit("5f6ea5188d2d5");
	editor.setTheme("ace/theme/github");
	editor.getSession().setMode("ace/mode/javascript");

	editor.renderer.setShowGutter(true);
	editor.setFontSize("12");
	editor.setReadOnly(false);
	editor.setTheme("ace/theme/github");

	$('#5f6ea5188d2d5').height('250px');
	editor.resize();
});
</script>
<pre id="5f6ea5188d2d5" class="eb-block-code">
linking shared-object mysql2/mysql2.bundle
ld: warning: directory not found for option '-L/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.Internal.sdk/usr/local/lib'
ld: library not found for -lssl
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [mysql2.bundle] Error 1
ERROR:  Error installing mysql2:
	ERROR: Failed to build gem native extension.

    current directory: /Library/Ruby/Gems/2.6.0/gems/mysql2-0.5.3/ext/mysql2 
</pre></div><div class="ebd-block  " data-type="readmore" ></div><div class="ebd-block  " data-type="text" ><p>whilst trying to install MYSQL2 like this...</p></div><div class="ebd-block  " data-type="code" ><script type="text/javascript">
EasyBlog.require()
.library("ace")
.done(function($){

	var editor = ace.edit("5f6ea5188d59c");
	editor.setTheme("ace/theme/github");
	editor.getSession().setMode("ace/mode/javascript");

	editor.renderer.setShowGutter(true);
	editor.setFontSize("12");
	editor.setReadOnly(false);
	editor.setTheme("ace/theme/github");

	$('#5f6ea5188d59c').height('250px');
	editor.resize();
});
</script>
<pre id="5f6ea5188d59c" class="eb-block-code">
gem install -V mysql2 
</pre></div><div class="ebd-block  " data-type="text" ><p>Oddly enough MYSQL was already installed as I have a local server set up as a&nbsp;development environment, but it would appear that ssl was missing.&nbsp;</p><p>I ended up solving it with the following fix posted in the comments on stack exchange -&nbsp;https://stackoverflow.com/questions/3608287/error-installing-mysql2-failed-to-build-gem-native-extension</p></div><div class="ebd-block  " data-type="code" ><script type="text/javascript">
EasyBlog.require()
.library("ace")
.done(function($){

	var editor = ace.edit("5f6ea5188d777");
	editor.setTheme("ace/theme/github");
	editor.getSession().setMode("ace/mode/javascript");

	editor.renderer.setShowGutter(true);
	editor.setFontSize("12");
	editor.setReadOnly(false);
	editor.setTheme("ace/theme/github");

	$('#5f6ea5188d777').height('250px');
	editor.resize();
});
</script>
<pre id="5f6ea5188d777" class="eb-block-code">
gem install mysql2 -v '0.5.2' -- --with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include 
</pre></div><div class="ebd-block  " data-type="text" ><p>Ok, ok, I know that it's not the current version of MYSQL, but it at least allowed me to run jekyll and import the posts on to my local machine.<br><br>I tried substituting versions with&nbsp;0.5.7 &amp; 0.8.0 and they did not work, but I did find that the statement still worked if I removed the version switch altogether...<br><br></p></div><div class="ebd-block  " data-type="code" ><script type="text/javascript">
EasyBlog.require()
.library("ace")
.done(function($){

	var editor = ace.edit("5f6ea5188d949");
	editor.setTheme("ace/theme/github");
	editor.getSession().setMode("ace/mode/javascript");

	editor.renderer.setShowGutter(true);
	editor.setFontSize("12");
	editor.setReadOnly(false);
	editor.setTheme("ace/theme/github");

	$('#5f6ea5188d949').height('250px');
	editor.resize();
});
</script>
<pre id="5f6ea5188d949" class="eb-block-code">
sudo gem install mysql2 -- --with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include 
</pre></div><div class="ebd-block  " data-type="text" ><p>Note: the two dashes are a shorthand way of setting verbose mode '--V'</p><p>I hope this saves someone a few hours head scratching.</p><p>/DM</p></div>
