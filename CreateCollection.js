//creates a collection database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");

    dbObj.createCollection("games", (e,res) =>
    {
        if(e)throw e;
        console.log("collection created");
        db.close();
    });
    
})