let db = require("./db-calls.js");
let listParkAreaInfo = require("./parkAreaList");
let areaRep = require("./parkAreaRep");

let parkArea = {};
db.fetchAreas()
   .then((result) => {
       parkArea = result;
       let areaContent = areaRep(parkArea);
    listParkAreaInfo(areaContent);
});