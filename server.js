'use strict';

// Initialize your project using NPM to create and populate a package.json file

// Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
// There is also a package here called body-parser, which is required in for use in a new route.
// Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3003;

// Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('/index', (request, response) => response.sendFile('index.html', {
  root: './public'
}));

app.listen(PORT, () => {
  // Log to the console a message that lets you know which port your server has started on
  console.log(`The server is running on port: "${PORT}"`)
});
