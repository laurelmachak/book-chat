var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/book-chat');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));


// add a Model:

var Chat = mongoose.model('Chat', {
  message: String
});

/*
var chats = [
  { message: "There are no facts, only interpretations."},
  { message: "To live is to suffer, to survive is to find some meaning in the suffering."}
];
*/

/*
app.get('/', function (req, res) {
  res.render('home', {msg: 'welcome to the book chat'});
});
*/

// INDEX
app.get('/', function (req, res) {
  Chat.find(function(err, chats){
    res.render('chat-index', {data: chats});
  });
});

// NEW
app.get('/chats/new', function (req, res){
  res.render('chats-new', {});
});

app.listen(3000, function () {
  console.log('book chat now listening on port 3000!');
});
