// const step1 = (callback) => {
    
//   console.log("Step 1 completed!");
//   callback();
// };
// const step2 = (callback) => {
//   console.log("Step 2 completed!");
//   callback();
// };
// const step3 = (callback) => {
//   console.log("Step 3 completed!");
//   callback();
// };
// const step4 = (a) => {
//   console.log("all steps completed!");
//   a();
// };
// const step5 =()=>{
//     console.log('come');
    
// }




// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(()=>{
//         step5();
//       });
//     });
//    });
//  });

// function callStep4() {
//   console.log("All steps completed!");
// }

// function callStep3() {
//   console.log("Step 3 completed!");
//   callStep4();
// }

// function callStep2() {
//   console.log("Step 2 completed!");
//   callStep3();
// }

// function callStep1() {
//   console.log("Step 1 completed!");
//   callStep2();
// }

// callStep1();


// const step1 = (nextStep2) => {
//   console.log("Step 1 completed!");
//   nextStep2(); // call step2
// };

// const step2 = (nextStep3) => {
//   console.log("Step 2 completed!");
//   nextStep3(); // call step3
// };

// const step3 = (nextStep4) => {
//   console.log("Step 3 completed!");
//   nextStep4(); // call step4
// };

// const step4 = (nextStep5) => {
//   console.log("All steps completed!");
//   nextStep5(); // call step5
// };

// const step5 = () => {
//   console.log("Come");
// };

// // Start the chain
// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         step5();
//       });
//     });
//   });
// });


// --------------------------------------------------------------------------------------------------


// const step1 = () => {
//   return new Promise((res,rej) => {
//     console.log("complit step 1");
//     res()
    
//   })
// }

// const step2 = () => {
//   return new Promise((res,rej) => {
//     console.log("complit step 2");
    
//     res()
//   })
// }

// const step3 = () => {
//   return new Promise((res,rej) => {
//     console.log("complit step 3");
//     res()
//   })
// }

// const step4 = () => {
//   return new Promise((res,rej) => {
//     res("complit all steps");
    
//   })
// }


// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => step4())
//     .then((res) => console.log(res))

    // ---------------------------------------------------------------------------
    // ASYNAKAWAIT

    const fechResult=() => {
      return new Promise((res, rej)=>{
        setTimeout(()=>{
          res("some datas!")
      },2000)

      })
      
    };

    const fechData=async()=>{
      const re=await fechResult();
      console.log(re);
      
    }

    fechData();
    console.log('bjbygu');
    