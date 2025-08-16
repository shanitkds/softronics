
var operater = "/";
var a = 10;
var b = 20;


function add(c,d){
    console.log(c+d);
}

function sub(a,b){
    console.log(a-b);
}

function div(a,b){
    return(a/b);
}

function mul(a,b){
    return(a*b);
}

if(operater === "+"){
    add(a,b);
}else if(operater === "-"){
    sub(a,b);
}else if(operater === "/"){
    var z=div(a,b);
    console.log(z);
}else if(operater === "*"){
    console.log(mul(a,b));
}else{
    console.log("error");
}

