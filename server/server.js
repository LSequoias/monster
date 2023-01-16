const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const db = require('./config/dsn');

mongoose.set('strictQuery', true);
mongoose.connect(db.url, {
    useNewUrlParser: true, useUnifiedTopology: true
});


const connexion = mongoose.connection;

connexion.on("erreur", console.error.bind(console, "Erreur de connection via mongo"));

const app = express();
const optCors = {
    //origin: `http://localhost:${SERVER_PORT}`
}

/**
 * configuration express, parseur json
 */
app
    .use(express(cors))
    .use(express.json())
    .use(express.urlencoded({
        extended: true,
    }));

/**
 * config routing
 */

const router = express.Router();

// routes
/*//router.get('/home' /*monster.show);
/*router.get('/auth/login' /*monster.createdChar);

/*mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connectée a la base');
    })
    .catch(err => {
        console.error("connexion échouer : ", err);
        if(process) {
            process.exit();
        } else {
            return false;
        }
        
    })*/

app.get('/', (_, res) =>{
    res.send("c'est good")
});
app.listen(process.env.SERVER_PORT, () => {
    console.log(`%c port utilisée => ${process.env.SERVER_PORT}`, 'color:forestgreen;')
});
