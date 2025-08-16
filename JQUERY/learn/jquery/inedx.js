const container= $("#container")
const inpurt= $("#input")
const button= $("#slide")



// container.css("color",'red')

container.css({
    color:"red",    
    backgroundColor:"yellow"
})

//for ceating new element

const h1=$('<h1>')
const h2=$('<h2>')

h1.addClass("hello")  //FOR STYLE IN CSS

h1.text("<i>this is newly create element<i>")  //for inner text
h2.html("<i>this is h2<i>")

container.append(h1)
$("body").append(h2);  //for appent in body

container.css({
    width:"200px",
    height:"200px",
    backgroundColor:"grey"
})

container.hover(()=>{
    container.css("color","green")
},()=>{
    container.css("color","red")
})

button.click(()=>{
    container.slideToggle(2000);
})


$("#fadeToggle").click(()=>{
    container.fadeToggle();
})

