---
layout: post
title: Fixing the paragraph spacing issue
joomla_id: 203
joomla_url: fixing-the-paragraph-spacing-issue
category: Dolphin 7.0.x Modifications
tags: css d7 dolphin-7 issue paragraph spacing template
date: 2010-02-22 03:00:57.000000000 +10:30
---
<div class="forum_post_text">
<p>You may have noticed that after neatly setting out your post within the TinyMCE editor, when the page is published, the paragraphs are all squashed up.</p>
<p>The issue is a CSS issue. Basically the style applied to the P tag by TinyMCE and D7 are different - so it displays OK in the editor, but when the D7 code renders it - it is displayed differently.</p>
<p>The offending code is in templates/base/css/general.css, the attribute margin:0px is applied to the P tag, remove this and the issue will be gone, BUT there is one caveat - obviously this affects ALL instances of the P tag - so it may be that whilst this cures the immediate issue, it may cause problems elsewhere (i've not tested this, and this may be different for your site - depending on which template you use and what modifications you have applied to them)</p>
<p>To fix the issue, you will need to change general.css in two places -</p>
<p>Line 1</p>
<p>Change</p>
<p>&nbsp;</p>
<p class="caption"><strong><em class="code">a img, form, p</em></strong></p>
<p>&nbsp;</p>
<p>to</p>
<pre class="code" style="padding-left: 30px;">a img, form</pre>
<p>and on line 120</p>
<p>change</p>
<p class="code" style="padding-left: 30px;">p<br> {<br> margin:0px;<br> padding:0px;<br> }</p>
<p>to</p>
<p class="code" style="padding-left: 30px;">p<br> {<br> padding:0px;<br> }</p>
<p>There is no real need to apply the attributes to the P as has been done in the original code, plus declaring the base P tag in two different places can lead to inheritance issues.</p>
<p>If it turns out that removing these elements has too much of a knock on effect on other areas of the site, then The best solution may be to alter the TinyMCE css to match the D7 general by adding the margin:0px to plugins/tiny_mce/themes/advanced/skins/default/content.css At least then what you see will actually be what you get</p>
</div>
