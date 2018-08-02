"use strict"
// Display a complete list of attractions with descriptions
let dbCalls = require("../db-calls.js");
let typeLister = require("./typeListBuilder.js")
let makeCapital = require("./makeCapital.js")

dbCalls.fetchTypes()
    .then((result) => {
        let makeCap = makeCapital(result)
        typeLister(makeCap)
        //console.log(result)
    })
