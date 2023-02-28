let stringdataarray=['abc',1,"pqr","mnq"]//it give the length of array
console.log("lenght function()===== "+stringdataarray.length)
console.log("Indexof function " +stringdataarray.indexOf(5))
console.log("join function () " +stringdataarray.join("+"))
let joinedarray=stringdataarray.join("+")
console.log(typeof joinedarray)
let numberarray=[1,5,8,9]
let mixedvaluearray=[true,"false","xyz",true,{name:"djndcd"},8,6,4]
console.log(mixedvaluearray.sort())
console.log(numberarray.sort((a,b)=>{
   console.log(a+""+b)
   return a-b
}))
let array=[2,1,2,4,5,8]
// console.log(array.unshift(33,58,59))
//console.log(array.unshift())
console.log("shift  "+array.shift())
// console.log("shift  "+array.shift())
console.log("pop  "+array.pop())
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1,-2,"hello","mnq")
console.log(fruits)
//Splice function array it modify in exting array  nagative value also supplied
let arr = ["Danny", "Joe"]
arr.splice(1, 0, "Alice", "Amy")
console.log(arr)
























// var data=["abc","xyz",true,"mnqddddd",]
// var intmissing=[4,7,8,9,6,3]
// console.log("Accessding order"+data.sort())


// for(var i=0;i<data.length;i++)
// {
//     console.log(data[i])
// }
// console.log(data.filter(checklenght))
// function checklenght(name)
// {
//    return name.length>=3
// }
// // var a='20'
// var b =108
// var c=98
// var d="xyz"
// console.log(b+d+c)
// let a="20"
// var b=10
// var c=20
// if(a>10)
// {
//     a=a/2;
// }
// console.log(typeof(a))
// console.log(typeof null)
// console.log(b+ `${c}`+a)
// var foo=1;
// function myfun()
// {
//     console.log(foo);
//     foo=2;

// }
// myfun()
// x=4;
// console.log(x)
// var x=5;
// var x=24;
// var y=function(){
   
//  console.log(x)
//  var b=20;
   
// };
//y()
// console.log(-1-3)
 var a=['abc','sdj',true]




