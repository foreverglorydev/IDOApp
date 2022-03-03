const express = require("express");
const path = __dirname + '/build/';

const app = express();

app.use(express.static(path));
app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});