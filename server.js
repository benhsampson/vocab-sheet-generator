const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  db.collection('cards').find().toArray((error, results) => {
    console.log(error, results);
    res.send(results);
  });
});

app.post('/api/insert-card', (req, res) => {
  db.collection('cards').insertOne(req.body, (error, result) => {
    if (error) return console.error(error);

    console.log('Saved enter database manually');
    console.log(result);

    // res.redirect('/');
    res.send(result);
  });
});

app.post('/api/remove-card', (req, res) => {
  db.collection('cards').removeOne(req.body, (error, result) => {
    if (error) return console.error(error);

    console.log('Saved enter database manually');
    console.log(result);

    // res.redirect('/');
    res.send(result);
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

let db;

MongoClient.connect(
  'mongodb://bensampsondev:Liuhao11m@ds119273.mlab.com:19273/vocab-sheets',
  (error, client) => {
  if (error) return console.error(error);

  db = client.db('vocab-sheets');

  app.listen(port, () => console.log('Listening on port:', port));
});
