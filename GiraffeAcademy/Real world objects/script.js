var myMovies ={
    title:'The Social Network',
    realeaseYear:2010,
    duration:2.0,
    actors:
    [
        {
            name:'Jessie Eisenberg',
            birthday:new Date("October 5,1983"),
            hometown:'New York'
        },
        {
            name:'Rooney Mara',
            birthday:new Date("April 17,1985"),
            hometown:'BedFord New York'
        }

    ] 

};
myMovies.actors.forEach(element => {
    console.log(element.name);
});
// document.write(myMovies.actors[0].name);