---
published: true
title: Open Hardware Licensing
tags: DIYFB, Hardware, License
category: DIYFB
image: /images/diyfb-shield.jpg
date: 2021-09-24 08:30:00 +9:30
---

![/images/diyfb-shield.jpg](/images/diyfb-shield.jpg)


### A dilemma... 

If you've been following my work you will probably know about the [DIY Flow Bench](https://github.com/DeeEmm/DIY-Flow-Bench) project. This is an open source software / hardware device that measures volumetric air flow and is used in applications like automotive cylinder head development. I created the project back in 2018 after having had the idea for some time. Since then I have worked on it off and on, covid and family permitting, to get to the stage where the software is currently going through unit testing and the bugs are being ironed out of the hardware 

My intention with the hardware is to make it available to all so that anyone can build a bench or retrofit the system to their existing bench whether that bench be used in a commercial setting or someone's backyard shed. However it was always my intention to sell these as a commercial venture, either as a bare board, a DIY kit or a fully assembled system. I run a small one man company that manufactures stuff like this and so this has always been part of my agenda. A little bit of give and take.

I've been involved in Open Source software for a long time. I wrote my first open source project back in 2006, and what I have noticed over the years is that with projects like this there are always people who try to profit from the work of others. This is not so true of non-tangibles like the software code itself, but when you throw hardware into the mix there are a bunch of folks who will undermine the general ethos of open source and sell hardware without actually contributing to the project. You only need to take a look at all of the clone Arduino shields that are available and you will get the general idea. The Speeduino EFI project is also another prime example of this.

So I find myself in a position where I want to publish the hardware design to allow people to make the PCB's themselves should they wish, but I don't want to end up in a position where I have created commercial competition for myself where people sell boards or hardware without contributing to the project. So I feel that releasing the hardware under the GPL license is not the most sensible thing to do.

What I have seen with the Speeduino project is that developers are free to design and sell their own hardware that is compatible with the core Speeduino code. These are not derivative works, but new hardware designs and so are free to be sold under whatever license the developer wishes. There are a number of boards like this many of which I have used myself, I have even developed my own boards. This leaves the sales of the original hardware to go to the original developer but that parallel development also feeds back into the main project.

In my experience what happens is that those people with the skills to design and develop hardware will generally do exactly that and in doing so will also contribute to the main project, but those without the skills to design their own hardware simply sell clones and thus rarely contribute to the hardware development. It's very much a one-way-street, they only take.  

So with all of this in mind I am pondering releasing the hardware design under a non-commercial license.

I figure that those who would develop hardware will be able to do so (given enough information) and so do not necessarily need the hardware source files from  which to start. And so with this in mind I am contemplating not making the design available.

The software is released under a GPL license. this essentially means that it can be used in commercial products and sold for profit. It was always the intention to make this freely available to everyone. DIYFB is foremost a software project. There are no real restrictions on how the software is used. The GPL license is pretty standard for open source software. You can pretty much do what you want with the code provided that the software or any derivative works are attributed back to the project. For example If Superflow wanted to sell this with their benches, that's absolutely fine and allowable under the GPL license provided that they attribute the code to the DIYFB project and not try to pass it off as their own.

To be clear. The DIYFB software license will never change, even if the hardware sales soar and I end up being a commercial flow bench manufacturing success (never going to happen and not my intention with this) the software will always remain open source. Plus, it's practically impossible to move from an open source license like the GPL license to a closed source without the resultant code being a derivative work. I think that you could successfully challenge companies like Bowling and Grippo (Megasquirt) and Makerbot (Replicator 3D Printer) who both closed their doors to the open source community that had contributed to both of those projects, as it is almost impossible to build the same product without reusing any of the previous code or IP. Not that they would ever be challenged... 

### The value of licensing law in open source projects

The big issue with projects like these is that practically all of the open source licensing laws remain untested. This is simply because to take something like this through court to its logical conclusion incurs costs to the order of millions of dollars. Take a look at the costs associated with commercial IP and patent disputes and you will get an idea of how expensive this process is. You are following the same process, with the same lawyers in the same courts. Just because you give your product away for free does not mean you get a cut price service. In fact the odds are really stacked up against the open source IP holder when it comes to challenges with commercial companies, simply as the commercial company has a pocket full of dollars that the OS IP holder does not. Laws and the legal system is invariably stacked in favour of those with the deepest pockets. 

I had a friend with a small but successful company who made a few million dollars a year. They took a company to court for infringing on one of their patents (they blatantly copied their product) The case was essentially clear-cut, but it still cost around 2 million dollars to resolve in their favour. Basically an entire years operating profits. The case became a war of attrition until one of them ran out of money to throw at their very expensive lawyer, at which point they lost. So when you apply this to open source projects you soon realise that 99% of open source developers will never be in a position to take action against licensing infringements simply as they could never afford to. So they are completely reliant on the goodwill of those people using the software / hardware to do the right thing. This means that the less scrupulous are basically free to do as they please as they will likely never get challenged. As the saying goes, 'laws are only for honest people'.

