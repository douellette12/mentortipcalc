var numberOfPeople = document.getElementById("numpeople");
var resetBtn = document.getElementById("resetbtn");
function getTipVal() {
    var tipradio = document.getElementsByName('tipval');
    var tipval;
    var custom = document.getElementById("tipcustom");
    tipradio.forEach(element => {
        if (element.checked){
            tipval = parseFloat(element.value);
        }
        else if (custom.value != ""){
            tipval = parseFloat(custom.value) / 100;
        }
    });
    return tipval;
}

function calculate()
{
    var num = numberOfPeople.value;
    num = parseInt(num);
    var tipval = getTipVal();
    var billval = document.getElementById("bill").value;
    billval = parseFloat(billval);
    var billSplit = billval / num;
    var tipPerPerson = billSplit * tipval;
    var totalPerPerson = billSplit + tipPerPerson;
    return [tipPerPerson, totalPerPerson];
}

numberOfPeople.addEventListener("change", function(){
    if (document.getElementById("bill").value != 0){
        const [tip, total] = calculate();
        var tipText = document.getElementById("tip");
        tipText.innerHTML = "$" + Math.round((tip + Number.EPSILON) * 100) / 100;
        var totalText = document.getElementById("total");
        totalText.innerHTML = "$" + Math.round((total + Number.EPSILON) * 100) / 100;
    }
});

function clearFields()
{
    document.getElementById("bill-form").reset();
    document.getElementById("tip").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
}

resetBtn.addEventListener("click", function (){
    clearFields();
})





