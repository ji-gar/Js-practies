//Take an array connvert Int to String

let numberarray=[2,4,5,6,7,8]

let stringName=[{
    name: "Angelina Jolie",
        age: 80
},
{
    name: " Jolie",
    age: 05 
},
{
    name: "Goa",
        age: 14
}

]


function connvertintostring()
{
    let stringarray=numberarray.map((x)=>x.toString())
    console.log(stringarray)
}
connvertintostring()
function makingStringarray()
{
    let objecttostringarray=stringName.map((x)=>x.name).join('+')
    console.log("join method==="+objecttostringarray)
}
makingStringarray()

function adultvoting()
{
    let adultvotingarray=stringName.map(checkadult)
    console.log(adultvotingarray)
}
adultvoting()
function checkadult(x)
{
    if(x>18)
    return x;
}


function getFiltersarray()
{
 let under18agerray=stringName.filter(function(x){
    return x.age<18
 })
 console.log(under18agerray)
}
getFiltersarray()