The difficulty I'm struggling with here is whether to release the design files, only the Gerber files or no files at all. It's like I have the Open Source Angel sitting on one shoulder and the Commercial Devil sitting on the other. On the one hand I do not want to put any barriers up to building this project but on the other hand I want to protect my commercial interests which is the sale of assembled shields. It would be great if everyone followed my intentions but I am not so naive to think that this would actually happen. 

Being a proponent of open source design for many years I understand the pro open source arguments. But the perspective I view these from are as a developer. I have always considered that giving away my work under an open source license is an altruistic action. It is open source as I want to give it away for for free for the benefit of others. With a single developer (as most of my work is) this is an easy viewpoint to contemplate. But when you have many developers, they may have different reasons for contributing and these may not align. The project only currently has a single developer but in the future that might not be the case and so it is important to get the licensing correct now as it might not be possible to change it down the track. The other side of the fence are the consumers, or in some cases 'prosumers'. (The difference being that a prosumer does not only use but also contributes to the development). There are some consumers that believe that all design should be open source and that this is their right. I personally do not hold this viewpoint. I agree with the entire free-as-in-freedom philosophy of the open source movement, but I am a strong believer that it is the choice of the developer or designer as to how they present their works to the wider audience. There does however seem to be an increasing number of people who believe that they are entitled to such things. I think that this stretches a lot further than the open source community and is perhaps better encapsulated as a generational issue.

The right to repair laws that appear to be popping up are an interesting take on this. You would think that having invested (insert inordinately large sum of money here) into bringing a product to market as a commercial endeavour (and putting food on the tables of your employees), you should be allowed to retain your IP and thus profitability. However it seems that increasingly there is a belief that this should not be the case and you should be forced to disclose your designs under the 'freedom of repair' rights, which essentially state that as people are both too cheap and too dumb to be able to fix it themselves or pay someone to fix it for them, they should be given the necessary tools to fix it for free, at the expense of the manufacturer. I actually find this alarming. No one is forced to buy the product, people can easily buy an alternative if they disagree with the manufacturers repair philosophy or exorbitant parts costs, a vote-by-foot if you like. but forcing the manufacturer to disclose IP via legal means is ridiculous. To me this seems to be born of the aforementioned entitled generation where this expectation exists. People who want the benefits of the aforementioned inordinately large sum of investment capital but without actually paying for it. I call them freeloaders. They may well sit behind the thinly veiled disguise of being self-righteous pro-freedom or whatever it is badged as, but they are essentially just cheap-skates who want all of the benefits but without the cost. 

### But what does this have to do with my project? 

Ultimately the impact on a project like mine is still that there will always be someone out there who believes it's fine to ignore licensing and try to profit from the work of others and believe that they have a right to do so, despite what the license or the law may say. I am certainly not in any financial position to challenge them in court, and so if this situation did arise I would be at a loss. So the commercial side of my brain says don't release it as this protects my IP by not making it available to those who may take advantage. However this is completely at odds with the open source side of my brain which says the opposite.

Which brings me back to my dilemma and what to do.

I think that my solution is to release two boards.

The first is a simplified version of the shield. This will be released complete with gerbers and schematics. It is a discrete design that is easy to assemble and squarely aimed at the DIY crowd (thats it in the photo above). It is still full featured and includes all functions but utilises plug in break-out-boards for all of the sub components. This will be released under a non-commercial open source license which allows people to make their own PCBs but not to sell them. 

Along side this I am developing an SMD version that will only be available to purchase as an assembled controller. Designs will not be released for this, essentially making it a proprietary commercial design. This completely falls within the GPL license terms of the software and allows me to retain commercial interest. It will most likely be sold as a kit along with the MAF. Of course there is nothing stopping others from designing and selling their own hardware. In fact I encourage this in the hope that they will also contribute to the software, which benefits everyone. 

### But what is there to stop people selling the official released design?

Essentially nothing but my hope is that people will do the right thing. (yeah-yeah a man cannot live on hopes and dreams alone :D )

In my experience a majority of people do not fall into the DIY sector and will want to buy a completed, assembled and tested setup that is pre-loaded and comes with support and a warranty and this is where the SMD version is focused. So given the choice between a clone of the DIY version or an official fully assembled tested and warrantied controller I suspect that they would choose the latter.

Selling a completed controller also helps to fund the development of the software. I have hundreds if not thousands of hours invested into this already, it's pretty time consuming. So each sale helps to pay the bills which in turn affords me a little more time in front of the keyboard to chip away at the next feature on the roadmap.

So, even some three years after the project was started it's still early days and time will tell how things pan out. It will be interesting to look back on this post in three years time and see how far we have come.

/DM
