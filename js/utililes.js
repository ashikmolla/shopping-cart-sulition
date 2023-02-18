// iPhone 11 128GB Black
//  plus and Minimas button add Event click

function updeteCaseNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
     const phoneNumberFieldvalue = parseInt(phoneNumberFieldString);

     let newPhoneNumberField;

     if(isIncrease){
         newPhoneNumberField = phoneNumberFieldvalue + 1;
     }
     else{
        newPhoneNumberField = phoneNumberFieldvalue - 1;
     }

     phoneNumberField.value =newPhoneNumberField;

     return newPhoneNumberField;


}
function updeteCaseprice(newPhoneNumberField){
    const PhonePrice = newPhoneNumberField * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText= PhonePrice;
};


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumberField = updeteCaseNumber(true);
    updeteCaseprice(newPhoneNumberField)


    // const PhonePrice = newPhoneNumberField * 1219;
    // const phoneTotal = document.getElementById('phone-total');
    // phoneTotal.innerText= PhonePrice;

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumberField = updeteCaseNumber(false);
    updeteCaseprice(newPhoneNumberField)

    // const PhonePrice = newPhoneNumberField * 1219;
    // const phoneTotal = document.getElementById('phone-total');
    // phoneTotal.innerText= PhonePrice;
    
    


    //  function  coll now add event 
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberFieldString = phoneNumberField.value;
    //  const phoneNumberFieldvalue = parseInt(phoneNumberFieldString);
    //  const newPhoneNumberField =phoneNumberFieldvalue - 1;
    //  phoneNumberField.value =newPhoneNumberField

})



 
/*-------------------------

 iPhone 11 Silicone Case - Black
plus and Minimas button add Event click 

---------------------------*/

 function UpdeteBlackNumber(isIncrease){
    const caseNumberField =document.getElementById('case-number-field');
    const caseFieldStringValue =caseNumberField.value;
    const caseFieldValue =parseInt(caseFieldStringValue);
    let newcaseField;

    if(isIncrease){
        newcaseField = caseFieldValue +1;

    }
    else{
        newcaseField = caseFieldValue - 1
    }
    caseNumberField.value =newcaseField;
    return newcaseField;
 }



 function UpdeteBlackprice(newcaseField){
    const PhonePrice = newcaseField * 59;
    const phoneTotal = document.getElementById('case-total');
    phoneTotal.innerText= PhonePrice;
};

 

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newcaseField = UpdeteBlackNumber(true);
    UpdeteBlackprice(newcaseField);




    
    // const caseNumberField =document.getElementById('case-number-field');
    // const caseFieldStringValue =caseNumberField.value;
    // const caseFieldValue =parseInt(caseFieldStringValue);
    // const newcaseField = caseFieldValue + 1;
    // caseNumberField.value =newcaseField;
})
 
document.getElementById('btn-case-minus').addEventListener('click', function(){
  const newcaseField= UpdeteBlackNumber(false);
    UpdeteBlackprice(newcaseField);


    // const caseNumberField =document.getElementById('case-number-field');
    // const caseFieldStringValue =caseNumberField.value;
    // const caseFieldValue =parseInt(caseFieldStringValue);
    // const newcaseField = caseFieldValue - 1;
    // caseNumberField.value =newcaseField;
})
