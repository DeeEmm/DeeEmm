---
layout: post
title: JomSocial CSS Maxification - less is actually more
joomla_id: 259
joomla_url: jomsocial-css-maxification-less-is-actually-more
category: General
tags: benchmark css inheritance jomsocial minification
date: 2013-08-16 12:39:56.000000000 +09:30
---
<p>Just been putting a site together on the new JomSocial version 3. One of the first things I always do (as you should) is create a new template - a clone of the original one. This way I can hack away at creating the site and develop the template as I go along without changing the default.</p>
<p>Changing the style of elements by CSS is a pretty normal act and one that I prefer to do with the original CSS and not by overrides as is always suggested by vendors. Normally I use Coda to de-minify any minified CSS and then re-minify it once I have finished. For some reason I was hitting a few issues when de-minifying the standard templates style.css file, it seemed to be replacing any reference to images with an ASCII reference instead of the path and filename data. Guessing that this must be due to the method used to compress the file (something other than the normal whitespace stripper) I went on a hunt to find out what was up with the new CSS file format.</p>
<p>Not finding too much I stumbled across T<a href="http://www.jomsocial.com/forum/technical-issues/7485-solved-why-are-there-no-line-breaks-in-my-jomsocial-css-files/reply" target="_blank">his Post </a>which simply suggests that the CSS files should not be modified but does not say how they were compressed and how to de-minify them. It does however give a clue - 'use less compiler'.</p>
<p>So I goggled 'useless compiler' and came across the <a href="http://lesscss.org/" target="_blank">http://lesscss.org/</a> website. I say 'useless' with my tongue in my cheek, for on the first page there is a bit of a breakdown showing some examples, one is the use of variables.</p>
<pre class="brush:css">  // LESS

@color: #4D926F;

#header {
  color: @color;
}
h2 {
  color: @color;
}
</pre>
<p>I was very (very) amused at this. They are seriously suggesting using more characters as a way of saving space. Phah. The devil is in the details and this kind of thing gets on my nerves. Of course there are better examples, like urls for instance, which is exactly the reason for my images not showing up properly. Well at least I can now do a search-and-destroy on the offending items and get a real CSS file back into play.</p>
<p>The whole issue made me think of my arch nemesis the Dolphin CMS where every single module uses template overrides. I spent quite a time trying to convince Boonex that using template overrides massively increased page load times, and using 50 of them was what was slowing their page load times down but no one would listen.</p>
<p>So it got me to thinking, and this got me to testing.</p>
<p>I decided to do some benchmarking using the page I was developing. I decided to record the average load time for the CSS file.</p>
<p>First off - The minified file. This returned an average load time of 1.18ms</p>
<p>Next up the de-minified file. This returned an average load time of 1.19ms.</p>
<p>Clearly there is a saving, which is what we would expect, but not as much as you would think there would be, there really isn't that much in it.</p>
<p>So, what about the additional file used by the inheritance method prescribed above? and the increase in page load times that I always preach is the result? First off a little background behind my reasoning: Having written and implemented many serial communications protocols in the past I learned first hand that the file open and file close actions along with the associated handshaking and checksums usually result in more of a resource drag than the actual file transmission itself. This was especially true of small text transmissions; which is pretty much what a CSS file is. It is also the reason for connection persistence. The result was that the connection and disconnection take more time than the file transfer itself. Applying the same logic and by the same reasoning I always considered that CSS inheritance was a resource hog.</p>
<p>So what about those load times I hear you say?. Well here you go...</p>
<p>The recommended template override file takes an amazing average load time of 1.14ms and this is an EMPTY file except for the required @import statement. So now we have to ADD this to the load time for the original minified file as this still gets loaded, what we end up with is actually 2.32ms - nearly DOUBLE the load time of an un-minified style.css file. WOW!</p>
<p>Given that there is really no noticeable difference between the minified and non-minified load times is there really any benefit to minifying the file? especially when it is recommended to leave the original file alone and use inheritance instead.</p>
<p>The interesting thing is that the style.css file I used is particularly large for a CSS file as it weighs in at a hefty 362KB. The other file was a mere 87 bytes in size but they both had practically the same load time. Ironically I actually did a series of tests and on occasion the deminified file would sometimes load faster but on average I obtained the figures above.</p>
<p>Minification is certainly a time saver, and along with other compression and caching methods will help to bring page load times down, but using a cryptic minification method like JomSocial are is really unnecessary, it simply makes it hard to work with the files. I also dislike the suggestion that users use file inheritance to override template parameters as this is practically doubling the required resources needed to process the stylesheets if not more once you consider that the DOM parser has to process some style elements twice.</p>
<p>My 02c - I think that JomSocial should just supply the uncompressed CSS files and ignore the 0.05ms penalty from the 5 or so files used in the template, I also think that they should stop recommending inheritance as a method of overriding the templates because of the additional delays it introduces. The way I see things is that they are causing a massive headache for most of their end users by changing their templating structure to something that is hard to read, hard to de-minify and generally obstructive to the whole smooth user experience. I'm sure their users will thank them for it. Hopefully the irony of increased page load times and un-usability being the result of trying to make page load times faster is not lost on JomSocial, but given my <a href="blog/entry/general/jomsocial-group-discussion-exploit">recent experience</a> with them things seem to have changed over in the Azrul offices and it does not appear to be for the better.</p>
<p>/DM</p>
