window.onload=function(){
    setInterval(change,time);
}
var time=1600;
var flag=1;
function change(){
    if(flag==1){
        flag=0;
        bubbletranY();
    }else{
        flag=1;
        bubbletranX();
    }
}
function bubbletranY(){
    document.getElementsByClassName("bubble")[0].style="animation-name:tranY"
}
function bubbletranX(){
    document.getElementsByClassName("bubble")[0].style="animation-name:tran"
}