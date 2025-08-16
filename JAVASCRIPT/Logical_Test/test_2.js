var num = 3
var i=1
var sum=1
while(i<=num){
    sum*=i
    i++
}

console.log(sum);S

//FACTORIAL OF A NUMBER
// --------------------------------------------------------------------------------------------------


function palindrom(str){

var pal=''

for(i=str.length-1;i>=0;i--){
    pal+=str[i]
}
if(str==pal){
    console.log( 'palindrome' );
}else{
    console.log('not palindrome');
}    
}

palindrom("ab")

// --------------------------------------///



let sumofDigit=(num) => {
    let sum = 0

while(num>0){

    sum = sum+(num%10)
    num=num/10 | 0  //bitwaise or
}

return sum
}

console.log(sumofDigit(123));
