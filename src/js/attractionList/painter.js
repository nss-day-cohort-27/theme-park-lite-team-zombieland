function painter(a, b, element, e) {
    if (a === b) {
      let listDiv = document.querySelector("#attractionList")
      let cardDiv = document.createElement("div")
      cardDiv.classList = "card"
      cardDiv.setAttribute("style", `width:20%; background-color:#${element.colorTheme};`)
      let listTop = document.createElement("h2")
      listTop.classList = "card-title"
      listTop.textContent = `${e.name}:`
      let listItem = document.createElement("p")
      listItem.style = "font-size: 12px"
      listItem.classList = "card-text"
      listItem.textContent = `${e.description}`
      listTop.appendChild(listItem)
      cardDiv.appendChild(listTop)
      listDiv.appendChild(cardDiv)
    }
  }
  module.exports = painter