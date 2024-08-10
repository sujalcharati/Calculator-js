
const solutiondisplay = document.getElementById("solutiondisplay");
function execution(input) {
    solutiondisplay.style.color = "white";

    solutiondisplay.value += input;
}
function clearEntry() {
    solutiondisplay.value = solutiondisplay.value.slice(0, -1);
}
function clearoutput() {
    solutiondisplay.value = "";
}

function equalsfxn() {
    try {

        solutiondisplay.value = eval(solutiondisplay.value);
    }
    catch (err) {
        const errcolor = solutiondisplay.value = `error`;
        solutiondisplay.style.color = "red";
    }
}
