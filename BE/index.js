const express = require('express')
const app = express()
const cors = require('cors');
const bodyparser = require('body-parser');
const { dbConnectUser } = require('./mongodb')
const port = 3000
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(bodyparser.json());

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
//authAPI
app.post('/auth', (request, res) => {
    let email = request.body.email;
    let password = request.body.password;
    const auth = async () => {
        let userData = await dbConnectUser();
        userData = await userData.find({ "email": `${email}` }).toArray();
        userData = JSON.stringify(userData)
        const token = jwt.sign({ user_id:  email },process.env.TOKEN_KEY,{expiresIn: "2h",});
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


