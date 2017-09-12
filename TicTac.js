//grab all rows

var sqaures = document.querySelectorAll("td")


//clear all squares

function clearboard() {

    for (i = 0; i < sqaures.length; i++){
        sqaures[i].textContent = ''

    }

}

//reset button


var reset = document.querySelector("#b")

reset.addEventListener(click,clearboard)


//marker

function marker() {
    if (this.textContent == ""){
    this.textContent = "X";
}
    else if (this.textContent == "X"){
        this.textContent = "0";
    }
    else {
        this.textContent = '';
    }
}

//Change marke

for(i = 0; i < sqaures.length; i++){
    sqaures[i].addEventListener(click,marker)
}



