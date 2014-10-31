var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var fs = require('fs');
var marked = require('marked');

marked.setOptions({
  gfm: true,
  tables: true
});

var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'jade');
app.set('views', '.');

app.get('/', function(req, res) {
  fs.readdir(path.join(__dirname, 'posts'), function(err, files) {
    
    if (err)
      throw err;
    
    if (!files)
      throw new Error('Didn\'t find any posts in ./posts');

    return res.render('listing', {links: files});
  });
});


// actual meat of the app
app.get('/post/:name', function(req, res) {
  var filename = path.join(__dirname, 'posts', req.params.name);

  fs.readFile(filename, {encoding: 'utf8'},
    function(err, data) {
      
      if (err) 
        throw err;
      
      if (!data)
        throw new Error('File op succeeded, but no data passed...?');

      return res.render('blog-post', {
        md: marked(data),
      });

    }
  );
});

module.exports = app;
