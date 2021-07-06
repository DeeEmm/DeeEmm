---
published: true
title: [RANT] Bloatware
tags: Bootstrap, pron, geek, bloatware
category: Rants
image: /images/bloat.jpg
date: 2020-10-20 08:30:00 +9:30
---

![/images/bloat.png](/images/bloat.png)

Random musings for today.


No one writes code any more. Why code when you can use a library instead. Why use one line of code when you can use 20,000, even if you only use 1% of that libraries functionality?

I think that the availability and cheap cost of memory has made us lazy coders. Way back when I was a fledgling robot programmer we had robotic gantry systems made by a company called Niko. The processors had a very limited amount of memory in them, and they processed every line of code regardless of whether it was a blank line or a program comment. This means that such overheads had a pretty big impact on code execution and so you coded accordingly. 

Nowadays with limitless memory no one actually codes any more, they just use other peoples libraries, even if they are only using 1% of that libraries overall functionality. It's just plain laziness and creates bloatware. The world is full of it. From Windows to websites, it's everywhere you look and I find it a bit annoying.


## Code Masturbation

Code for the sake of code.

Making something overly complex, either just for the sake of it or because you know no better.

I experienced this whilst working at BMW where they had developed a PLC program that could control any equipment with any number of step sequences. Every PLC in the plant ran the same program. This might sound like a triumph of mordern coding, but it did it in a way that made it impossible to fault find. The I/O data was held in shift registers and written to the I/O by code blocks which means that the traditional search and test functions of the PLC could not be used to test the state of the I/O as the actual I/O did not exist within the program. You had to interrogate and interpret the shift registers to see what was going on. What made it worse was that the PLC program took up the entire memory of the PLC, so it was impossible to make any modifications without deleting some of it

## Spaghetti logic

Why use one function and three lines of code when you can create the coding equivalent of a Heath Robinson contraption

I came across this at Jaguar where they had an automated underbody sealing machine. This had started off as code masturbation but over the years had been upgraded and updated a number of times. As none of the previous programmers could figure out WFT was going on with the program they simply tacked on additional bits of code to manipulate the outcome of machine to do what they wanted it to do. If the outcome was not quite right, they added more code to manipulate it some more. it was an absolute mess.

What a nightmare that machine was.

It's a bit like reading some peoples idea of procedural logic, if-this-then-that in finitum

## Geek Pron

Code complexity is like porn for geeks. 

Just like Hackaday, where people spend inordinate amounts of time reverse engineering something where the value appears to be inversely proportional to the complexity of the project and the effort expended, creating complex code is literally code masturbation for geek types. There's no brevity in coding nowadays. No one writes pragmatic code any more. 

It's like object oriented programming. People seem to have lost the original premise of hat it's all about, instead developing vastly complex coding standards that simply add bloat by requiring code to be structured in an ever more complex fashion. 

As coding languages develop and software systems improve, programming appears to be getting ever more lazy and bloated.

It's a complete paradox.


## Bootstrapon

Another library. Bootstrap.

This time it's a visual library that makes everyones websites look the same.

Despite this EVERYONE loves it

Go Figure.
