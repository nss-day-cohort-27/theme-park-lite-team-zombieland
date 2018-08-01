"use strict";

function createParkInfo(parkInfo) {
    return `<h1>${parkInfo[0].name}</h1>
            <h2>${parkInfo[0].location}</h2>
            <h2>${parkInfo[0].description}</h2>
            <h2>Opens at: ${parkInfo[0].operating_hours[0].opening}am</h2>
            <h2>Closes at: ${parkInfo[0].operating_hours[0].closing}pm</h2>`
}


module.exports = createParkInfo;