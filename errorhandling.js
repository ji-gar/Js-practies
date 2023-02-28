/*
error in javascript 7 types error
range error
syntax error

*/



try{
  console.log("Try is stated")   
  if(4>0)
  {
    throw new Error("ERROR N IS LARGE")
  }
  console.log("Try is Ended") 
     
}
catch(error)
{
console.log("MY MESSAGE"+error.message)
}
finally
{
    console.log("Finally is called")  
}