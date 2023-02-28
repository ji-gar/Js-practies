const flatarray=["hello","word",["hello","hello word",["gkre","how",["hello"]]]]
let array=flatarray.flat(2)
console.log(array)
const textarray=["how are you","programer developer","Javascript"]
//for below i do two step for separate the array
// let mapresult=textarray.map(function(x){
//   return x.split(" ")
// })
// console.log(mapresult.flat())



let flatmapresult=textarray.flatMap(function(x){
    return x.split()
})
console.log(flatmapresult)

