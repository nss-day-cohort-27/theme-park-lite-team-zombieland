"use strict";
//let capital = require("./makeCapital.js")

function typeLister (result) {
result.forEach(function(element) {
    //console.log(element)
    const getDiv = document.getElementById("attractionType");
    const addHeading = document.createElement("h3");
    addHeading.textContent = element;
    getDiv.appendChild(addHeading);
    
})
}



module.exports = typeLister; 

//

