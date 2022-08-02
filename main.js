let slider = document.getElementById("myRange");
let output = document.getElementById("rangeValue");
let progressBar = document.getElementById("progress");
let pageViews = document.getElementById("pageviews");
let discountButton = document.getElementById("slipper");
let month = document.getElementById("month")


output.innerHTML= slider.value;


slider.oninput = function(){
    
    progressBar.style.width= this.value * 100 /32 + "%";
    
    pageViews.innerHTML = Math.round(slider.value*100/32 * 2)  ;
  
    if(discountButton.checked ){
        output.innerHTML=(slider.value * 12  * 3/4 );
    }else{   
        output.innerHTML=this.value ;
    }
}

discountButton.addEventListener("click" , function(){
        if(discountButton.checked ){
            month.innerHTML = "/year"
            output.innerHTML=(slider.value*12 * 3/4 ) ;
        }else{
            month.innerHTML = "/month"
            output.innerHTML=slider.value ;
        }
});

