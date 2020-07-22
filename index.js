var enterBtn = document.getElementById('btn-enter');
var firstPage = document.getElementById('first-page');
var secondPage = document.getElementById('second-page');

// 2nd page Buttons
var depositBtn = document.getElementById('id-btn-deposit');
var withdrawBtn = document.getElementById('id-btn-withdraw');

// 2nd page Text Input Fields
var depositInput = document.getElementById('id-input-deposit');
var withdrawInput = document.getElementById('id-input-withdraw');

// ---------------------------------------------------------------------------------

// get from DISPLAY
function getCurrentAmount (id) {
    var element = document.getElementById(id);
    return Number(element.textContent);
}

// get from input fields
function getFromInput (id) {
    var element = document.getElementById(id);
    return Number(element.value);
}

// update your DISPLAY
function updateAmount (id,amount) {
    var element = document.getElementById(id);
    element.innerHTML = amount;
}

// ---------------------------------------------------------------------------------


// clicked ENTER btn
enterBtn.addEventListener('click', function () {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
});

// clicked DEPOSIT btn
depositBtn.addEventListener('click', function () {
    var deposit = getFromInput('id-input-deposit') + getCurrentAmount('id-display-deposit'); 
    var newBalance = getCurrentAmount('id-display-balance') + getFromInput('id-input-deposit');
    
    updateAmount('id-display-deposit',deposit)
    updateAmount('id-display-balance',newBalance);

    depositInput.value = '';
});

// clicked WITHDRAW btn 
withdrawBtn.addEventListener('click', function () {
    var withdraw = getFromInput('id-input-withdraw') + getCurrentAmount('id-display-withdraw') ; 
    var newBalance = getCurrentAmount('id-display-balance') - getFromInput('id-input-withdraw');
    
    updateAmount('id-display-withdraw',withdraw);
    updateAmount('id-display-balance',newBalance);

    withdrawInput.value = '';

});

