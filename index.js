const crypto = require("crypto")

function getRandomElement() {
     const elements = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "0", "_", "-"];
     const number = crypto.randomInt(65) //generates a random number from 0 - 64
   
     return elements[number]
}

function genId(length) {
    if(!length) {
        length = 11
    }

    if(isNaN(length)) {
        throw new TypeError("Length must be a number, recieved NaN")
    }

    if(length < 1) {
        throw new RangeError("Length must be a number equal or greater than 1")
    }
    let id = `${getRandomElement()}`
    for (i = 1; i < length; i++) { 
        id += `${getRandomElement()}` 
    }; 

    return id
}

module.exports.genId = genId