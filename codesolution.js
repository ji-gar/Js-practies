
//the number is odd or even method 1
function isOddOrEven(number)
{
 if((number&1) ==0)
 {
    console.log("its even number")
 }
 else{
    
 }
}
isOddOrEven(124589)


//Method 2 

function anotheroddorevenWay(numberdata)
{
    let stringnumber=numberdata.toString()
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


//Number is amstrong or not
function amstrong(number)
{

    //save value in temp for feature needs
    //const let
    let temp=number
    let sum=0
    while(number>0)
    {
           r=number%10;
           sum=sum+r*r*r;
        number=parseInt(number/10)
     
        
    }
    //type ==== operator
    if(sum===temp)
    {
        console.log("it amstrong number")
    }
    else{
        console.log("it not amstrong number")
    }
    
}
amstrong(153)

  
//Check for lastday of month

function checklasttdayofmonth(todaydays)
{
   //getting the last day of month
   //testcase 28
    let lastdate=new  Date(todaydays.getFullYear(), todaydays.getMonth()+1,0).getDate()

     //comparing lastdate
     if(lastdate===31||lastdate===28||lastdate===30||lastdate===29)
     {
        console.log("its last day of month")
     }
     
        else {
        console.log("it not last day of month")
        }
     
}
let todaysdate=new Date("2000-02-21")
checklasttdayofmonth(todaysdate)

//Check for firstday of month

function checkfirstdayofmonth(firstdayofmont)
{
    //getting first day of month
    let firstday=new  Date(firstdayofmont.getFullYear(), firstdayofmont.getMonth()+1,1).getDate()
    console.log(firstday)
    //increment date
          if(firstday===1)
          {
            console.log("Email sending it first day")
          }

          
}

let todates=new Date("2000-02-01")
checkfirstdayofmonth(todates)

//Date formation

function setDateFormation(formatingdates)
{
    //days array
   let days=["sun","mon","tue","wed","thus","fri","sat"]
   //month array
   //localstring find 
   //try to remove array
   let month=["January","Febuary","March","April","May","June","July","Augest","September","October","November","Decembar"]
   console.log(`${formatingdates.getDate()}-${formatingdates.getMonth()+1}-${formatingdates.getFullYear()}`)
   console.log(`${formatingdates.getDate()}/${formatingdates.getMonth()+1}/${formatingdates.getFullYear()}`)
   console.log(`${month[formating.getMonth()]} ${formating.getDate()} ${formating.getFullYear()} (${days[formating.getDay()]})`)
}
let formating=new Date("2000-02-01")
setDateFormation(formating)


//check type of array and sort array
let stringarray=["sjsjs","ssss","ddss"]
//sort the array
//int sort
console.log(stringarray.sort())
//below function check every value of array
let  data=stringarray.every(function(val){
    return (typeof(val)==="string")
})
console.log(data ?"String":"number")
