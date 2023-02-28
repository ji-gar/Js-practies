
//ecmascript5  contains let


var myname="Jigar Panchal"
console.log("Without Template Liters"+myname)
//not print 
console.log("With Template liters ${myname}")
console.log(`Hello ${myname}`);
bio();
function bio()
{
    let name="jigar";
  //  console.log(name);
    if(true)
    {
        var lname="jigs";
        lname=5;
        console.log(lname);
        console.log(name)

    }
  console.log(name);

   function scopvariable()
   {
   
      if(true)
      {
        var firstName="Hello Word"
        let lastname="hello "
        
      }
      console.log("Accessing the var variable"+firstName)
    

   }
   scopvariable()

  // console.log('how are you ${name}');
}

function defaultargument( a=10, b=10)
{
  var c=a+b;
  console.log("default argument"+c);
}
defaultargument()
defaultargument(10,20)
//Callback function

function Callback()
{
    return "Welcome"

}
var experession=function Called(argument)
{
    console.log("Function experession  is Called"+argument)
}
experession("Argument is pass in function experession ")

function gettingUsername(functioncall)
{
   console.log(functioncall+"User")
}
gettingUsername(Callback())

 
//Default argument
/*function d(a=0.521,b=2)
{
  return(a*b);
}
console.log(d());*/
//aynomus function
/*

sum=function(a,b)
{
  console.log(a+b);
}
sum(5,3);*/

/*const sum = () => console.log(3+5);
sum();*/
var element=['abc','pqr','xyz','mno'];
var arrayelement=["abc",1,true,false]
arrayelement.forEach(function(element,index){
  console.log(`index ${index} element ${element}' `)
})
/*for(var ele in element)
{
  //its for in loop give index element;
  console.log(ele);
}
for(var ele of element)
{
  console.log(ele);
}*/
//  const name=()=>console.log("fet arrow function");
// name();
// function synchronus()
// {
//   setTimeout(()=>{
//    console.log("settime out function called after 3 second")
//   },3000)
// }
// function sss()
// {
//   console.log("normal")
// }
// synchronus();
// sss();
//promis in javascript
