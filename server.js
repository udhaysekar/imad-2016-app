var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    
    articleone  = {
     title: 'article one',
     heading: 'article 1',
     date 'sep 5 ',
     content:  `
       <p> contentent.
            </p >
            <p>
                article
            </p >
            <p>
                i done well.
            </p> '
            
 },
      
 articletwo =   {},
 articlethreee = {},
};



function createtemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate = '
<html>
    <head>
        <title>
            ${title}
        </title>
       <meta name="viewport" content="width=device=width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h2> ${heading} </h2>
        <div>
            ${date}
        </div>
        <div>
          ${content}
        </div>
        </div>
    </body>
</html>


';
return htmltemplate;
}

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html')); 
});

app.get("/articleone", function (req, res){
   res.send(createtemplate(articleone));
});

app.get("/articletwo", function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get("/articlethree", function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});