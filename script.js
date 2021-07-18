'use strict';
// var bill = document.getElementById("bill").value;
function warning(){
    /*document.getElementById("spam").style.display="initial";*/
    document.getElementById("spam").style.visibility="visible";
}
function warning2(){
    /*document.getElementById("spam").style.display="initial";*/
     document.getElementById("spam").style.visibility="hidden";
}
//Real work here:
function print(){
    /*console.log(document.getElementById("people").value)
    console.log(document.getElementById("bill").value);*/
    var custom = Number( document.getElementById("custom-percentage").value);
    divide(custom);
    document.getElementById("reset").classList.remove("inactive");
    if((document.getElementById("bill").value = "0") || (document.getElementById("people").value = "0")){
        document.getElementById("total").innerText = "0.00";
       document.getElementById("per-person").innerText = "0.00";
       console.log("cope");
       document.getElementById("bill").value = null ;
       document.getElementById("people").value = null ;
       document.getElementById("reset").classList.add("inactive");
        }
}
function divide(value) {
   var bill = Number(document.getElementById("bill").value);
   var offer = Number(value);
   var people = Number(document.getElementById("people").value);
   var perperson = Math.round(((bill*offer)/(100*people)));
   var total = Math.round((bill/people) + (perperson) );
   document.getElementById("total").innerText = total;
   document.getElementById("per-person").innerText = perperson;
   document.getElementById("reset").classList.remove("inactive");  
}
function erase(){
  document.getElementById("bill").value=null;
  document.getElementById("people").value=null;
  document.getElementById("total").innerText = " 0.00";
   document.getElementById("per-person").innerText = "0.00";
   if(document.getElementById("custom-percentage").value != null){
    document.getElementById("custom-percentage").value= null;   
  }  
}