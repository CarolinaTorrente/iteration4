const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('form');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/index', (req, res) => {
  res.render('index'); //
});

app.get('/screen2', (req, res) => {
  res.render('screen2'); 
});

app.get('/index2', (req, res) => {
  res.render('index2');
});

app.get('/index3', (req, res) => {
  res.render('index3');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
