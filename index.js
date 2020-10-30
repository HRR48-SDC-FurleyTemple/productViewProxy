const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const newrelic = require('newrelic');


// app.use('/products', express.static('./client/dist'));
app.use('/:id', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/productView/products/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params;
  console.log(id)
  axios.get(`http://localhost:3050/api/productView/products/${id}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log('this is error:', err)
      res.send(err);
    })
})

app.post('/api/productView/products/:id', (req, res) => {
  const { id } = req.params;
  axios.post(`http://localhost:3050/api/productView/products/${id}`, req.body)
    .then((results) => {
      res.send();
    })
    .catch((err) => {
      console.log('this is error:', err)
      res.send(err);
    })
})

app.get('/products/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})


app.listen(9000, () => console.log(`proxy running on port: 9000`));
