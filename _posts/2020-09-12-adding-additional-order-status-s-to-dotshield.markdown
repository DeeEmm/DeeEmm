---
layout: post
title: Adding additional order status's to DotStore
joomla_id: 337
joomla_url: adding-additional-order-status-s-to-dotshield
category: General
date: 2020-09-12 11:18:00.000000000 +09:30
---
<div class="ebd-block  " data-type="text" >I'm using the woocommerce deposits plugin with DotStore product-attachment plugin but noted that the partially paid order status was not included in the available selections.<br><br>After some digging I found that the radio buttons are controlled within the following file...<br><br>../wp-content/plugins/woo-product-attachment/admin/class-woocommerce-product-attachment-admin.php<br><br>Specifically around lines 950 and 1375. All that was left was to determine what the order status for a partially paid order was.<br><br><p><span>After sone digging around in the woocommerce deposits plugin I discovered that the status is 'wc-partial-payment', All that was left to do was to create extra radio buttons in the code and assign them the new 'wc-partial-payment' order status.</span>&nbsp;</p></div>
