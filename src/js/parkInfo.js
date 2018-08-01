let db = require("./db-calls.js");
let listParkInfo = require("./parkInfoList");


db.fetchParkInfo()
   .then((result) => {
    listParkInfo(result);
});
