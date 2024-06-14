import './bootstrap';

import 'bootstrap';




  
       
window.addEventListener("scroll", function() {

    console.log("scrolling");
    
   // console.log(document.documentElement.scrollHeight);
    
    let totalePixelPagina= document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let scrolled = window.scrollY;
    
    let percentage = (scrolled/ totalePixelPagina) * 100;
    
    console.log(percentage);
    
   // <let check = document.getElementsByTagName("body").offsetTop;
    //let scrollTop= this.document.documentElement.scrollTop;
    //let bottomCheck = check + this.document.getElementsByTagName("body").offsetHeight;

    //if(window.scrollY > check && window.scrollY <bottomCheck){
   //     document.getElementsByTagName("body").style.backgroundColor="red";
    //}
    //
    
    let topDiv1 = document.getElementById("div1prodotto").offsetTop;

    let bottomDiv1 = topDiv1 + document.getElementById("div1prodotto").offsetHeight;

    let topDiv2 = document.getElementById("div2prodotto").offsetTop;

    let bottomDiv2 = topDiv2 + document.getElementById("div2prodotto").offsetHeight;

    let topDiv3 = document.getElementById("div3prodotto").offsetTop;

    let bottomDiv3 = topDiv3 + document.getElementById("div3prodotto").offsetHeight;

    if (window.scrollY > topDiv1 && window.scrollY < bottomDiv1) {
        document.getElementById("div1prodotto").style.backgroundColor="red";
        document.getElementById("div2prodotto").style.backgroundColor="red";
        document.getElementById("div3prodotto").style.backgroundColor="red";   
    }else if (window.scrollY > topDiv2 && window.scrollY < bottomDiv2) {
        document.getElementById("div1prodotto").style.backgroundColor="yellow";
        document.getElementById("div2prodotto").style.backgroundColor="yellow";
        document.getElementById("div3prodotto").style.backgroundColor="yellow";   
    }else if (window.scrollY > topDiv3 && window.scrollY < bottomDiv3) {
        document.getElementById("div1prodotto").style.backgroundColor="blue";
        document.getElementById("div2prodotto").style.backgroundColor="blue";
        document.getElementById("div3prodotto").style.backgroundColor="blue"; 
    }
});