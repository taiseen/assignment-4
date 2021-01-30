// Get all needful elements 
// all +/- buttons 
const plusFirstClassBtn = document.getElementById('plusFirstClassBtn');
const minusFirstClassBtn = document.getElementById('minusFirstClassBtn');
const plusEconomyBtn = document.getElementById('plusEconomyBtn');
const minusEconomyBtn = document.getElementById('minusEconomyBtn');

// input elements
const inputFirstClass = document.getElementById('inputFirstClass');
const inputEconomy = document.getElementById('inputEconomy');

// output elements
const subtotal = document.getElementById('subtotal');
const displayVat = document.getElementById('vat');
const total = document.getElementById('total');

const submit = document.getElementById('submit-btn');


// function for ==> First Class
plusFirstClassBtn.addEventListener('click', () => {
    handleAllAmountChange(inputFirstClass, true);
});

minusFirstClassBtn.addEventListener('click', () => {
    handleAllAmountChange(inputFirstClass, false);
});

// function for ==> Economy Class
plusEconomyBtn.addEventListener('click', () => {
    handleAllAmountChange(inputEconomy, true);
});

minusEconomyBtn.addEventListener('click', () => {
    handleAllAmountChange(inputEconomy, false);
});

submit.addEventListener('click', () => {
    console.log( 'click ');
    submitBtn() ;
});

// just get user inputs
function getInputValue(userInput) {
    let inputValue = parseInt(userInput.value);
    return inputValue;
}

// passengerClass
function handleAllAmountChange(passengerClass, isIncrement) {

    let inputQuantity = getInputValue(passengerClass);
    let needTotal = inputQuantity;

    // for increment
    if (isIncrement == true) {
        needTotal = inputQuantity + 1;
    }

    // for decrement
    if (isIncrement == false && inputQuantity > 0) {
        needTotal = inputQuantity - 1;
    }

    // update current value
    passengerClass.value = needTotal;

    totalCalculation();

}

function totalCalculation() {

    let fastClass = getInputValue(inputFirstClass);
    let economyClass = getInputValue(inputEconomy);

    let totalQuantityPrice = fastClass * 150 + economyClass * 100;

    // update subTotal value
    subtotal.innerText = '$' + totalQuantityPrice;

    // for vat calculation 
    let vat = totalQuantityPrice * .1;
    displayVat.innerText = '$' + vat;

    // for all total calculation 
    let allTotal = totalQuantityPrice + vat;
    total.innerText = '$' + allTotal;


}


function submitBtn() {

    let click = confirm();

    if (click == true) {
        alert("Thank You")
    } else {
        alert("Reserve Again")
    }
}