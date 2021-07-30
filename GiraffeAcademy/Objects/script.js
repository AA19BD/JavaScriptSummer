var person ={
    name: 'Bob',
    age: 26,
    isMale: true,
    occupation:'programmer',
    printName:function(){
        document.write(this.name);
    }
};
person.name = 'Jorsh';
person.printName();