//You can delete a table, or collection as it is called in MongoDB, by using the drop() method.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").drop((err, delOK) => {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});