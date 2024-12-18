changeBG()
function changeBG(){
    document.body.style.backgroundColor = localStorage.getItem("bgcolor");
    
}
//uuuu
function saveBgCol(obj){
    localStorage.setItem("bgcolor",obj.value)
    changeBG();
}
