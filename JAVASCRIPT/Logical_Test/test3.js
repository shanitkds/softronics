// let input='java'
// const vawel=['a','e','i','o','u']
// let update=''

// for(let i=0;i<input.length;i++){
//     let fount = false
//     for(let k=0;k<vawel.length;k++){
//         if(input[i]==vawel[k]){
//            fount=true
//            break;
//         }
//     }

//     if(fount){
//         update+="*"
//     }else{

//         update+=input[i]
//     }
// }

// console.log(update);

// ' Replace Vowels With *'
// ----------------------------------------------------------------



for (let i = 1; i <= 5; i++) {
  let num = '';

  for (let k = 1; k <= 5; k++) {

    if (i == 1) {

      num = num + k + " "

    } else if (k == 1) {
      num += i+" "
    } else if (i == 5) {
      for (let j = i - 1; j >= 1; j--) {
        num += j + " "
      }

      break

    } else if (k == 5) {
      num += 5 - (i - 1) + ""
    } else {
      num += "  "
    }
  }

  console.log(num);

}

// 1 2 3 4 5
// 2       4
// 3       3
// 4       2
// 5 4 3 2 1s