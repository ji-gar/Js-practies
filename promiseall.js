// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function promise(isfrom)
{
    return new Promise((resolve,reject)=>{
       if(isfrom)
       {
           resolve("sucessful")
       }
       else{
           reject("got error")
       }
    })
}
function promise1(isfrom)
{
    return new Promise((resolve,reject)=>{
       if(isfrom)
       {
           resolve(" promise 1sucessful")
       }
       else{
           reject(" promise 2got error")
       }
    })
}
// promise(false).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
Promise.all([promise(true),promise1(true)]).then((results) => {
 
  console.log(`Results: ${JSON.stringify(results)}`);
  
 
});
