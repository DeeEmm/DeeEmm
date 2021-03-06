---
layout: post
title: Toggle Hidden Files In Finder
joomla_id: 200
joomla_url: toggle-hidden-files-in-finder
category: Mac How To's
tags: finder hidden-files mac osx
date: 2010-02-28 15:56:25.000000000 +10:30
---
<p>This is a great little tip for showing hidden files in OSX. Normally all files are hidden, and so access to the hidden unix filesystem is not possible. This is easily overcome however. You can either permanently disable this feature by running the following command in terminal.</p>
<p class="code">defaults write com.apple.Finder AppleShowAllFiles YES</p>
<p>or, if you need to change the visibility on a regular basis the following may be of more help</p>
<p>Open up the apple script editor and paste in the following code</p>
<p class="code">try<br> <br> set dotVisible to do shell script "defaults read com.apple.finder AppleShowAllFiles"<br> <br>on error errorMessage number errorNumber<br> <br> set dotVisible to 0<br> <br>end try<br><br>if dotVisible = "0" then<br> <br> do shell script "defaults write com.apple.finder AppleShowAllFiles 1"<br> <br>else<br> <br> do shell script "defaults write com.apple.finder AppleShowAllFiles 0"<br> <br>end if<br><br>tell application "Finder" to quit<br><br>delay 1<br><br>tell application "Finder" to activate</p>
<p>Now save this as an application - call it something like 'toggle_hidden_folders'</p>
<p>Clicking on the toggle_hidden_folders.app now toggles the visibility of hidden files and folders.</p>
