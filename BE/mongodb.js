const {MongoClient} = require('mongodb');
const dotenv = require('dotenv')
dotenv.config();
// const mongoose = require('mongoose');

//mongoDB
const url = process.env.MONGOURL
const client = new MongoClient(url);

async function dbConnectUser(){
    let result = await client.connect();
    let db = result.db('RentEasy')
    return db.collection('users')   
}
module.exports = {dbConnectUser}

