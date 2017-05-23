const express = require('express');
const hbs = require('hbs');
const applicationPort = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/static'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    var templateValues = {
        pageTitle: 'Node Express Web Server',
        currentTimestamp: new Date().toString()
    };
    res.render('index.hbs', templateValues);
});

app.listen(applicationPort, () => {
    console.log(`Running Node Express Web Server on port ${applicationPort}.`);
});
