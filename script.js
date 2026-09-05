function num(x) {
    document.getElementById("display").value += x;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteNum() {
    let a = document.getElementById("display").value;

    let newValue = "";

    for (let i = 0; i < a.length - 1; i++) {
        newValue += a[i];
    }

    document.getElementById("display").value = newValue;
}

function calculate() {
    let a = document.getElementById("display").value;

    if (a == "") {
        document.getElementById("display").value = 0;
    } else {
        document.getElementById("display").value = eval(a);
    }
}