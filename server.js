const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const sessionStorage = require('sessionstorage-for-nodejs');



app.use(express.static(path.join('public')));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true})); 



app.get('/', (req, res) => { 
    res.sendFile('index.html', {root : 'public'});
});

app.get('/activelogin', (req, res) => { 
    res.sendFile('activelogin.html', {root : 'public'});
});

app.get('/description', (req, res) => { 
    res.sendFile('description.html', {root : 'public'});
});

app.get('/formlook', (req, res) => { 
    res.sendFile('formlook.html', {root : 'public'});
});

app.get('/kosarica', (req, res) => { 
    res.sendFile('kosarica.html', {root : 'public'});
});

app.get('/login', (req, res) => { 
    res.sendFile('login.html', {root : 'public'});
});
app.get('/loginafter', (req, res) => { 
    res.sendFile('loginafter.html', {root : 'public'});
});
app.get('/pictures', (req, res) => { 
    res.sendFile('pictures.html', {root : 'public'});
});
app.get('/price', (req, res) => { 
    res.sendFile('price.html', {root : 'public'});
});
app.get('/products', (req, res) => { 
    res.sendFile('products.html', {root : 'public'});
});
app.get('/shoppcart', (req, res) => { 
    res.sendFile('shoppcart.html', {root : 'public'});
});
app.get('/upcomingtech', (req, res) => { 
    res.sendFile('upcomingtech.html', {root : 'public'});
});



app.post("/login", (req, res) => {
    sessionStorage.setItem("authenticated", "true");
    let rawdata = fs.readFileSync("accounts.json");
    let data = JSON.parse(rawdata);
    for(const user of data.accounts) {
        if(req.body.uporabnisko_ime === user.userName) {
            if(req.body.geslo === user.password) {
                res.status(200).send('Login succesful');
                console.log('Succesfully logged in');
                sessionStorage.setItem('user', user.userName);
            } else {
                res.status(400).send('Login failed');
            }
            break;
        }
    } 
});

app.post("/checkout", (req, res) => { 
    if (sessionStorage.getItem("authenticated") !== "true"){
        res.status(403).send("Forbidden");
    } else {
        let rawdata = fs.readFileSync("orders.json");
        let data = JSON.parse(rawdata);
        let order = {
            'id' :sessionStorage.getItem("user"),
            "products" : req.body.products,
            "timestamp" : req.body.timestamp,
            "price" : req.body.price
        }
        data.orders.push(order);
        fs.writeFileSync("orders.json", JSON.stringify(data,null, "\t"))
    }
});


app.get("/prdoucts", (req, res) => {
    res.sendFile('json.json', {
        root: 'public'
    });
});

app.listen(3000);
