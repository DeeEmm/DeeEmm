---
published: true
title: Acqua - CRUD
tags: acqua flask sqlite crud
category: acqua
image: /images/aqua-crud.png
date: 2020-10-19 01:03:00 +9:30
---

![/images/acqua-crud.png](/images/acqua-crud.png)

## CRUD literally

So I'm developing Acqua in python / flask as it seems like the best format for a browser based app (or at least that's what the internet tells me). It'a also running this here website courtesy of Github, so I have a brief familiarity with it, although to be perfectly frank I've never looked at Python or flask before choosing to migrate the website to my github page. So there's pretty big learning curve for me to get this up and running, but I like a challenge and it is a chance to learn something new, which is always cool.

Today I managed to implement basic CRUD functionality into the app using SQLite and SQLAlchemy under Flask. TBH it was anything but straightforwards. Inheritance within Python / Flask is a bit of a nightmare, especially if you are used to languages like PHP. Everything needs to be explicitly declared, and even then, you can end up with multiple instances of the same variable. This is a bit challenging when you are trying to follow a basic MVC architecture; with database models in one file, views in another, static content in another file and all across several components. It's enough to drive even the most patient person nuts.

Sheer determination eventually allowed me to get a basic working CRUD implementation and I think I have probably read every stackoverflow post and tutorial out there along the way. If anyone is interested, the code is on [github](https://github.com/DeeEmm/Acqua) 

/DM