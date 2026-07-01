// NovaCart V3

console.log("NovaCart Loaded 🚀");

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.75)";

}else{

header.style.background="rgba(0,0,0,.45)";

}

});
