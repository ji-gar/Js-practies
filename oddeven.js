
//var odd=[0,2,4,6,8]
function isOddOrEven(number)
{
 var s=number.toString()
 console.log(s.length)
 var no=s.charAt(s.length-1)
 var data=parseInt(no)
 if(data==0||data==2|| data==4||data==6||data==8)
 {
    console.log("the number is even")
 }
 else{
    console.log("the number is odd")
 }
}
isOddOrEven(124589)


//Second way 

function anotheroddorevenWay(numberdata)
{
    var stringnumber=numberdata.toString()
    if(stringnumber.endsWith("2")||stringnumber.endsWith("4")||stringnumber.endsWith("6")
    ||stringnumber.endsWith("8")||stringnumber.endsWith("0"))
    {
      console.log("Another way is "+"is even number")
    }
    else{
        console.log("Another way is "+"is odd number")
    }
}
anotheroddorevenWay(20058888)
