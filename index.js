const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", '*');
})
app.listen(9000, () => console.log(`proxy running on port: 9000`));