const express = require('express');
const path = require('path');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');

const noCache = process.env.NOCACHE;
const port = process.env.PORT;
const routes = require('./routes')

app = express();
app.use(volleyball);
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: noCache})

app.use('/', routes);



app.listen(port, () => console.log(chalk.blue(`*** Listening intently on port ${port} ***`)));

