//minus value one side
let mixarray=[-1,0,-2,5,6,8]
let finalarray=[]

   //sort function    
console.log(mixarray.sort(function(a,b){
    return a-b;
}))
let minusvaluearray=mixarray.filter(function maths(value){
    return  value<0
})
 let plusevalue=mixarray.filter(function plusvalue(value){
    return value>=0
})
console.log(minusvaluearray)
console.log(plusevalue)
console.log(mixarray)
console.log(finalarray.concat(minusvaluearray,plusevalue))