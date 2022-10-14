
document.getElementById("sumvalue").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #55197d 0%, #55197d ' + value + '%, gray ' + value + '%, gray 100%)';
    document.getElementById("sum").value = this.value*15;
    let percent = 0.09/(12/(document.getElementById("monthvalue").value*3));
    let summ = this.value*15+(this.value*15*percent);
    document.getElementById("endValue").innerHTML = "Kredīta summa  " + String(summ.toFixed(2)) + "€";
    document.getElementById("everyMonth").innerHTML = (summ/(document.getElementById("monthvalue").value*3)).toFixed(2);
};

document.getElementById("monthvalue").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #55197d 0%, #55197d ' + value + '%, gray ' + value + '%, gray 100%)';
    document.getElementById("month").value = String(this.value*3) + " mēn" ;   
    let percent = 0.09/(12/(this.value*3));
    let summ = document.getElementById("sumvalue").value*15+(document.getElementById("sumvalue").value*15*percent);
    document.getElementById("endValue").innerHTML = "Kredīta summa  " + String(summ.toFixed(2)) + "€";
    document.getElementById("everyMonth").innerHTML = (summ/(this.value*3)).toFixed(2);
};



function changemonth() {
    let doc = document.getElementById("monthvalue")
    doc.value = document.getElementById("month").value/3;
    let percent = 0.09/(12/(doc.value*3));
    let summ = document.getElementById("sumvalue").value*15+(document.getElementById("sumvalue").value*15*percent);
    document.getElementById("endValue").innerHTML = "Kredīta summa  " + String(summ.toFixed(2)) + "€";
    document.getElementById("everyMonth").innerHTML = (summ/(doc.value*3)).toFixed(2);
    let value = (doc.value-doc.min)/(doc.max-doc.min)*100;
    doc.style.background = 'linear-gradient(to right, #55197d 0%, #55197d ' + value + '%, gray ' + value + '%, gray 100%)';
}

function changesum() {
    let doc = document.getElementById("sumvalue")
    doc.value = document.getElementById("sum").value/15;
    let percent = 0.09/(12/(document.getElementById("monthvalue").value*3));
    let summ = doc.value*15+(doc.value*15*percent);
    document.getElementById("endValue").innerHTML = "Kredīta summa  " + String(summ.toFixed(2)) + "€";
    document.getElementById("everyMonth").innerHTML = (summ/(document.getElementById("monthvalue").value*3)).toFixed(2);
    let value = (doc.value-doc.min)/(doc.max-doc.min)*100;
    doc.style.background = 'linear-gradient(to right, #55197d 0%, #55197d ' + value + '%, gray ' + value + '%, gray 100%)';
}

let count = 0;

function sumdata() {
    count++;
}

function monthdata() {
    count++;
}

function suminput() {
    count++;
}

function monthinput() {
    count++;
}

function submit() {
    alert(count, "submitted")
    alert( document.getElementById("everyMonth").innerHTML)
    alert(document.getElementById("endValue").innerHTML)
}
