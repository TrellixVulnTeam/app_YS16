var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^O/ };
    dbo.collection("customers").deleteMany(myquery, (err, obj) => {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});