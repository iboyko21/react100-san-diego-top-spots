const express = require('express');
const morgan = require('morgan');
// const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

// create a '/getdata' route and use axios call from the server to get data.
// then need to update ComponentWillMount() in app.jsx
// app.get('/getdata', (req, res) => {
//     axios
//         .get('https://www.cccareerssdts.demo.coolify.io')
//         .then(response => res.send(response.data))
// })
    
module.exports = app;
