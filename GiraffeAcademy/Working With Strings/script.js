var phrase='Strings aree fun!';
var text='and cool!';
document.write(phrase);//Strings are fun!'
document.write(phrase.length);//16

document.write(phrase.toUpperCase());//STRINGS ARE FUN!
document.write(phrase.toLowerCase());//strings are fun!

document.write(phrase.charAt(0));//S
document.write(phrase.indexOf('!'));//15

document.write(phrase.indexOf('e'));//10
document.write(phrase.lastIndexOf('e'))//11

document.write(phrase.substring(0,3));//Str
document.write(phrase.substring(phrase.indexOf('f'),phrase.length));//fun!

document.write(phrase.endsWith('!'));//true
document.write(phrase.includes('aree'));//true

document.write(phrase+" "+text);//concatination of strings
