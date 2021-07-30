function handleClick(element){//First way to do it
    element.innerHTML ='Unclick me';
    element.style.background='blue';
    element.style.color='white';
    // alert('You clicked');
}
var button=document.getElementById('button');//Second way to do it
button.addEventListener('click',function(){
    button.innerHTML='Unclick me';
    element.style.background='blue';
    element.style.color='white';
    // alert('You clicked');
});
//-------------

var image=document.getElementById("image");//mouseover -мышка заходит
image.addEventListener("mouseover",function(){//there are 2 parameters,1-"mouseover" is Event  like onclick(),when we scroll mouse Second parameter will be executed(some code)
    this.style="box-shadow: 2px 2px 2px grey";
    this.width="250";
});

image.addEventListener("mouseout",function(){//mouse out-мышка выходит
    this.style="";
    this.width="1000";
});