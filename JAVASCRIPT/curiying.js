const f1 = (a)=>{
    return(b) =>{
        return (c) =>{
            return a+b+c
        }
    }
}

const result = f1(1)(2)(3)
console.log(result)