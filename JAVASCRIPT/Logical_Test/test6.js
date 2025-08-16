//LEAP YEAR

// let year=1900
// const leapYear=(year)=>{
// if(year%4==0){
//     if (year%100!=0 || year%400==0) {
//         console.log(year+" is a leap year");
//     }else{
//         console.log(year+"not a leap year");
        
//     }
    
// }else{
//     console.log(year+" is not a leap year");
    
// }}

// leapYear(year);

// ------------------------------------------------------------
// Plus One 
let arr=[9,9]
const adding=(arr)=>{
    for (let i = arr.length-1; i >=0; i--) {

        arr[i]++

        if (arr[i]<10) {
            return arr
        }

        arr[i]=0
    }
    arr.length = arr.length + 1;
    
    for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
   arr[0] = 1;
    return arr
}

console.log(adding(arr));