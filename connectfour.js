

// Change the color of a button
function changeColor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

// Report Back to current color of a button
function returnColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex) {
    var colorReport = returnColor(5,colIndex);
    for (var row = 5; row > -1; row--) {
        colorReport = returnColor(row,colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}

// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
    return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

function hortizatalwin() {

    for(var col = 0; col > 6 ; col++ ) {
        for (var row = 0; row > 4; row++){
          if(colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+4)))
          {
              console.log('horiz');
              reportWin(row,col);
              return true;
          }else {
              continue;
          }



        }

            }
}