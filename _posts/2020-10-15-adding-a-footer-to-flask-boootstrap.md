---
published: false
title: Adding a footer to flask-bootstrap
tags: 
category: flask
image: /images/flask-bootstrap-footer.png
date: 2020-10-15 10:30:00 +9:30
---

Thanks for this Diego, I was also struggling to include a footer in an elegant manner, your solution was the only one that made any sense however I could not get it to work to my satisfaction. I ended up building on your idea and doing something slightly different.

I decided not to bring the 'content' block into my rendered pages, but just leave it in the base.html template. 

I then created a new 'content' block called 'main' and nested it inside the original 'content' block along with the footer block. 

**my-base.html**
```jinja2
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

and then within the rendered pages all I need to do is override or extend the 'main' block.

**my-page.html**
```jinja2
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

There is need to include the footer block again as we are not overriding it or extending it. Once it's defined within our base template we're done with it unless we want to change it. base.html is acting as a proper template and the individual rendered pages are acting as overrides. I'm not repeating or recycling any blocks, all of which I find acceptable. 

I nested the 'main' and 'footer' blocks within the 'content' block so that they would render correctly. This was an issue raised elsewhere when trying to create a custom 'footer' block. I'm essentially treating the 'content' block the same way I would the `<body>` tag. It encapsulates all content and so is not something that needs to be repeated in individual template files. This recycling and repeating of code seems to be something that is missed on all of the tutorials online, where all of the code is recycled.  Your solution was the only one to address this but it would not work on my machine, but at least it inspired me to come up with another solution.

Thank you for sharing. :+1: 

/DM
