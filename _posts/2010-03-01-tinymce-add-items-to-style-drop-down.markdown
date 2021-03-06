---
layout: post
title: TinyMCE - add items to style drop down
joomla_id: 193
joomla_url: tinymce-add-items-to-style-drop-down
category: Joomla 1.5 How To's
tags: drop-down style tinymce
date: 2010-03-01 04:03:18.000000000 +10:30
---
<p>If you have to display code snippets on your Joomla site, you might find that the following mod is of help. This quick mod will allow you to add items to the styles drop down in the TinyMCE editor - in this case a style for the code class.</p>
<p>The mod is pretty straight forward.</p>
<p>Normally when TinyMCE is called it looks for a stylesheet called 'editor.css' in the default templates CSS folder. The contents of this are used to propagate the styles drop down. If this file is not found in the default templates CSS folder, then the system version is used instead. To add custom styles to the drop down, simply create the following file. (where current_template is the name of your template)</p>
<p class="code">/templates/current_template/css/editor.css</p>
<p>Now you can add in the styles that you want displayed I added the following class to display the code as shown on this page</p>
<p class="code">pre, .code {<br> padding: 10px 15px;<br> margin: 5px 0 15px;<br> border-left: 5px solid #999999;<br> border-right: 1px solid #999999;<br> border-top: 1px solid #999999;<br> border-bottom: 1px solid #999999;<br> background: #FFFFFF;<br> font: 1em/1 "Courier News", monospace;<br> }</p>
<p>After uploading the new editor.css file you should be able to see the option 'code' in the drop down menu. To use it, select the text in the editor you want the style applied to and then select code form the drop down menu.</p>
<p>Whilst this has altered the way that the code is displayed in the editor, we still have to alter the way that it is delivered to the browser. To do this you will need to add the same code above to your templates default style sheet</p>
<p class="code">/templates/current_template/css/template.css</p>
<p>In this case, there is already an entry for <em><strong>pre, .code</strong> </em>so we simply need to replace the style elements with our new ones above. Additionally, depending on your template, you may also have other instances of <em><strong>pre, .code</strong> </em>in other style sheets. To determine if this is the case either take a look at the source code of your page and see what style sheets are being called, or look at the template setting in the admin panel to see if there are any additional themes in use, in my case there was an additional style sheet overriding the main one.</p>
<p class="code">/templates/current_template/styles/background/purewhite/css/editor.css</p>
<p>Simply comment out or remove <em><strong>pre, .code</strong> </em>in the overriding style sheet. Now when the page is served to the browser, the correct style is applied. There is, however, one caveat to this - the new editor.css style sheet, supersedes the default one previously used, so any style elements that used to be listed in the styles drop down, will now be missing. To overcome this you can copy them from the system style sheet into your new editor.css</p>
