const express = require('express');
const app = express();
const session = require('express-session');
const configRoutes = require('./routes');
const exphbs = require('express-handlebars');
const static = express.static(__dirname + '/public');
app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}));

app.use('/private', (req, res, next) => {
  if (!req.session.user) {
    return res.status(403).render('components/nologgedin', {});
  } else {
    next();
  }
});
app.use('/', (req, res, next) => {
  let current = "["+ new Date().toUTCString() + "]: ";
  let method = req.method;
  let route = req.originalUrl;
  let isauth = (req.session.user) ? "(Authenticated User)" : "(Non-Authenticated User)";
  console.log(current + method + " " + route + " " + isauth);
  next();
});

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});