const express = require('express');
const app = express();


const routes = require('./routes/index');
app.use('/apis',routes);

app.listen(3000, ()=> {console.log('arranca en el puerto 3000')})