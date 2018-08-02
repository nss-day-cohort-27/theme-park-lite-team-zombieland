"use strict";

function createParkAreaInfo(areaTypes) {
    let areaRep = "";
    areaTypes.forEach(function (element) {
        areaRep += `<div class="row">
                    <h2 class="card-text"><font color=${element.colorTheme}>Area #${element.id}</font></h2>
                     <h2 class="card-text"><font color=${element.colorTheme}>: ${element.name}</font></h2>
                     <h2 class="card-text"><font color=${element.colorTheme}>${element.description}</font></h2>
                     </div>`;
    })
    return areaRep;
}
module.exports = createParkAreaInfo;