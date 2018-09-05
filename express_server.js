var express = require("express");
const bodyParser = require("body-parser");

var app = express();
var PORT = 8080; // default port 8080
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com",
  "whatever":"https://www.starbucks.ca/"
};

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.post("/urls", (req, res) => {
  console.log(req.body);  // debug statement to see POST parameters
  res.send("Ok");         // Respond with 'Ok' (we will replace this)
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls", (req, res) => {
    //let templateVars = { urls: urlDatabase };
    let templateVars = {greeting :"Hello World"}
    //res.render("urls_index", templateVars);
    //res.json(urlDatabase);
    res.render("urls_index", templateVars)
});

app.get("/urls/:id", (req, res) => {
   console.log(req) ; 
  let templateVars = { shortURL: req.params.id, longURL:urlDatabase[req.params.id] };
    res.render("urls_show", templateVars);
});
app.get("/u/:id", (req, res) => {
  console.log(req) ; 
 let longURL=urlDatabase[req.params.id]
   res.redirect(longURL);
});

app.get("/hello", (req, res) => {
    //let templateVars = {greeting :"Hello World"}
    //res.render("urls_index", templateVars);
    res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

function generateRandomString() {
  return Math.random().toString(36).replace('0.','').substr(6);
}