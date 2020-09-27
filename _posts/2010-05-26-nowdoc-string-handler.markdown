---
layout: post
title: Nowdoc string handler
joomla_id: 189
joomla_url: nowdoc-string-handler
category: PHP
tags: handler nowdoc php string
date: 2010-05-26 05:01:35.000000000 +09:30
---
<p>Some of you may be familiar with the <strong><em>heredoc</em></strong> string handler which allows multi-line strings to be easily assigned to a variable, this great tool has many uses - such as retaining pre-formatted layout and improving the readability of code. The heredoc handler also parses variables contained within the string - much the same way that using double quotes does. Replacing any variables with their respective values</p>
<p>This has some not so obvious drawbacks, one of which i discovered whilst trying to inject complex PHP code into a database for later evaluation via the eval() statement. (please don't ask why)</p>
<p>The problem I found was that whilst it was easy to escape the string so that it would not break the SQL statement, The same escape characters also broke the evaluation. This might not have been an issue in any other situation, but for this particular project i did not have access to the code that carried out the evaluation so that I could strip the escape characters out before running the eval query.</p>
<p>However, PHP 5.3 has now introduced the nowdoc syntax - this basically operates in the same manner as heredoc, but does not parse any of the content. This means that not only are variables not parsed, but neither are any characters that would normally require escaping. In essence, any string read into a variable by the nowdoc handler will not require any escaping whatsoever.</p>
<p><strong>heredoc format</strong></p>
<pre>$somevar = &lt;&lt;your multi<br>line text<br>$here<br>EOF;</pre>
<p><strong>nowdoc format</strong></p>
<pre>$somevar = &lt;&lt;your multi<br>line text<br>$here<br>EOF;</pre>
<p>Th difference is only a small one - the nowdoc syntax has single quotes around the identifier.</p>
<p>A great fix for an annoying issue, but one that is unfortunately not without it's caveats, the biggest one being that PHP 5.3 is still relatively new and there is no backwards equivalent.</p>
