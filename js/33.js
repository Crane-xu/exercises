function show(value){
    var printValue=document.getElementById('printBox');
    printValue.value=printValue.value+value;
}
function calc(){
    var printValue=document.getElementById('printBox');
    printValue.value=eval(printValue.value);
}
function clean(){
    var printValue=document.getElementById('printBox');
    printValue.value='';
}