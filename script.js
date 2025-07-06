const menuList = document.querySelector(".hamburger-menu")
const header = document.querySelector(".header-container")
const cancelIcon = document.querySelector(".cancel-icon")
const nav = document.querySelector("nav")


menuList.addEventListener("click", (e)=>{
    e.stopPropagation()
    menuList.parentElement.classList.add("isclicked")
})

nav.addEventListener("click", (e)=>{
    e.stopPropagation()
})

cancelIcon.addEventListener("click", ()=>{
    header.classList.remove("isclicked")
})


document.body.addEventListener("click", ()=>{
    header.classList.remove("isclicked")
})


