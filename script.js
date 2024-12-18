changeBG()
function changeBG(){
    document.body.style.backgroundColor = localStorage.getItem("bgcolor");
    
}

function saveBgCol(obj){
    localStorage.setItem("bgcolor",obj.value)
    changeBG();
}
