const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const sources = require('./routes/sources');
const product = require('./routes/product');
const values = require('./util/values');
const auth = require('./routes/auth');
const scraper = require('./util/scraper');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(values.mongoDbUri,{useNewUrlParser: true})
    .then(result => {
        if(result){

            console.log("Database connected");
            console.log("server started ");
            app.listen(5000);
        }
        else {
            console.log("failed to connect db ");
            console.log(result);
        }

    })
    .catch(err => {
        console.log(err);
});

app.use(auth);
app.use(sources);
app.use(product);

scraper.amzn();


module.exports = app;
