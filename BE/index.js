const express = require('express')
const app = express()
const cors = require('cors');
const bodyparser = require('body-parser');
const { dbConnectUser } = require('./mongodb')
const port = 4000
const jwt = require('jsonwebtoken')
const redis = require('redis');
const client = redis.createClient({
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});
const bcrypt = require("bcrypt")
const saltRounds = 10

client.on('connect', function () {
    console.log('Redis Connected!');
});

app.use(cors());
app.use(bodyparser.json());

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})


//redis clien

app.get("/", (req, res)=>{
    res.send("Hello backend....")
})
//authAPI
app.post('/auth', (request, res) => {
    console.log("Auth API Called...........")
    let email = request.body.email;
    let password = request.body.password;
    const auth = async () => {
        let userData = await dbConnectUser();
        userData = await userData.find({ "email": `${email}` }).toArray();
        userData = JSON.stringify(userData)
        const token = jwt.sign({ user_id: email }, process.env.TOKEN_KEY, { expiresIn: "20s", });
        if (userData === "[]") {
            res.send(false)
        }
        else {
            res.send({
                data: true,
                accessToken: token,
                message: userData
            })
        }
    }
    auth()
});
//create user data in db 
app.post("/createUser", (req, res) => {
    console.log("Crate User API Called...........")
    console.log("Post api to create user");
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let result = {
        "name": name,
        "email": email,
        "password": password,
    }
    console.log(result)
    const creatingUser = async () => {
        let userData = await dbConnectUser();
        userData = await userData.insertOne(result)
        res.send(true);
    }
    creatingUser();
})

app.get("/verify", async (req, res) => {
    const headers = req.headers;
    // console.log(headers)
    try {
        // console.info(JSON.stringify(headers));
        const data = jwt.verify(headers.accessToken, process.env.TOKEN_KEY, (error, payload) => {
            if (error) throw ("invalid")
            return payload
        })
        if (data.error) throw (data.error)
        res.status(200).send({ data });
    } catch (error) {
        return res.send(400);
        // console.log("error")
    }
})

app.post("/redis", (req, res) => {
    let key = req.body.keyRedis;
    console.log("Redis API callleld.............................")
    client.get(key, function (err, result) {
        res.send(JSON.stringify(result)); // ReactJS
    });
})

app.post("/redisSet", (req, res) => {
    let key = req.body.keyRedis;
    let value = req.body.valueRedis;
    // res.send(key)
    console.log("Redis API set callleld.............................",)
    client.set(key, value, function (err, result) {
        res.send(`Succesfuly setted in the Key ${result}`);
    });
})

app.post("/redisAdd", (req, res) => {
    let key = req.body.keyRedis;
    let value = req.body.valueRedis;
    // res.send(key)
    console.log("Redis API ADD callleld",)
    // client.set(key, value, function (err, result) {
    //     res.send(`Succesfuly setted in the Key ${result}`); 
    // });
})

app.delete("/redisDelete", (req, res) => {
    let key = req.body.keyRedis;
    console.log("Redis Delete api called")
    client.del(key, function(err, response) {
        if (response == 1) {
           res.send("Deleted Successfully!")
        } else{
            res.send("Cannot delete")
        }
     })
    
})