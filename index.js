var express = require('express');
var path = require('path');

var port = 2980;

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})