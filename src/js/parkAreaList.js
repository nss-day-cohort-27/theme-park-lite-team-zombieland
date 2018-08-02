"use strict";
let createParkAreaInfo = require("./parkAreaRep");

let outputEl = document.querySelector("#parkAreas");

function listAreaInfo(info){
    console.log("list area info", info);
    outputEl.innerHTML += createParkAreaInfo(info);
}

module.exports = listAreaInfo;