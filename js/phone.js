
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        if (phoneNumberString > 0) {
            newPhoneNumber = previousPhoneNumber - 1;
        } else {
            newPhoneNumber = previousPhoneNumber - 0;
        }
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}










document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // add phone item 
    const newPhoneNumber = updatePhoneNumber(true);
    //   updete orice 
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();




});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // minus phone item 
    const newPhoneNumber = updatePhoneNumber(false);
    //   updete orice 
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

  
})

