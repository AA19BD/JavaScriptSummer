var password='wordpass';
var response;
var count=0;
var error=false;
while ((response!=password) && error==false) {
    if (count<3){
        response=window.prompt('Enter the password:');
        count++;
       
    }else{
        error=true;
    }
};
if (error){
    alert('To many entries');
}else{
    alert('You got it!');
}
