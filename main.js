const express = require('express')

const port = process.env.port || 3000;

const app = express();

const cors = require('cors');

app.set('port',port);

const homeRoute = require('./src/routes/home')
const gameRoute = require('./src/routes/game')
const studioRoute = require('./src/routes/studio');

app.use(homeRoute)
app.use(gameRoute)
app.use(studioRoute)
app.use(cors())


app.listen(app.get('port'),(error)=>{
    if (error){
        console.log('There has been an error '+error)
    }else{
        console.log('Server on port: '+port);
    }
})

