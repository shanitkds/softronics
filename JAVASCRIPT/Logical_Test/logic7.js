

// const UniqPair=(num,target)=>{
//     let arr =[]
// const main=[]
// let duplicate=true

// for (let i = 0; i < num.length; i++) {
//     for (let k = i+1; k < num.length; k++) {

//         if (num[i]+num[k]==target) {

//             arr.push(num[i])
//             arr.push(num[k])
//             let a=num[i]
//             let b=num[k]

//             for (let l = 0; l < main.length; l++) {
//                 let c=main[l][0]
//                 let d=main[l][1]
//                 if (a==d && b==c || a==c && b==d) {
//                    duplicate=false
//                    break;
//                 }else{
//                     duplicate=true
//                 }

//             }
//             if (duplicate==true) {
//                  main.push(arr)

//             }

//         }

//         arr=[]
//     }
// }
// return main
// }

// console.log(UniqPair([2,4,3,5,6,8,-1,-2,1,1],5));


// ---------------------------------------------------------------------------------------------------------------------




const Happy = (number) => {
  let newONe = 0
  let cycleChek = []
  let arr = []
  while (number > 0) {
    let digit = number % 10;
    arr.push(digit);
    number = (number - digit) / 10
  }
  newONe = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    newONe = newONe + (arr[i] * arr[i])
  }

  console.log(newONe);
  if (newONe == 1) {
    console.log("It is Happy Number");
    return
  }

  for (let i = 0; i < cycleChek.length - 1; i++) {
    if (cycleChek[i] == newONe) {
      console.log("It is Not Happy Number");
      return
    }
  }

  cycleChek.push(newONe)

  Happy(newONe)

}

Happy(10)



