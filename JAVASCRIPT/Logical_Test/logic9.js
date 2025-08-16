// 2. Write a program to find the smallest positive integer such 
// that: The sum of its digits is equal to S (user input).
//  It is divisible by D (user input). 
//  Input: 
//  Enter the desired digit sum (S): 10
//   Enter the divisor (D): 3 Output : 
//   Smallest number with digit sum 10 and divisible by 3 is :
//    109 Explanation :
//     109 → digit sum = 1+0+9 = 10 109 % 3 = 0 


// --------------------------------------------------------------------------------------------------

// BUTTERFLY ORINTING

const butterfly=(target)=>{
    for (let i = 0; i < target; i++) {
        let star=""
        for (let k = 0; k <= i; k++) {
            if (k==0 || k==i) {
                star+="*"
            }else{
                star+=" "
            }
             
        }
        for (let h = 1; h < 2*(target-i); h++) {
            star+=" "
        }
        for (let z = 0; z <= i; z++) {
            if (z==0 || z==i) {
                star+="*"
            }else{
                star+=" "
            }
             
        }

        console.log(star);
        
        
    }
    // ----------------------------------------------------------
// console.log("--------------------------");

    for (let q = target-1; q >= 0; q--) {
        let star=""
        for (let k = 0; k <= q; k++) {
            if (k==0 || k==q) {
                star+="*"
            }else{
                star+=" "
            }
             
        }
        for (let h = 1; h < 2*(target-q); h++) {
            star+=" "
        }
        for (let z = 0; z <= q; z++) {
            if (z==0 || z==q) {
                star+="*"
            }else{
                star+=" "
            }
             
        }

        console.log(star);
        
        
    }
}

butterfly(4)