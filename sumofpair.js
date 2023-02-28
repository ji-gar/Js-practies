var a=[1,3,2,4]
var c=0;
var pair1=[]
var pair2=[]
const middleIndex = Math.ceil(a.length / 2);
console.log(middleIndex)
function checkitdividedable()
{
    if(a.length==1)
    {
        return -1;
    }
    else{
        for(var i=0;i<a.length;i++)
        {
          for(var j=i+1;j<a.length;j++)
          {
              if(a[i]+a[j]==5)
              {
                
                 //console.log(a[i]+""+a[j])
                 pair1.push(a[i])
                 pair1.push(a[j])
              }
        
          }
        }
        console.log(pair1)
        var mid=Math.ceil(pair1.length / 2);
         for(var i=0;i<mid;i++)
         {
           pair2.push(pair1.pop())
           
         }
         console.log(pair1)
         console.log(pair2)
    }
}
checkitdividedable()

 
 




    
  
