---
layout: post
title: Dolphin - Add extra info to Contact page
joomla_id: 224
joomla_url: dolphin-add-extra-info-to-contact-page
category: Dolphin 7.0.x Modifications
tags: contact-page d7 dolphin-7 extra-info
date: 2010-07-26 01:58:54.000000000 +09:30
---
<p>If you would like to add some extra info to the 'Contact Us' page, such as an address, or a phone number, then the following mod will be of help.</p>
<p>Edit contact.php</p>
<p>Search for</p>
<p class="code">'submit' =&gt; array(<br>'type' =&gt; 'submit',<br>'name' =&gt; 'do_submit',<br>'value' =&gt; _t('_Submit'),<br>),</p>
<p>Then add underneath</p>
<p class="code">'address' =&gt; array(<br>'type' =&gt; 'value',<br>'caption' =&gt; 'Postal Address',<br>'value' =&gt; 'DeeEmm Web Technologies. PO Box 2105, Hilton Plaza, Adelaide, SA 5033',<br>),</p>
<p>Obviously you will need to change the details to suit your site.</p>
<p>/DM</p>
