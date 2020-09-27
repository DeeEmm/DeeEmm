---
layout: post
title: Syntax highlighting code in TinyMCE
joomla_id: 133
joomla_url: syntax-highlighting-your-code-in-tinymce
category: General
tags: code highlighting syntax tinymce
date: 2010-07-02 01:29:42.000000000 +09:30
---
<p>After a recent tutorial a member mailed me to let me know that the code snippets were not displaying correctly. A quick look told me that this was due to my use of the <em>pre</em> tag, which prevented the text from breaking when it reached the bounds of it's containing element.</p>
<p>The fix was relatively easy - add the following hacks to force the text to wrap for <em>pre</em> formatted text...</p>
<pre>word-wrap: break-word; /* Internet Explorer 5.5+ */<span style="white-space: pre;"> <br></span>white-space: -o-pre-wrap; /* Opera 7 */<span style="white-space: pre;"> <br></span>white-space: -pre-wrap; /* Opera 4-6 */<span style="white-space: pre;"> <br></span>white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */<span style="white-space: pre;"> <br></span>white-space: pre-wrap; /* css-3 */</pre>
<p>But this got me thinking, and jarred my memory to something I was working on a little while back.</p>
<p>I had previously taken a look at syntax highlighting for WYSIWYG editors, this was for use in the DMCMS project where i wanted to allow full editing of template files from within the Admin panel. This is something that I had&nbsp;implemented&nbsp;on an earlier development version but had then abandoned. (For some reason that i can no longer&nbsp;remember)</p>
<p>The solution that I have settled on for use on DMCMS is <a href="http://marijn.haverbeke.nl/codemirror/" title="http://marijn.haverbeke.nl/codemirror/">CodeMirror</a> This acts in much the same way that TinyMCE does - it replaces the textfield with a basic code editor. The editor itself does not have any controls, and offers only basic functionality to assist you in editing files, but it is very light weight and provides code highlighting, which makes ediitng the template files a much more pleasurable experience.</p>
<p>I also looked at other solutions, probably the best of which was <a href="http://www.cdolivet.com/index.php?page=editArea" title="http://www.cdolivet.com/index.php?page=editArea">EditArea</a> The main advantage of this editor is that it is a multi document editor, and also includes it's own built in search function, but this was overkill for the use I have.</p>
<p>As posting formatted code here on this site for the tutorials does not need the editor functionality offered by these solutions, i decided to look a bit further. What i came up with was <a href="http://alexgorbatchev.com/wiki/SyntaxHighlighter" title="http://alexgorbatchev.com/wiki/SyntaxHighlighter">Syntaxhighlighter</a> This is a javascript library that can be applied to any page and will replace text within <em>script</em> or <em>pre </em>tags with a syntax highlighted version. There is also a handy <a href="http://weblogs.asp.net/nawaf/archive/2008/04/10/syntaxhighlighter-plug-in-for-tinymce-3-x-wysiwyg-editor.aspx" title="http://weblogs.asp.net/nawaf/archive/2008/04/10/syntaxhighlighter-plug-in-for-tinymce-3-x-wysiwyg-editor.aspx">plugin for TinyMCE</a> which provides a nice popup window for inserting code into the editor in the correct format for Syntaxhighlighter. I've been testing this out on a dev copy of DMCMS and it works great.</p>
<p>When I get a spare half hour or so (not very often) I will update the site to use this as it makes for much easier code reading, which has got to be a bonus for a site that posts lots of code snippets like this one.</p>
<p>/DM</p>
