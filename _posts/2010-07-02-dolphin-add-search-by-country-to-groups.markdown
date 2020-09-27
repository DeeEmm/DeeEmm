---
layout: post
title: Dolphin - Add search by country to Groups
joomla_id: 216
joomla_url: dolphin-add-search-by-country-to-groups
category: Dolphin 7.0.x Modifications
tags: country d7 dolphin-7 groups search
date: 2010-07-02 00:18:18.000000000 +09:30
---
<p>To add an extra search field to your groups - for example 'Country' do the following.</p>
<p>Edit</p>
<p><strong><em>/modules/boonex/groups/classes/BxGroupsFormSearch.php</em></strong></p>
<p>Find</p>
<p class="code">$aCategories = $oCategories-&gt;getCategoriesList('bx_groups', (int)$iProfileId, true);</p>
<p>Add After</p>
<p class="code">$aCountries = $oProfileFields-&gt;convertValues4Input('#!Country'); &nbsp; &nbsp; &nbsp; &nbsp;<br>$oProfileFields = new BxDolProfileFields(0);</p>
<p>Find</p>
<p class="code">'inputs' =&gt; array(<br>'Keyword' =&gt; array(<br>'type' =&gt; 'text',<br>'name' =&gt; 'Keyword',<br>'caption' =&gt; _t('_bx_events_caption_keyword'),<br>'required' =&gt; true,<br>'checker' =&gt; array (<br>'func' =&gt; 'length',<br>'params' =&gt; array(3,100),<br>'error' =&gt; _t ('_bx_events_err_keyword'),<br>),<br>'db' =&gt; array (<br>'pass' =&gt; 'Xss',<br>),<br>),</p>
<p>Add After</p>
<p class="code">'Country' =&gt; array(<br>'type' =&gt; 'select_box',<br>'name' =&gt; 'Country',<br>'caption' =&gt; _t('_bx_groups_caption_country'),<br>'values' =&gt; $aCountries,<br>'required' =&gt; true,<br>'checker' =&gt; array (<br>'func' =&gt; 'preg',<br>'params' =&gt; array('/^[a-zA-Z]{0,2}$/'),<br>'error' =&gt; _t ('_bx_groups_err_country'),<br>),<br>'db' =&gt; array (<br>'pass' =&gt; 'Preg',<br>'params' =&gt; array('/([a-zA-Z]{0,2})/'),<br>),<br>),</p>
<p>Add the following language keys -</p>
<p>_bx_groups_caption_country -&gt; 'Country'</p>
<p>_bx_groups_err_country -&gt; 'please specify country'</p>
<p>The same principle applies to any predefined lists, but an additional modification will need to be made to BxEventSearchResults.php to process the new search field.</p>
<p>/DM</p>
