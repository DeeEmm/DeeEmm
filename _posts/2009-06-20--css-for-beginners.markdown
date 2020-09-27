---
layout: post
title: CSS For Beginners
joomla_id: 229
joomla_url: "-css-for-beginners"
category: HTML / CSS
tags: beginners css how-to tutorial
date: 2009-06-20 22:57:15.000000000 +09:30
---
<p>{jcomments on}</p>
<p>After discussing template editing on another site, and how easy / hard it is to change the look and feel of your site to make it your own. I decided that in my opinion, the whole process is fairly simply to do but requires that you have knowledge of a few skills and a few tools to hand to help you out.</p>
<p>This is a basic outline of what to do and how to do it, use it as a guide to get you started on style modification, and applied to all sites using css and html.</p>
<p>First things first - lets cover the REAL basic stuff - not that anyone wanting to do this kind of stuff should be that much of a novice (you need at least half a clue), but more to emphasize the RIGHT way to do things. There are rules laid down by W3C and we should all do our best to read, understand and apply them.</p>
<p><strong>Semantics</strong></p>
<p>What are semantics?? Semantics, when used in the context of the the web, are a set of design principles that cover how data should be conveyed to the user, it promotes the ideal that data and style should be treated as separate entities.</p>
<p>The ideal of a semantic web is a web that can be easily read by programs - a web where data is easy to retrieve from the page - the traditional embedded / inline style information used by many coders is not very friendly and is not a very data-centric way of doing things.</p>
<p>The correct way to convey data is by using one file for your markup and one file for your style. This way only the data is stored in the markup file making it easier to retrieve - easier to retrieve by browser crawlers, easier to aggregate, easier to write mods for easier to do anything that requires taking the data and converting it or processing it.</p>
<p>Only when the data is sent to a humanly readable browser does it need the style information - so that the browser knows how to present the data so that a human can process it.</p>
<p>Creating and maintaining a website to comply with the latest web standards is both gratifying and also ensuring that your website will display correctly in all future browsers (except IE but more about that later).</p>
<p><strong>So what do I do?</strong></p>
<p>Without creating a long boring rhetoric about the whys and why-nots I will simply say that you should not use CSS in your HTML docs, you should not use HTML style elements such as , etc.., and ALL of your style information should be in a seperate CSS file (or XSL in the case of XML).</p>
<p><strong>HTML or XML?</strong></p>
<p>XML is the natural progression of HTML - the style elements have been removed and it is extensible - meaning you can create your own elements and attributes&nbsp; perfect for storing data (which is what is was invented for) XML / XSL is the perfect way to code the semantic web and my guess is that eventually HTML will probably be phased out</p>
<p><strong>Tools - you promised us tools...</strong></p>
<p>With the basic understanding of the separation of content and style, you will now realise that to be able to modify your site, you need to look in two places. (two seperate files)</p>
<p>So how do you know where to look? this is where the tools come in to play.</p>
<p>First up, I will simply say that if you want to be successfull at doing this you will need to use Firefox. Forget using Internet Explorer as a developing and testing envoironment - you are doing yourself no favours - it is not standards compliant and will cause you untold headaches - always develop for Firefox and then fix up your code for the other browsers it's a lot less painfull.</p>
<p>Firefox also has the tools that we require. Other browsers also have some tools but they're simply not as good, plus Firefox has been at the forefront of puching web standards for many years now - they deserve the support.</p>
<p>Not only this but the tools we need are free!! (everyone loves free stuff)</p>
<p>After installing Firefox you will need to install the following plugins</p>
<p><strong>Firebug</strong> - Firebug is the best tool you will use for modding websites. Full Stop.</p>
<p><strong>WebDeveloper</strong> - A great toolbar / DOM inspector and a perfect companion to Firebug.</p>
<p>You also might like...</p>
<p><strong>FireFTP</strong> - Excellent FTP Client - embedded into Firefox it makes the perfect test environment.</p>
<p>You can Install the tools from the tools menu in the browser.</p>
<p>You will also need a decent programmers text editor - this will differ greatly from platform to platform, eveyone has thier favourite and they are mostly as useable as each other. I would say for a web developer you need to consider the following.</p>
<p>Syntax Highlighting - makes code easier to work with</p>
<p>Project management - good for managing websites</p>
<p>FTP - For working with remote file</p>
<p>PHP syntax checking - very useful for debugging php code</p>
<p>Function / Class browser - good for quickly navigating code files</p>
<p>Most importantly - even if it does NONE of the above - you must be able to search for text within files.</p>
<p><strong>So how do I do this - you promised skillz</strong></p>
<p>Putting all of this together is easy - very easy.</p>
<p>First - lets add a button to Firefox's toolbar - Right clickthe toolbar and select 'customize' Now drag Firebugs 'Inspect Element' button to the toolbar - it;s the one that looks like a pair of glasses - drag the Web Developer button there too.</p>
<p>Now you're set!</p>
<p><br><strong>Searching for CSS</strong></p>
<p>Here's an example.</p>
<p>-Navigate to your home page</p>
<p>-Click on the 'inspect' button you just added to the toolbar. You will notice 2 things happen - a window will open at the bottom of the browser showing information about the page - and here's the best bit - as you move your pointer over the page - the info will change to tell you aout the bit you are hovering over and you will also see a nice box aroud the element highlighting it.</p>
<p>WOW!! (If you've never use Firebug before it's pretty impressive!!)</p>
<p>- OK - hover over an element - and then click it - the info in the bottom page will stop changing</p>
<p>- SO - what does all this tell us? The right pane shows us the CSS - it tells us what css file it is in and on what line. It also tells us the name of the element containing the text.<span class="cssSelector"> if you look in the left frame you will see the element in the code, If yoou hover over thie part of the code the element is highlighted on the page</span></p>
<p>WOW!! (Great isn't it).</p>
<p>So to make a change - open up the CSS file (the one displayed in the right hand pane) and searchfor the css elements name. Then you can modify it and save it. Hit refresh on your browser to see the change.</p>
<p>Easy as that.</p>
<p><strong>Searching for markup<br></strong></p>
<p>After a while you will find this pretty easy and might want to progress to the next level - this will probably be about the same time that you want to modify some of the markup. The CSS files are pretty easy to find, but what about if you want to mod some of the HTML. This is where the text editor comes into it's own.</p>
<p>Remember i mentioned you need a text editor that can search within files - this is why (forget doing this with windows - full text search hasnt worked properly since they introduced the nodding dog back in Win98).</p>
<p>- Find the element you want to modify using the inspector (as above)</p>
<p>- copy a portion of the code - don't choose any changeable / dynamially generated content, choose a HTML element / style tag</p>
<p>- Using your text editor - perform a search in files - this may net only one result, it may return many - to test which one is right you may need to modify the file by placing a marker in it - perhaps the word 'test'</p>
<p>- Save the file</p>
<p>- Refresh your browser</p>
<p>- inspect the element again to see if it has the word 'test' in it. If it has you've found your file - if not try again.</p>
<p>- once you have located your file you can then mod it as necessary.</p>
<p>- you get the idea....</p>
<p><strong>Conclusions</strong></p>
<p>With a little practice you will easily be able to find and mod any style element on your site, CSS is mostly self explanatory, it is in plain text for the most part. If you're not sure - just change it to test what it does - you can always change it back again.</p>
<p>There are lots of CSS reference sites on the web - you will find them invaluable - use them.</p>
<p><strong>Aditional Tools and Info</strong></p>
<p>What text editor??? ask 10 people and you will get 10 different answers.</p>
<p>I've used many over the years, but here are my faves</p>
<p>Windows - Ultraedit / Ultraedit Studio (soon to be ported to Mac / Linux)</p>
<p>Linux - Gedit (Standard editor under Gnome desktop) / Jedit (java based)</p>
<p>Mac - TextMate / Jedit / Coda</p>
<p>Jedit is free and very capable but looks clunky (IMO)</p>
<p>Eclipse IDE is also free although Eclipse is a little bloated for just a text editor. If you want to use Eclipse (its Multi Platform) make sure you install the PDT (PHP Development Tools plugin) Eclipse is actually a full on IDE for java, c+, ruby, etc... Steer away from the Pulse package if you can - it's very slow to load - look for the PDT project pages. It also has an SVN CVS plugin too.</p>
<p>Uedit is a very capable programmers editor and also comes with project management, FTP and SVN CVS control - (Uestudio is basically the same but a full on development IDE) I used Uedit for 10 years before leaving Windows.</p>
<p>Coda is one of the best tools I've used - aimed at web design only, it includes FTP / SVN CVS / Project management + CSS inspector but it only available for the Mac. It's simple and nice to use - also includes a built in terminal emulator.</p>
<p>The choice is yours but choose wisely and it will make your life much easier.</p>
