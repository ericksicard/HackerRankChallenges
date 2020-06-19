/*
https://www.hackerrank.com/
Practice > Tutorials > 30 Days of Code > Day 8: Dictionaries and Maps
*/

function processData(input) {
    let arr = input.split("\n")

    let newMap = new Map()
    let names = arr
        .filter( (elm, idx, arr) => {
          if ( idx > 0 && idx <= arr[0] ) {
            let keyValue = elm.split(' ')
            newMap.set( keyValue[0], keyValue[1])
          } 
          if ( idx > arr[0] ) return elm
        })
        .map( name => {
          let result = newMap.get(name)
          if (result) console.log ( `${name}=${result}`)
          else console.log (`Not found`)
        })
} 

