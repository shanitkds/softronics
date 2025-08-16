for(var i=6;i>=0;i--){
    let star=""
    for(var s=1;s<=6-i;s++){
        star = star+" "
    }
    for(var j=1;j<=6;j++)
    {
        star = star+"*"
      

    }

    console.log(star);
        
    
}

// for(var i=1;i<=6;i++){
//     let star=""

//     for(var j=1;j<=i;j++)
//     {
//         star = star+j+" "
      

//     }

//     console.log(star);
        
    
// }

// for(var i=1;i<=6;i++){
//     let star=""

//     for (var s=1;s<=6-i;s++){   
//         star= star+"  "
//     }




    // for(var j=1;j<=i*2-1;j++)
    // {
    //     if(j==1||j==i*2-1){
    //         star = star+i+" "
    //     }else{
    //         for(var k=i*2-i;k<=i*2-1;i++)
    //         star = star+(i-1)+" "
    //     }
        

    // }

//     console.log(star);
        
    
// }



// const arr=[1,2,13,4];

// let larg=0;

// for(let i=0;i<arr.length;i++){
//      if(larg<arr[i]){
//         larg=arr[i]
//      }
// }

// console.log(larg);

// let a=1

// a=2

// console.log(a);


// const arr=[1,2,3,4];

// let sum=0;

// for(let i=0;i<arr.length;i++){
//      sum+=arr[i]
//      }


// console.log(sum);
// ------------------------------------------------------------------

// const arr=[1,2,13,4,78];

// let end=arr.length-1;
// let dummy=0;

// for(let i=0;i<=end;i++){
//     let k=end-i
//           if(i<=k){
//                dummy=arr[i]
//                arr[i]=arr[k]
//                arr[k]=dummy
               
          
//      }
// }



// console.log(arr);

// ------------------------------------------------------------------------


// const arr=[1,2,3,4];

// let search=4;

// let flag=false;

// for(let i=0;i<arr.length;i++){

     

//      if(arr[i]==search){

          
//           flag=true;
//           break;     
//      }

// }

// if(flag==true){
//      console.log(search+" fount");
     
// }else{
//      console.log("not fount");
     
// }
// ----------------------------------------------------------------------------------------



// const arr = [10]
// let larg=-1
// let secont=-1

// for(i=0;i<arr.length;i++){

//      if (larg<arr[i]) {
//           secont=larg
//           larg=arr[i]
          
//      }else if(arr[i]>secont && arr[i]<larg){
//           secont=arr[i]
//      }
// }

// if(secont===-1){
//       console.log("not found")

// }else{
// console.log(secont);
// }
     
// ---------------------------------------------------------------------------------------------------

// const arr=[1,2,4,9,5,6,7,8]
// let first=0
// let secont=0
// flag=false
// for(i=0;i<arr.length;i++){
//      secont=first
//      first=arr[i]
     
//      if(first<secont){
//           flag=true
//           break
//      }
     
// }

// if(flag==true){
//      console.log("not sorted")
// }else{
//      console.log("sorted")
// }
     

// ------------------------------------------------------------------------------

// const arr=[1,2,2,2,3,4,3,3,4,2,3,6,7,4]

// const count={}
//  var num
// for(i=0;i<arr.length;i++){
//       num=arr[i]
//      if(count[num]){
//           count[num]++
//      }else{

//           count[num]=1
//      }
// }

// for(let key in count){
//      console.log(key +" : "+ count[key]);
// }

// FREQUNCY OF EACH ELEMENT IN ARRAY


// ==============================

// let counts = {
//     5: 3,  
//     3: 2,  
//     2: 1   
// }

// counts[3]++
// counts[4]=8

// console.log(counts);
// ===================================
