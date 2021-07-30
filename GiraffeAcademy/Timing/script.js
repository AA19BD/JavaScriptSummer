var button=document.getElementById('button');
button.addEventListener('click',function(){
    setTimeout(function(){
        alert("Time is Up");
    },500);
});
function Time(){
    alert("Time is Up");
}