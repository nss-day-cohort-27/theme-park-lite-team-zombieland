"use strict";

function attractionLister (result){
    result.forEach((e => {
        const listDiv = document.querySelector("#attractionList")
        let cardDiv = document.createElement("div")
        cardDiv.classList = "card"
        let listTop = document.createElement("h2")
        listTop.textContent = `${e.name}:`
        let listItem = document.createElement("h3")
        listItem.textContent = `${e.description}`
        listTop.appendChild(listItem)
        cardDiv.appendChild(listTop)
        listDiv.appendChild(cardDiv)
       
    }
    )
    )
}

module.exports = attractionLister

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}