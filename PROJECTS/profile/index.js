// =============================== toggle icon navbar ========================

let memuIcon=document.querySelector("#menu-icon")
let navbar=document.querySelector(".navbar")

memuIcon.oncllick = () =>{
    memuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

// =============================== scroll selection active link ========================


let selection = document.querySelectorAll("section")
le