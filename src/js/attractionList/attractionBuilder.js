"use strict";

function attractionLister (result){
    result.forEach((e => {
        const listDiv = document.querySelector("#attractionList")
        let listTop = document.createElement("ul")
        listTop.textContent = `${e.name}:`
        let listItem = document.createElement("li")
        listItem.textContent = `${e.description}`
        listTop.appendChild(listItem)
        listDiv.appendChild(listTop)
    }
    )
    )
}

module.exports = attractionLister

