const dataset=[
    {
        name:"abc",
        score:95,
        rollno:01
    

    },
    {
        name:"jigar",
        score:90,
        rollno:02
    

    },
    {
        name:"dev",
        score:85,
        rollno:03
    

    },
    {
        name:"xyz",
        score:60,
        rollno:04
    

    },
    

]

//combination of map and filter
let gethighestmarksname=dataset.filter(function (x)
{
    return x.score>=90
}).map(function(x){
    return x.name
})
console.log(gethighestmarksname)
let arr = [];
var b;
let gettoalofstudent=dataset.reduce(function(acc,current){
   acc= acc+current.score
//    b=acc

    return acc

},0)
let c=Array.of(gettoalofstudent)
// arr.push(b);

console.log(c);
//console.log(gettoalofstudent)
// var store = [0, 1, 2, 3, 4];

// var stored = store.reduce(function(pV, cV){
//   console.log("pv: ", pV);
//   pV.push(cV);
//   return pV; // *********  Important ******
// }, []);
// console.log(stored)