"use strict";
let dbCalls = require("../db-calls.js");
let styler = require("./painter.js");

function attractionLister(result) {
  let listDiv = document.querySelector("#attractionList")
  result.forEach((e => {


    dbCalls.fetchAreas()
      .then((areas) => {
        for (let i = 0; i < areas.length; i++) {
          const element = areas[i];

          switch (e.area_id) {
            case 1:
              styler(element.id, e.area_id, element, e)
              break;
            case 2:
              styler(element.id, e.area_id, element, e)
              break;
            case 3:
              styler(element.id, e.area_id, element, e)
              break;
            case 4:
              styler(element.id, e.area_id, element, e)
              break;
            case 5:
              styler(element.id, e.area_id, element, e)
              break;
            case 6:
              styler(element.id, e.area_id, element, e)
              break;
            case 7:
              styler(element.id, e.area_id, element, e)
              break;
          }
        }

      })
  }))
}




module.exports = attractionLister

/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
*/