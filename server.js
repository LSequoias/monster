const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({

}));

app
    .use(express.json())
    .use(express.urlencoded({
        extended: false,
    }));

app
    .use((req, _, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    });

const monster = [
    {role: 'Sorcier', surname: 'Gandalf'},
    {role: 'Guerrier', surname: 'ZZZ'},
    {role: 'Alchimiste', surname: 'RRRR'},
    {role: 'Espions', surname: 'TTTT'},
    {role: 'Enchanteur', surname: 'UUU'},



]



