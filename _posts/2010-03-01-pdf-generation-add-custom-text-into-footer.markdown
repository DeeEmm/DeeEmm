---
layout: post
title: PDF Generation - Add Custom text into footer
joomla_id: 194
joomla_url: pdf-generation-add-custom-text-into-footer
category: Joomla 1.5 How To's
tags: custom-text footer joomla-15 pdf
date: 2010-03-01 11:45:56.000000000 +10:30
---
<p style="font-size: 13.5px; line-height: 21px;">This is a quick and dirty hack to add some text to the footer of the PDF's generated within Joomla. The library used to generate the PDF's is the open source TCPDF library - http://www.tcpdf.org To add code into the footer of the generated PDF's, you will need to edit the following file:</p>
<p style="font-size: 13.5px; line-height: 21px;"><span class="code">/libraries/tcpdf/tcpdf.php</span></p>
<p style="font-size: 13.5px; line-height: 21px;">Find the following code in the footer() function</p>
<p class="code" style="font-size: 13.5px; line-height: 21px;">//Print page number<br> if ($this-&gt;rtl) {<br> $this-&gt;SetX($this-&gt;original_rMargin);<br> $this-&gt;Cell(0, $footer_height, $pagenumtxt, 'T', 0, 'L');<br> } else {<br> $this-&gt;SetX($this-&gt;original_lMargin);<br> $this-&gt;Cell(0, $footer_height, $pagenumtxt, 'T', 0, 'R');<br> }</p>
<p style="font-size: 13.5px; line-height: 21px;">&nbsp;</p>
<p style="font-size: 13.5px; line-height: 21px;">Underneath it add the following code - replacing the text with your own</p>
<pre style="font-size: 13.5px; line-height: 21px;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; //DeeEmm footer text hack<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; $this-&gt;SetY($footer_y);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; $this-&gt;Cell(0, 10, 'www.DeeEmm.com', 0, 0, 'C');</pre>
<p style="font-size: 13.5px; line-height: 21px;"><br style="font-size: 13.5px; line-height: 21px;">Hey presto - you now have additional text in your footer</p>
