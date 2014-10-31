# blog-engine

A super tiny blogging engine in Node.js. Easy to use and setup. Kind of like
jekyll, except with less templating magic, and more Markdown. Also, it generates
the post pages live, not statically!

## Running

tl;dr: 

    npm install
    gem install sass
    make index.css
    make serve

## Files

Here I'll try to give an overview of all the files you can modify to configure
the blog. 

### server.js

The core of the server - a Node.js server, which compiles and serves Markdown
files via the template engine and a Markdown compiler called marked.

### blog-post.jade

A [Jade][jade] template for a single blog post. 

[jade]: http://jade-lang.com

### listing.jade

A [Jade][jade] template for the index page - a list of existing posts.

### index.scss

Contains the entire stylesheet, in convenient [SASS][sass] format. 
There's a rubygem to convert it to normal CSS. 
Install it via `gem install sass`.

[sass]: http://sass-lang.com

### footer.html

Contains the text in the footer. Any HTML works here - it's your blog, you know!

### posts/* 

All files under the posts/ directory, regardless of their actual extension, are
parsed as Markdown and sent to the client after trying to convert Markdown to 
HTML, and after adding the HTML into a template file.

### static/*

All files under the static/ directory are available in the template, as well as 
the blog posts, under /. This is just to serve static files, say, stylesheets or 
images or favicons or whatever.

## License

MIT license. See the file LICENSE for the entire text.
