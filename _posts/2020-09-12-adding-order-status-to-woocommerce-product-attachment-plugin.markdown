---
layout: post
title: Adding order status to woocommerce-product-attachment plugin
joomla_id: 338
joomla_url: >-
  adding-additional-partial-payment-field-to-dotstore-woocommerce-product-attachment-plugin
category: General
date: 2020-09-12T02:30:00.000Z
published: true
tags: wordpress woocommerce
---
<p>I'm using the woocommerce deposits plugin with DotStore product-attachment plugin but noted that the partially paid order status was not included in the available selections.</p>

<p>After some digging I found that the radio buttons are controlled within the following file...<br /> <br /> ../wp-content/plugins/woo-product-attachment/admin/class-woocommerce-product-attachment-admin.php<br /> <br /> Specifically around lines 950 and 1375. All that was left was to determine what the order status for a partially paid order was.<br /> <br /> After sone digging around in the woocommerce deposits plugin I discovered that the status is 'wc-partial-payment', All that was left to do was to create extra radio buttons in the code and assign them the new 'wc-partial-payment' order status.<br /> <br /> at about line 976 an extra list element. Just slot it in after the list element for the 'completed' status.</p>
<pre>                    &lt;li&gt;&lt;label for="wcpoa_wc_partial_payment"&gt;<br />                    &lt;input name="wcpoa_order_status[&lt;?php <br />                    echo  esc_attr( $wcpoa_attachments_id ) ;<br />                    ?&gt;][]"<br />                    class="" value="wcpoa-wc-partial-payment" type="checkbox"<br />                    &lt;?php <br />                    if ( !is_null( $wcpoa_order_status ) &amp;&amp; in_array( 'wcpoa-wc-partial-payment', $wcpoa_order_status, true ) ) {<br />                        echo  'checked="checked"' ;<br />                    }<br />                    ?&gt;&gt;<br />                    &lt;?php <br />                    esc_html_e( 'Partially Paid', $plugin_txt_domain );<br />                    ?&gt;<br />                    &lt;/label&gt;<br />                    &lt;/li&gt;</pre>
<p> </p>
<p>and again at 1413</p>
<pre>                    &lt;li&gt;<br />                    &lt;label for="wcpoa_wc_partial_payment"&gt;<br />                    &lt;input name="wcpoa_order_status[]" class=""<br />                     value="wcpoa-wc-partial-payment"<br />                     type="checkbox"&gt;&lt;?php <br />            esc_html_e( 'Partial Payment', $plugin_txt_domain );<br />            ?&gt;<br />                       &lt;/label&gt;<br />                       &lt;/li&gt;</pre>
<p><br />Now downloads can be selected to be made available after customers have made partial payment.<br /> <br /> /DM</p>
