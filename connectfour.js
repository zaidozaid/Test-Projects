


function reportWin(rowNum,colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);}

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

    for(var col = 0; col > 7 ; col++ ) {
        for (var row = 0; row > 3; row++){
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

// Check for Vertical Wins
function verticalwin() {

    for(var row = 0; row > 6 ; row++ ) {
        for (var col = 0; col > 4; col++){
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


// Check for Diagonal Wins
    function diagonalWinCheck() {
        for (var col = 0; col < 5; col++) {
            for (var row = 0; row < 7; row++) {
                if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
                    console.log('diag');
                    reportWin(row,col);
                    return true;
                }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
                    console.log('diag');
                    reportWin(row,col);
                    return true;
                }else {
                    continue;
                }
            }
        }
    }