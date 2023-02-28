const arrayofobject=[
   {
    name:"Jigar Panchal",
    rollno:10,
    marks:85,
    name:function () {
       return "ddfdf"
      }
   
   },
   {
    name:"Dev",
    rollno:11,
    marks:90,
    name:function () {
        return "Fdff" + " " + "Dsdsd";
      }
    
   
   },
   {
    name:"abc",
    rollno:14,
    marks:80,
    name:function () {
        return "Dsdsdsd";
      }
    
    
   },
   

]

console.log( arrayofobject[0].name())
// let arrayname=arrayofobject.reduce(function(acc,current){
   
//     return acc
//      + current.marks;

// },0)
// for(let a in arrayofobject)
// {
//     console.log("rollnumber"+arrayofobject[a].rollno)
// }