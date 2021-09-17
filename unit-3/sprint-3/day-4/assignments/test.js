/*
[{"first_name":"Hy","last_name":"Knibb","email":"hknibb0@mapquest.com","gender":"Bigender","ip_address":"114.26.63.50","age":1},
[{"first_name":"Sibylla","last_name":"Izac","email":"sizac1@seattletimes.com","gender":"Genderfluid","ip_address":"157.139.215.64","age":2},
{"first_name":"Dion","last_name":"Johansson","email":"djohansson2@flickr.com","gender":"Genderqueer","ip_address":"102.17.53.0","age":3},
{"first_name":"Giacopo","last_name":"Duxfield","email":"gduxfield3@reverbnation.com","gender":"Genderqueer","ip_address":"252.16.29.216","age":4},
{"first_name":"Dinny","last_name":"Enderlein","email":"denderlein4@feedburner.com","gender":"Polygender","ip_address":"50.74.86.193","age":5},
{"first_name":"Annelise","last_name":"Scoffham","email":"ascoffham5@buzzfeed.com","gender":"Polygender","ip_address":"158.90.212.234","age":6},
{"first_name":"Thornton","last_name":"Tureville","email":"ttureville6@zimbio.com","gender":"Female","ip_address":"147.67.178.163","age":7},
{"first_name":"Ruperta","last_name":"Waples","email":"rwaples7@nymag.com","gender":"Female","ip_address":"141.253.72.124","age":8},
{"first_name":"Lyon","last_name":"Gelling","email":"lgelling8@uiuc.edu","gender":"Polygender","ip_address":"227.233.117.222","age":9},
{"first_name":"Ronald","last_name":"Welsby","email":"rwelsby9@senate.gov","gender":"Non-binary","ip_address":"125.158.170.109","age":10}]


> show dbs
admin       0.000GB
assignment  0.000GB
config      0.000GB
local       0.000GB
> use assignment
switched to db assignment
> db.dropDatabase()
{ "ok" : 1 }
> use asssignment
switched to db asssignment
> db.user.insert({"first_name":"Hy","last_name":"Knibb","email":"hknibb0@mapquest.com","gender":"Bigender","ip_address":"114.26.63.50","age":1})
WriteResult({ "nInserted" : 1 })
> show collections
user
> db.user.insertMany([{"first_name":"Sibylla","last_name":"Izac","email":"sizac1@seattletimes.com","gender":"Genderfluid","ip_address":"157.139.215.64","age":2},
... {"first_name":"Dion","last_name":"Johansson","email":"djohansson2@flickr.com","gender":"Genderqueer","ip_address":"102.17.53.0","age":3},
... {"first_name":"Giacopo","last_name":"Duxfield","email":"gduxfield3@reverbnation.com","gender":"Genderqueer","ip_address":"252.16.29.216","age":4},
... {"first_name":"Dinny","last_name":"Enderlein","email":"denderlein4@feedburner.com","gender":"Polygender","ip_address":"50.74.86.193","age":5},
... {"first_name":"Annelise","last_name":"Scoffham","email":"ascoffham5@buzzfeed.com","gender":"Polygender","ip_address":"158.90.212.234","age":6},
... {"first_name":"Thornton","last_name":"Tureville","email":"ttureville6@zimbio.com","gender":"Female","ip_address":"147.67.178.163","age":7},
... {"first_name":"Ruperta","last_name":"Waples","email":"rwaples7@nymag.com","gender":"Female","ip_address":"141.253.72.124","age":8},
... {"first_name":"Lyon","last_name":"Gelling","email":"lgelling8@uiuc.edu","gender":"Polygender","ip_address":"227.233.117.222","age":9},
... {"first_name":"Ronald","last_name":"Welsby","email":"rwelsby9@senate.gov","gender":"Non-binary","ip_address":"125.158.170.109","age":10}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("61443f91ee783f28b304174b"),
                ObjectId("61443f91ee783f28b304174c"),
                ObjectId("61443f91ee783f28b304174d"),
                ObjectId("61443f91ee783f28b304174e"),
                ObjectId("61443f91ee783f28b304174f"),
                ObjectId("61443f91ee783f28b3041750"),
                ObjectId("61443f91ee783f28b3041751"),
                ObjectId("61443f91ee783f28b3041752"),
                ObjectId("61443f91ee783f28b3041753")
        ]
}
> db.user.find({"first_name":"Lyon"}).pretty()
{
        "_id" : ObjectId("61443f91ee783f28b3041752"),
        "first_name" : "Lyon",
        "last_name" : "Gelling",
        "email" : "lgelling8@uiuc.edu",
        "gender" : "Polygender",
        "ip_address" : "227.233.117.222",
        "age" : 9
}
> db.user.findOne({"gender":"Female"})
{
        "_id" : ObjectId("61443f91ee783f28b3041750"),
        "first_name" : "Thornton",
        "last_name" : "Tureville",
        "email" : "ttureville6@zimbio.com",
        "gender" : "Female",
        "ip_address" : "147.67.178.163",
        "age" : 7
}
> db.user.update({"first_name":"Ronald"},{$set:{"first_name":"Ronaldo"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.user.updateMany({"first_name":"Ronaldo"},{$set:{"gender":"Male"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.user.remove({"age":10},true)
WriteResult({ "nRemoved" : 1 })
> db.user.deleteOne({"ip_address":"114.26.63.50"})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.user.deleteMany({"age":9})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.dropDatabase()
{ "ok" : 1 }
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
>
*/