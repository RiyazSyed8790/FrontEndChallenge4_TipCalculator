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
document.getElementById("custom-percentage").addEventListener("keydown" , function(e) {
    if (e.key === "Enter") {
        print();
    }
})
document.getElementById("bill").addEventListener("change" , function(){
   /* document.getElementById("5perc").classList.remove("inactive");
    document.getElementById("10perc").classList.remove("inactive");
    document.getElementById("15perc").classList.remove("inactive");
    document.getElementById("25perc").classList.remove("inactive");
    document.getElementById("50perc").classList.remove("inactive");
    document.getElementById("custom-percentage").classList.remove("inactive");*/
    document.getElementById("perc").classList.remove("inactive");
})
function print(){
    /*console.log(document.getElementById("people").value)
    console.log(document.getElementById("bill").value);*/
    var custom = Number( document.getElementById("custom-percentage").value);
    divide(custom);
    document.getElementById("reset").classList.remove("inactive");
    //if((document.getElementById("bill").value ="0") || (document.getElementById("people").value ="0")){
      // erase();
      // document.getElementById("reset").classList.add("inactive");
       //console.log("cope");
       /*document.getElementById("bill").value = null ;
       document.getElementById("people").value = null ;
       document.getElementById("total").innerText = "0.00";
       document.getElementById("per-person").innerText = "0.00";
       */
        //}
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