---
published: true
title: Adding a footer to flask-bootstrap
tags: flask flask-bootstrap footer 
category: flask 
image: /images/flask-icon.png
date: 2020-10-15 10:30:00 +9:30
---

Whilst working on the [Acqua](https://deeemm.com/acqua/2020/10/05/acqua-dp.html) project I wanted to add a footer to the applications web page. Acqua uses flask along with flask-bootstrap to handle page generation and rendering. Whilst flask-bootstrap is pretty good at delivering general layout content, the [method described in the documentation](https://pythonhosted.org/Flask-Bootstrap/faq.html?highlight=footer#how-do-i-add-a-footer) for adding a footer leaves a lot to be desired, especially the way that they have actually implemented the footer itself, which is far from elegant, it's bordering on hackish.

So whilst searching for less hack-ish solutions a came across [Diego Quitanas solution](https://gist.github.com/diegoquintanav/c72f827401dfac68ef4ec62e1c234612), which was to create a new footer block outside of the content block. This could then be called without having to use the super() function, which is a heaps more elegant solution than the one suggested in the flask-bootstrap FAQ.

So I played around with this for a while, but was not 100% happy with it. I found that needed to recreate the footer on each individual template page, which kind defeated the purpose of using a template, I might just as well write HTML. Whatever happened to [good old fashioned HTML and CSS](http://www.csszengarden.com/) (remember that!?)

But thanks for this Diego's solution I was inspired to building on his idea and do something slightly different.

I decided not to bring the 'content' block into my rendered pages, but just leave it in the base.html template. There's really no need to recreate it for each page as it is always the same.

I then created a new 'content' block called 'main' and nested it inside the original 'content' block along with the footer block so that it looks like this

**my-base.html**
``` javascript
{%- extends "bootstrap/base.html" %}

...

	{% block content %}
	
	   {% block main %}
		  ... just include boilerplate code here, stuff that you want to appear on ALL pages, like breadcrumbs etc
	   {%- endblock %}
	   
	   {% block footer %}
	   <div class="container">
		  <div id="footer">
			   <p>&copy 2020 Your footer stuff goes here</p>
		 </div>
	  </div>
	   {%- endblock %}
	
	{%- endblock %}
```

Then within the rendered pages all I need to do is override or extend the 'main' block.

**my-page.html**
``` javascript
	{% extends "my-base.html" %}
	
	{% block main %}
	  {{ super() }} <!--NOTE I am APPENDING this to the boilerplate code in the base.html file so I use 'super'-->
	  <div class="container">
		  <div class="jumbotron">
			<h1>Here's your content</h1>
			<p>This is the index page</p>
			</div>
	  </div>
	{%- endblock %}
```

There is need to include the footer block again as we are not changing it by overriding it or extending it. Once the footer is defined within our base template we're pretty much done with it. `base.html` is acting as a proper template and the individual rendered pages are acting as overrides. I'm not repeating or recycling any blocks, all of which I find acceptable. It's not hack-ish and the code is completely portable as it still follows all of the  rules laid down by flask.

I nested the 'main' and 'footer' blocks within the 'content' block so that they would render correctly. This was an issue raised elsewhere when trying to create a custom 'footer'. Of course those issues are more of a layout and CSS problem than a flask-bootstrap problem but correctly formatted source code, where everything appears in order and content is seperate from style is of fundamental importance. This is especially pertinent when you consider that flask linters spit the dummy when there's an extra space in an indent. In fact there's a certain irony that the official solution is such a hack.

But anyhow's, I digress, back to the matter at hand. I'm essentially treating the 'content' block the same way I would the `<body>` tag. It encapsulates all content and so is not something that needs to be repeated in individual template files. This recycling and repeating of code seems to be something that is missed on all of the tutorials online, where much of the code is recycled.  Diego's solution was the only one to address this.

---
<br>
If you find this post of use, please pay it forwards with a random act of kindness. 

/DM
