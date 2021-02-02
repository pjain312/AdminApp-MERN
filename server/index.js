const mongoose = require('mongoose');
var express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const passportJwt = require('./config/passport');

app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());

const facultyRoutes = require('./routes/faculty');
app.use(cors());
app.use(bodyParser.json());

app.use('/' ,facultyRoutes);
app.listen(port, function(err)
{
    if(err)
    {
        console.log('error in running the server', err);
    }

    console.log('Server is running on port',port);
});