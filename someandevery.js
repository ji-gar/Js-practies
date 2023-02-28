function isodd(element, index, array) {
    return (element % 2 === 1);
}
     
function check() {
    //const
    let arr = [ 6, 1, 8, 32, 35 ];
     
    // check for odd number
    let value = arr.every(isodd);
    console.log(value);
}
check();


let firstname=["sbc","smq","pqrs"]
function firstnamestartwiths()
{
    let value=firstname.some(function checkfirstletter(x,index){
       
      return (x.charAt(0)==='s') 
    })
    console.log(value)

}
firstnamestartwiths()