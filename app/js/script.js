console.log("hello world");
const hamburger=document.querySelector(".hamburger");
const navbar_links=document.querySelector(".navbar_links");
let body =document.querySelector("body");
hamburger.addEventListener("click",function(){
    if(hamburger.classList.contains("open")){
        console.log("remove");
        hamburger.classList.remove("open")
        navbar_links.classList.remove("active");
        body.style.backgroundColor="white"
    }
    else{
        hamburger.classList.add("open")
        navbar_links.classList.add("active");
        console.log("add");
      body.style.backgroundColor="gray"
    }
    console.log("click");
})