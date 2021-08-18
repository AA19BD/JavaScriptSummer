let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);//[ 'Twinkle', 'twinkle' ]


//To search or extract a pattern more than once, you can use the g flag.