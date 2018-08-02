"use strict";

function createParkAreaInfo(areaTypes) {
    return `<h2><font color=${areaTypes[0].colorTheme}>Area #${areaTypes[0].id}</font></h2>
            <h2><font color=${areaTypes[0].colorTheme}>${areaTypes[0].name}</font></h2>
            <h2><font color=${areaTypes[0].colorTheme}>${areaTypes[0].description}</font></h2>`
}


module.exports = createParkAreaInfo;