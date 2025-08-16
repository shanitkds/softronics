// let target=2

// const star=(target)=>{
//     for(var i=1;i<=target;i++){
//     let star=""

//     for (var s=1;s<=target-i;s++){   
//         star= star+" "
//     }
//     for(var j=1;j<=i;j++)
//     {
//        star+="*"
//     }
//     for (let l = 1; l < i; l++) {
//        star+="*"
//     }

//     console.log(star);
// }

// for(var i=1;i<=target-1;i++){
//     let star=""

//     for (var s=1;s<=i;s++){   
//         star= star+" "
//     }
//     for(var j=i;j<target;j++)
//     {
//        star+="*"
//     }
//     for (let a =i+1; a < target; a++) {
//          star+="*"
//     }
    

//     console.log(star);
// }
// }

// star(5)


// --------------------------------------------------------------------------------------------------------
// 2. Write a program to check whether a number is an Armstrong number.
//  An Armstrong number is a number that is equal to the sum of the cubes of its digits. 
//  Example:      Input:  153      Output: 153 is an Armstrong number    
//     Input:  123      Output: 123 is not an Armstrong number 

const Armstrong=(target)=>{
 const arr=[]
 let cube=0
 let number=target
    while (target > 0) {
    let digit = target % 10;
    arr.push(digit);
    target = (target - digit) / 10
  }
  // console.log(arr);
  for (let k = arr.length-1;k >= 0; k--) {
    cube+=arr[k]*arr[k]*arr[k]
    
  }
  // console.log(cube);

  if (number==cube) {
    console.log(number+" it is a Armstrong");
    
  }else{
    console.log(number+" it is not a Armstrong");
    
  }
  
  
}

Armstrong(153)

// ------------------------------------------------------------------------------------------------

// 3. Find Missing Number in a Sequence (1 to N)
//   Example:      Input:  {1, 2, 4, 5, 6}  (n = 6)      Output: Missing number = 3 


const missingNumber=(arr)=>{
  let a=0
 let missingNumber=0
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
     if (arr[i]-a==2) {
      missingNumber=arr[i]-1
     }
     a=arr[i]
    
  }
  return('missig number is '+missingNumber);
  
  
}



console.log(missingNumber([1,2,3,4,6]));
