var row = 4

for(var i=1;i<=row;i++){
    let star=""

    for(var j=1;j<=i;j++)
    {
        star = star+"*"
      
    }
    for (var s=1;s<=(row*2)-(i*2);s++){   
        star= star+" "
    }
    for(var j=1;j<=i;j++)
    {
        star = star+"*"
      
    }

    console.log(star);
        
    
}

for(var i=row;i>=1;i--){
    let star=""

    for(var j=1;j<=i;j++)
    {
        star = star+"*"
      
    }
    for (var s=1;s<=(row*2)-(i*2);s++){   
        star= star+" "
    }
    for(var j=1;j<=i;j++)
    {
        star = star+"*"
      
    }

    console.log(star);
        
    
}



// // ----------------------------------------------------------------------------------------------------------

const arr = [12,2397,45,87,38]

const arr1= []

for(let i=0;i<arr.length;i++){

   let num=arr[i]

   let rev=0

   while(num>0){
      rev=rev*10+(num%10)
      num=num/10 | 0
   }

   arr1[i]=rev
  
}

console.log(arr1);