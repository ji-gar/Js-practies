function checklasttdayofmonth(todaydays)
{
   //getting the last day of month
   //  let lastdate=new  Date(todaydays.getFullYear(), todaydays.getMonth()+1,0).getDate()

     //comparing lastdate
     let date=new Date()
     if(new  Date(todaydays.getFullYear(), todaydays.getMonth()+1,0).getDate()===date.getDate())
     {
        console.log("its last day of month")
     }
     else if(new  Date(todaydays.getFullYear(), todaydays.getMonth()+1,1).getDate()===date.getDate())
     {
      console.log("its first day of month")
     }
     
        
     
}
let todaysdate=new Date("2000-02-01")
checklasttdayofmonth(todaysdate)



// function checkfirstdayofmonth(firstdayofmont)
// {
//     //getting first day of month
//     var firstday=new  Date(firstdayofmont.getFullYear(), firstdayofmont.getMonth()+1,1).getDate()
//     console.log(firstday)
//           if(firstday==1)
//           {
//             console.log("Email sending it first day")
//           }

          
// }
// var todates=new Date("2000-02-01")
// checkfirstdayofmonth(todates)

function setDateFormation(formatingdates)
{
//formating local string
   
 
console.log(`${formatingdates.getDate()}-${formatingdates.getMonth()+1}-${formatingdates.getFullYear()}`)


  //not work on other formate
  let date= formatingdates.toLocaleDateString('en-US',{
      month: 'short',
      day:'2-digit',
      year:'numeric',
      weekday:'short',
     
   })
    console.log(date)
   let array=date.split(",")
   console.log(date.split(","))
     console.log("local date string "+ array[1]+array[2]+"("+array[0]+")")
   
}

let formating=new Date("01-12-2000")
setDateFormation(formating)
