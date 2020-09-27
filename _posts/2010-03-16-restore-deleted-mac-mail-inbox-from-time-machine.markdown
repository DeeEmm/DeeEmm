---
layout: post
title: Restore deleted Mac Mail inbox from Time Machine
joomla_id: 201
joomla_url: restore-deleted-mac-mail-inbox-from-time-machine
category: Mac How To's
tags: deleted inbox macosx mail restore time-machine
date: 2010-03-16 12:44:33.000000000 +10:30
---
<p>If, like me, you have deleted your email account without first moving or saving messages from your inbox, you will soon notice that removing the account also automatically deletes all folders associated with the account. The Inbox, sentbox and any other folders you have created will have disappeared without a trace. I deleted an account as I needed to change the protocol from POP to IMAP, and this seemed the quickest way (you cannot modify the setting directly in preferences). What I didn't realize was that the mail folders would disappear too.</p>
<p>So. No problem - I can simply use my trusty Time Machine backup to restore the deleted files.</p>
<p>OK - open mail app - put focus on inbox - open time machine - browse to older backup.....</p>
<p>mnnnnn. Something wrong here.</p>
<p>I cannot browse to an older backup as i deleted it, and even creating a new version of the same account will not work, as it simply did not exist before it was created.</p>
<p>The simple solution is to choose a different mailbox (if you have multiple accounts) and browse back in time with this selected instead. Now you can go back in time - you will see your old mailbox appear. If you do not have multiple mail boxes simply select the whole inbox instead.</p>
<p>When you are at the correct date - hit restore and then exit time machine.</p>
<p>When you look in your Mail application, you will now notice that there is an new folder called 'Time Machine' in the 'On My Mac' folder. Inside this will be the mailbox(es) that you chose to restore. These will not necessarily be labeled as per the original mailbox, so if you have restored multiple mailboxes, you may need to look through them to determine which is which.</p>
<p>At this point it is worth noting that if you restored the whole inbox, you will now have a separate folder in the recovered mailboxes folder for every mailbox folder one the machine - past and present. The handling of email backups in time machine is strange in this respect.</p>
<p>Don't forget - you might also need to recover your sent emails too. The same process applies. To recap:</p>
<ul>
<li>Open Mail app</li>
<li>Navigate to Sent Items (or folder requiring recovery)</li>
<li>Open Time Machine</li>
<li>Go back to suitable date</li>
<li>Hit the restore button</li>
<li>Close Time Machine</li>
<li>Move the restored files from 'On My Mac' &gt; 'Time Machine' &gt; 'Recovered Mailboxes' &gt; 'Somemailboxname' to their new location.</li>
<li>Delete Unneeded Folders when finished.</li>
</ul>
<p>For me, the easiest solution I found to changing a mailboxes transport protocol settings, was to create a new account, with the correct settings and then move the emails from the old folders to the new folders before deleting the old account. Obvious really - but then hindsight is a wonderful thing.</p>
<p>/DM</p>
