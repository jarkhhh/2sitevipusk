changeBG()
function changeBG(){
    document.body.style.backgroundColor = localStorage.getItem("bgcolor");
    console.log(obj.value);
}
const obj =document.getElementById("colparm");
function saveBgCol(){
    localStorage.setItem("bgcolor",obj.value)
    changeBG();
}
