const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const sourcesRoutes = require('./routes/sources');
const productRoute = require('./routes/product');
const indexRouter = require('./routes/index');
const authRoutes = require('./routes/auth');
const body_parser = require('body-parser');
// const usersRouter = require('./routes/users');
const values = require('./util/values');
// const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
/*
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');

    res.setHeader('Access-Control-Allow-Methods','get,post,put,patch,delete');

    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next()
});*/
app.use(logger('dev'));
app.use(express.json());
app.use(body_parser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session store
// const store = new MongoDBStore({
//     uri: values.mongoDbUri,
//     collection: 'sessions'
// });

mongoose.connect(values.mongoDbUri)
    .then(result => {
        if(result){

            console.log("Database connected");
            console.log("server started ");
            app.listen(3000);
        }
        else {
            console.log("failed to connect db ");
            console.log(result);
        }

    })
    .catch(err => {
        console.log(err);
    });


// sessions
// app.use(
//     session({
//         secret: 'my secret',
//         resave: false,
//         saveUninitialized: false,
//         store: store
//     })
// );




app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use(authRoutes);
app.use(productRoute);
app.use(sourcesRoutes);
module.exports = app;
