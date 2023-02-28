function findrevers(number)
{

    //save value in temp for feature needs
    var temp=number
    var sum=0
    while(number>0)
    {
           r=number%10;
           sum=sum+r*r*r;
        number=parseInt(number/10)
     
        
    }
    console.log(sum)
    if(sum==temp)
    {
        console.log("it amstrong number")
    }
    else{
        console.log("it not amstrong number")
    }
    
}
findrevers(153)