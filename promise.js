// const rollno=[4,3,3,2,1]
// const object=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//  console.log(rollno)
//  resolve(rollno)
// },2000)
// })
// object.then((rollno)=>{
//  console.log(`sucessful acesss promise ${rollno}`)
// })
// object.catch(()=>{
//     console.log("error comes")
// })
function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("Fetching data,please wait")
        setTimeout(()=>{
            if (complete){
            resolve("I am successful");
        }else{
            reject("I am failed");
        }
        },1000)
    });}
    let onfulfilment=(result)=>{
        console.log(result);
    }
    let onRejection=(error)=>{
        console.log(error);
    }

    prom(true).then(onfulfilment).catch(onRejection);//Method Chaining



    function isdividedornot(number1,number2)
    {
        const obj=new Promise((resolve,reject)=>{
           let c=number1/number2
            if(number1,number2)
            {
              console.log(number1)
              resolve(`sucessful value is ${c}`)
            }
            else{
              reject("failed cant done")
            }

        }).then((result)=>{
             console.log("sucessful printed")
        }).catch((result)=>{
            console.log("unsucessful printed")

        })
    }
    isdividedornot(4,2)

    const prom=new Promise((resolve,reject)=>{
          if(true)
          {
            console.log("it true")
            resolve()
          }
          else{
            reject("not true")
          }
    })