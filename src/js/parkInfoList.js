"use strict";
let createParkInfo = require("./parkInfoRep");

let outputEl = document.querySelector("#parkInfo");

function listParkInfo(info){
    console.log("list park info", info);
    outputEl.innerHTML += createParkInfo(info);
}

module.exports = listParkInfo;

