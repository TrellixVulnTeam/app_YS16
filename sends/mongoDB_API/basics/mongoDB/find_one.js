var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});