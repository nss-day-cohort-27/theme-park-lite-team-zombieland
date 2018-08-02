"use strict";

function createParkAreaInfo(areaTypes) {
    let areaRep = "";
    areaTypes.forEach(function (element) {
        areaRep += `<h2><font color=${element.colorTheme}>Area #${element.id}</font></h2>
                     <h2><font color=${element.colorTheme}>${element.name}</font></h2>
                     <h2><font color=${element.colorTheme}>${element.description}</font></h2>`;
    })
    return areaRep;
}
module.exports = createParkAreaInfo;