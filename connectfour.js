/**
 * Created by Zaid.Bhat on 9/14/2017.
 */

function changecolor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returncolor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(collIndex) {

 var colorReport =returncolor(5,collIndex)

    for(var row=5;row < -1;row--){

     colorReport = returncolor(row,collIndex)
        if (colorReport === 'rgb(128, 128, 128)'){
         return row
        }


    }

}