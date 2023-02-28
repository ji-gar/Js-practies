var stringarray=["sjsjs","ssss","ddss"]

//sort the array
console.log(stringarray.sort())
//below function check every value of array
var  data=stringarray.every(function(val){
    return (typeof(val)==="string")
})
console.log(data ?"String":"number")


  