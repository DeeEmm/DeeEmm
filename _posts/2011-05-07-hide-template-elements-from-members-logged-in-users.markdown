---
layout: post
title: Hide Joomla template elements from members (logged in users)
joomla_id: 187
joomla_url: hide-template-elements-from-members-logged-in-users
category: Joomla 1.6 How To's
date: 2011-05-07 00:58:57.000000000 +09:30
---
<p>If you are using a custom template and want to control how it is displayed, you may need the following mod.</p>
<p>This quick easy modification will allow you to only show some page elements to guests. I made this modification to hide the slideshow in Gobbers Themes 'Comenian' template, but it can easily be adapted for other elements on other templates.</p>
<p>Basically we need to wrap the element we want to hide in some php code that checks if the user is logged in. If they are not, then the element is shown.</p>
<p>Open the templates main index file, you can find this in the template directory, in this case it is</p>
<p><strong>/templates/<span style="background-color: #ffffff;"><span style="color: #ff0000;">comenian</span></span>/index.php</strong></p>
<p>The index.php file is the file that generates the main template layout, simply browse to the template you wish to alter.</p>
<p>Open index.php in your favourite editor, and find the element you wish to hide, in this case it is the slideshow. It can be any piece of code in the template. A tip here is to use your browser and the view code / DOM inspector (such as firebug) to find the code you wish to hide, and then look for it in the index.php file.</p>
<p>Here's the code we wish to hide for the comenian template</p>
<pre>&lt;div id="slideshow-w"&gt;<br />  &lt;div id="slideshow"&gt;<br />  &lt;img src="templates/&lt;?php echo $this-&gt;template ?&gt;/images/slide1.jpg" alt="image1" /&gt;<br /> &lt;img src="templates/&lt;?php echo $this-&gt;template ?&gt;/images/slide2.jpg" alt="image2" /&gt;<br />  &lt;img src="templates/&lt;?php echo $this-&gt;template ?&gt;/images/slide3.jpg" alt="image3" /&gt;<br />  &lt;img src="templates/&lt;?php echo $this-&gt;template ?&gt;/images/slide4.jpg" alt="image4" /&gt;<br />  &lt;img src="templates/&lt;?php echo $this-&gt;template ?&gt;/images/slide5.jpg" alt="image5" /&gt;<br /> &lt;/div&gt;<br /> &lt;/div&gt;<br /> &lt;script type="text/javascript" charset="utf-8"&gt;<br /> var $j = jQuery.noConflict();<br /> $j(document).ready(function(){<br />  $j("#slideshow").slideshow({<br />  pauseSeconds:&lt;?php echo $pause ?&gt;,// 5,<br />  height:&lt;?php echo $hauteur ?&gt;, //469,<br />  fadeSpeed:&lt;?php echo $fadespeed ?&gt;,// 0.5,<br /> width:&lt;?php echo $largeur ?&gt;, //950,<br />  caption: false<br />  });<br />  });<br />  &lt;/script&gt;</pre>
<p>Insert the following code before the elements you wish to hide</p>
<pre style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; margin-top: 5px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 10px; padding-right: 15px; padding-bottom: 10px; padding-left: 15px; border-left-width: 5px; border-right-width: 1px; border-top-width: 1px; border-bottom-width: 1px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f6f6f6; font: normal normal normal 1em/1.5 'Courier News', monospace; white-space: pre-wrap; word-wrap: break-word; background-position: initial initial; background-repeat: initial initial; border-color: #999999; border-style: solid;">&lt;?php <br />$user = JFactory::getUser();<br />if($user-&gt;guest ) : ?&gt; <br /></pre>
<p>The first line is a class call that loads the class required to generate the variables we need to check. The second line is the check itself.</p>
<p>Now insert the following code after the elements you wish to hide</p>
<pre><span style="font-family: monospace; ">&lt;?php endif; ?&gt;</span></pre>
<p>The two commands form a basic if statement, if the statement is true, the code in between will be executed.</p>
<p>To make the code only execute if the statement is false - ie only display for logged in users, simply add an exclamation mark before the logic like this...</p>
<pre><span style="font-family: 'Courier News', monospace; line-height: 15px; white-space: pre-wrap; ">if(!$user-&gt;guest ) : ?&gt;</span></pre>
<p>You can also test for other conditions here as well, such as only displaying the code on specific pages. To find out how to do this, <a href="resources/tutorials/59-joomla-16-how-tos/212-show-template-elements-on-selective-pages.html" title="http://www.deeemm.com/resources/tutorials/59-joomla-16-how-tos/212-show-template-elements-on-selective-pages.html">see this article</a></p>
