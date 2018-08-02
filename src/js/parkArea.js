let db = require("./db-calls.js");
let listParkAreaInfo = require("./parkAreaList");


db.fetchAreas()
   .then((result) => {
    listParkAreaInfo(result);
});