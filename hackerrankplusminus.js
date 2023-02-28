//https://www.hackerrank.com/challenges/plus-minus/problem

let array=[-4, 3, -9, 0, 4, 1]
let minusvalue=0
let plusvalue=0;
let zerovalue=0;

for(let i=0;i<array.length;i++)
{
    if(array[i]<0)
    {
       minusvalue++
    }
    else if(array[i]>0)
    {
       plusvalue++;
    }
    else if(array[i]==0)
    {
        zerovalue++
    }
    

}
console.log(parseFloat(minusvalue/array.length).toFixed(6))
console.log(parseFloat(plusvalue/array.length).toFixed(6))
console.log(parseFloat(zerovalue/array.length).toFixed(6))


