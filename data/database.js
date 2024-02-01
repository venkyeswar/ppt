const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let database;
async function initDb(){
    const client=await MongoClient.connect('mongodb+srv://venkyeswar:7112001746@cluster0.qpo13la.mongodb.net/?retryWrites=true&w=majority');
    database=client.db('blog');
}

function getDb(){
    if(!database){
        throw new Error('database not connected');
    }
    return database;
}

module.exports={
    initDb:initDb,
    getDb:getDb,
}