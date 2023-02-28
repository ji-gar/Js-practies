let a = [1,4,6,3,2,6,1];
let sum =0 ;
 let sum1 =0;
    let sum2  =0;
    let arr1 =[];
    let arr2 =[];
for (let i =0;i<a.length;i++){
    sum += a[i];
}
let b = sum/2;
for (let j =0;j<a.length;j++){
    if (  sum1 === b ){
        console.log(arr1);
        break;
    }
    sum1 +=  a[j];
    arr1.push(a[j]);
}
for ( let m = a.length-1;m>=0;m--){
    //console.log(m)
    if (sum2 === b){
        console.log(arr2);
        break;
    }
    sum2 += a[m]
    arr2.push(a[m]);
}
if ( sum1 !==b && sum2!==b ){
    console.log(-1)
}
