//sort data entries from database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");
	
	var queryData = {genre:"Sports"};
	var newData = {genre:"Car Soccer"};
	var update = {$set:newData}

	 dbObj.collection("games" ).updateOne(queryData, update, function(err,res)
    {
        if(e)throw e;
        console.log("document updated");
        db.close();
    });
	
})