const numbersarray=[10,20,40,70]
const arrayobject=[
    {firstname : "Malcom", lastname: "Reynolds",
     color:"red"},
    {firstname : "Malcom", lastname: "Frye",color:"red"},
    {firstname : "Jayne", lastname: "Cobb",color:"blue"}

]
     
// let a=arrayobject.map((x)=> x.firstname )
//map with reduces //final element inside array reduces
let data=arrayobject.reduce(function(accume,current){
    
    const first=current.firstname
    console.log("the first value"+first)
    console.log("accume array"+accume[first])
    if(accume[first])
    {
        accume[first]++;
    }
    else{
        accume[first]=1;
    }
    return accume;
        
},)
console.log(data)