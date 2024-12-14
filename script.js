changeBG()
function changeBG(){
    document.body.style.backgroundColor = localStorage.getItem("bgcolor");
    console.log(obj.value);
}
function saveBgCol(obj){
    localStorage.setItem("bgcolor",obj.value)
    changeBG();
}