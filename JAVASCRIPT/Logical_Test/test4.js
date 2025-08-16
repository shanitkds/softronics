// Revers a String

// let str='Hello'
// let revers=''

// for(let i=str.length-1;i>=0;i--){
    
//    revers+=str[i]
// }

// console.log(revers);

// -------------------------------------------------------------
// Check for Palindromes 

// let str='cac'
// let revers=''

// for(let i=str.length-1;i>=0;i--){
//     revers+=str[i]
   
    
// }
// if(str==revers){
//     console.log('true');
    
// }else{
//     console.log('false');
    
// }

// ----------------------------------------------------------------------------
// Find the Largest Number in an Array 

// const number=[1,5,888,3,9,2]
// let big=0

// for(i=0;i<=number.length-1;i++){
//     if(number[i]>big){
//         big=number[i]
//     }
// }

// console.log(big);


// ------------------------------------------------------------------------------------

//  Sum of All Numbers in an Array 

// const arr=[1,2,3,4,5]
// let sum=0

// for(let i=0;i<=arr.length-1;i++){
//     sum+=arr[i]
// }
// console.log(sum);
// --------------------------------------------------------------------------------

//  Minimum Number

// const number=[1,5,888,3,9,2]
// let big=Infinity

// for(i=0;i<=number.length-1;i++){
//     if(number[i]<big){
//         big=number[i]
//     }
// }

// console.log(big);

// --------------------------------------------------------------------------------------------
//  Count Vowels

// let str="applee men"
// const vowels=['a','e','i','o','u','A','E','i','O','U']
// let count=0

// for(let i=0;i<=str.length-1;i++){
//     for(let k=0;k<=vowels.length-1;k++){
//         if (str[i]==vowels[k]) {
//             count++
//         }
//     }
// }


// console.log('number of vowels:'+count);
// -------------------------------------------------------------------------------------
//  Remove Duplicates
 
// let arr=[1,2,2,3,4,4,5,5,5,6]
// const update=[]
// let count=0
// let k=0
// for(let i=0;i<arr.length-1;i++){
//     if(count!=arr[i]){
//         update[k]=arr[i]
//         count=update[k]
//         k++
//     }
// }

// console.log(update);

// -----------------------------------------------------------------------------
//  Number of Words

// let str='Hello world, this is JavaScript'
// let count=1
// let space =' '

// for(let i=0;i<=str.length-1;i++){
//     if (str[i]==space) {
//        count++ 
//     }
// }

// console.log('Number of Words: '+count);

// -------------------------------------------------------------------------------
// merge this Array

// const str1=[1,3,5,8]
// const str2=[2,4,6,7]
// const updateStr=[]
// let l=0
// let i=0
// let k=0

//     while (i<str1.length && k<str2.length) {

//        if(str1[i]<str2[k]){
//             updateStr[l]=str1[i]
//             l++
//             i++
//         }else{
//             updateStr[l]=str2[k]
//             l++
//             k++
//         }
        
//     }
    
//     while (i < str1.length) {
//         updateStr[l]=str1[i]
//         i++
//         l++
//     }
//     while (k < str2.length) {
//         updateStr[l]=str2[k]
//         k++
//         l++
//     }

       
        
    
// console.log(updateStr);

// -------------------------------------------------------------------------------------------
// factorialal

let num=10
let factorial=1

for(i=1;i<=num;i++){
    factorial*=i
}
console.log("factorialal of "+num+" : "+factorial);
