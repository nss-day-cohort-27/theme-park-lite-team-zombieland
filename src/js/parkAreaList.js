"use strict";
let createParkAreaInfo = require("./parkAreaRep");

let outputEl = document.querySelector("#parkAreas");

function listAreaInfo(info) {
    outputEl.innerHTML += info;
}

module.exports = listAreaInfo;