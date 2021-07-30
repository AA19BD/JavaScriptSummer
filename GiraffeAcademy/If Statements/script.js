var isMale=true;
var isTall=false;
if (isMale && isTall){
    document.write('You are tall male');
}else if(isMale && !isTall){
    document.write('You are male and not tall');
}else if(!isMale && isTall){
    document.write('You are not male and tall');
}else{
    document.write('You are  not male or not tall  ');
}

// &&->and
// ||->or