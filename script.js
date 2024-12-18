changeBG()
function changeBG(){
    document.body.style.backgroundColor = localStorage.getItem("bgcolor");
    
}
const obj =document.getElementById("colparm");
function saveBgCol(){
    localStorage.setItem("bgcolor",obj.value)
    changeBG();
}
