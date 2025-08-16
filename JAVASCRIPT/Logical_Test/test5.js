const arr=[,5,4,3,2,6]



let count=0

for(let j=0;j<arr.length;j++){
   let minindex=j
    for(var i=j+1;i<arr.length;i++){
     if(arr[minindex]>arr[i]){
        minindex=i
     }
}
if (minindex!=j) {

    var dem=arr[minindex]
    arr[minindex]=arr[j]
    arr[j]=dem
    count++

}
}

console.log(count);
console.log(arr);


// -----------------------------------------------------------------------------



function counting(arr){
let count=1
let result=''
for (let i = 0; i < str.length; i++) {
   if (str[i]===str[i+1]) {
      count++
   }else{
      result+=str[i]+count
      count=1

   }
   
}

return result
}

const str='aaarrccttttt'
console.log(counting(str));




