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

    totalCalculation(passengerClass , needTotal) ;
  
}

function totalCalculation(passengerClass , totalSeat){

    let totalQuantityPrice = 0;
    if (passengerClass == inputFirstClass) {
        totalQuantityPrice = totalSeat * 150;
    } else {
        totalQuantityPrice = totalSeat * 100;
    }

    // update subTotal value
    subtotal.innerText = '$' + totalQuantityPrice;

    // for vat calculation 
    let vat = totalQuantityPrice * .1 ;
    displayVat.innerText = '$' + vat ;

    // for all total calculation 
    let allTotal = totalQuantityPrice + vat ;
    total.innerText = '$' + allTotal ;
}