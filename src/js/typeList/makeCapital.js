"use strict"
let result = require("./typeListBuilder")

function toTitleCase (result) {
    console.log(result);
let newMapArray = result.map((x) => {
    console.log(x)
        return x.name.charAt(0).toUpperCase() + x.name.slice(1);
        
    
    })
    console.log(newMapArray);
    return newMapArray;
    

/*for(let i = 0; i < result.length; i++) {
    console.log(result)
        result[i] = result[i].charAt(0).toUpperCase();
        console.log(result)
    }    */   
};
/*function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
//capitalizeFirstLetter(name)  */


module.exports = toTitleCase;
