const parentFun=(a,b) => {

   var parentVar=" This is a parent variable"

    const childFun=() => {

       var childFun="This is child function"

        console.log('parent var :' ,parentVar);
        console.log('parent var :' ,parentVar);
        console.log(a,b);
        
    }

    return childFun
}

result=parentFun('c','d')
result()

