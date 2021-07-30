// for(var i=0;i<4;i++){
//     for(var j=0;j<3;j++){
//         document.write("i="+i+",j="+j+"<br/>");
//     }
// }

numberGrid = [ [1, 2], [3, 4] ];

numberGrid[0][1] = 99;
document.write(numberGrid[0][0] + "<br>");
document.write(numberGrid[0][1] + "<br>");

for(var i = 0; i < numberGrid.length; i++){
    for(var j = 0; j < numberGrid[i].length; j++){
        document.write(numberGrid[i][j] + ", ");
    }
    document.write("<br>");
}