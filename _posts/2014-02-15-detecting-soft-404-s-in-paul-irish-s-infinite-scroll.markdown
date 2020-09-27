---
layout: post
title: Detecting soft 404's in Paul Irish's Infinite Scroll
joomla_id: 264
joomla_url: detecting-soft-404-s-in-paul-irish-s-infinite-scroll
category: General
tags: infinite-scroll javascript php
date: 2014-02-15 03:47:53.000000000 +10:30
---
<p>Ive used Paul Irish's excellent <a href="http://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=2&amp;cad=rja&amp;ved=0CDYQFjAB&amp;url=http%3A%2F%2Fwww.infinite-scroll.com%2F&amp;ei=8roEU-6YK8O1tAbzl4DwBQ&amp;usg=AFQjCNGM_yMGsAHVr_SAoWKUWlBrEwQu2g&amp;sig2=2n7MUQDPvwzLNeWQWzeNBw&amp;bvm=bv.61535280,d.Yms" target="_blank">infinte scroll</a> on a number of projects before but recently found that I was having issues with ending the scrolling after the last items was retrieved on Hikashop. The issue is due to Joomla's error handling - instead of&nbsp; returning a 404 'page not found' error response it returns a normal page ok response (200) - it can do this intentionally when it provides a useful user defined 404 error page but can also do this unintentionally as in this case. This behavior is commonly known as a soft 404.</p>
<p>As infinite scroll relies on a 404 error being returned when there are no more pages to stop further processing, the net result is that the scrolling keeps on going. Not a massive issue but one that results in an annoying animated icon appearing when you scroll past the end of the page.</p>
<p>In my opinion this is not necessarily the best way of detecting the 'end of the internets' as it assumes that the 404 error means there are no more pages. I'm sure we all know what assumptions usually lead to. By far the best way to determine if there is no more data is to check the actual data itself.</p>
<p>I initially tried looking at the length of the data returned but found that this was not really suitable as it contained the entire page and was really hard to separate the parts that I required although this is possibly due to my lack of javascript skills more than anything else. After some testing I found that instead of looking at the data length looking at the length of the child elements returned was the way to go. I this way I could detect when no more data was present.</p>
<p>&nbsp;</p>
<p>To do this I created an additional option and set it to accumulate the length of itemselector child data returned using $('.itemSelectorChildClass').length I then checked this each time that the information was retrieved to see if it's length had increased. If there was no change then no new data had been retrieved so I destroyed the instance.</p>
<p>&nbsp;</p>
<p>I my opinion a much better way than relying on a 404 as this works regardless of the returned page state.</p>
<p>&nbsp;</p>
<p>There is however one caveat to this solution; On the page I was returning there was reliable repeatable child data that I could test for. This may not be the case for all pages and may require that you wrap your data in a further block element so that you can implement this.</p>
<p>&nbsp;</p>
<p>EG</p>
<p>&nbsp;</p>
<pre><code>&lt;div class="itemSelector"&gt;
    &lt;div class="itemSelectorChild"&gt;
        Lorem ipsum...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>&nbsp;</p>
<p>To implement this an additional two options need to be added:</p>
<p>&nbsp;</p>
<pre><code>$.infinitescroll.defaults = {
    //...other options
    state: { 
    //...other state options..
        numSubItems: 0 // variable to count total child items returned
    }
    //...other options
    itemSelectorChild: ".itemSelectorChildClass" // class of itemselector child
}
</code></pre>
<p>&nbsp;</p>
<p>The following code then needs to be added to the end of the _retrieve function</p>
<p>&nbsp;</p>
<pre><code>//test for increase in number of child items
if (opts.numSubItems === $(opts.itemSelectorChild).length) {
    //no more child items added so lets be done
    state.isDone = true;
    //do end tasks here 
}

//more child items added so update count
opts.numSubItems = $(opts.itemSelectorChild).length;                   
</code></pre>
<p>&nbsp;</p>
<p>Hope this helps someone else out.</p>
<p>&nbsp;</p>
<p>DM</p>
<p>&nbsp;</p>
<p>I added this to the Github issue tracker - https://github.com/paulirish/infinite-scroll/issues/499</p>
