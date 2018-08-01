"use strict";
// Display a complete list of attractions with descriptions
let dbCalls = require("../db-calls.js");
let attractionLister = require("./attractionBuilder.js")


dbCalls.fetchAttractions()
    .then((result) => {
        attractionLister(result)
    })





