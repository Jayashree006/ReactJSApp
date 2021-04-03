   // server.js
//
const express = require('express');
const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.get('/', (req, res) => {
  res.send('flowers smell nice');
});
app.get('/flower', (req, res) => {
  res.json([{
  name:'Jasmine',
  colour: 'White',
 },
 {
  name:'Dandelion',
  colour: 'Blue-ish'
 },
 {
 name:'Sunflower',
 colour: 'Yellow',
 }]);
 });

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});