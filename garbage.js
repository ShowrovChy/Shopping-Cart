// Phone Minus
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone-number", 1200, false, "phone-price");
  calculateTotal();
  /*   const phoneInput = document.getElementById("phone-number");
  let phoneNumber = phoneInput.value;
  if (phoneInput.value > 0) {
    phoneNumber = parseInt(phoneNumber) - 1;
    phoneInput.value = phoneNumber; */

  // update  Mobile total price
  /*   const phonePrice = document.getElementById("phone-price");
  phonePrice.innerText = 1200 * phoneNumber; */
  // }
});

// Phone Plus Button

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone-number", 1200, true, "phone-price");
  calculateTotal();

  /*   const phoneInput = document.getElementById("phone-number");
  let phoneNumber = phoneInput.value; //1
  phoneNumber = parseInt(phoneNumber) + 1;
  phoneInput.value = phoneNumber; */

  // update  Mobile total price
  // const phonePrice = document.getElementById("phone-price");
  // phonePrice.innerText = 1200 * phoneNumber;

  // Update Sub-total Amount
  // const subTotal = document.getElementById("sub-total");
  // subTotal.innerText = 1200 * phoneNumber;
});

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// case Minus
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case-number", 60, false, "case-price");
  calculateTotal();

  /*   const caseInput = document.getElementById("case-number");
  let caseNumber = caseInput.value;
  if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
    caseInput.value = caseNumber; */

  // Update Case total Price
  // const casePrice = document.getElementById("case-price");
  // casePrice.innerText = 60 * caseNumber;
  // }
});

// case Plus
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case-number", 60, true, "case-price");
  calculateTotal();

  /*   const caseInput = document.getElementById("case-number");
  let caseNumber = caseInput.value;
  caseNumber = parseInt(caseNumber) + 1;
  caseInput.value = caseNumber; */

  // Update case  total Price
  // const casePrice = document.getElementById("case-price");
  // casePrice.innerText = 60 * caseNumber;

  // // Update Sub-total Amount
  // const subTotal = document.getElementById("sub-total");
  // subTotal.innerText = 60 * caseNumber;
});

// Get Increase and Decrease--------->

function updateProductNumber(number, Price, isIncrease, productPrice) {
  const productInput = document.getElementById(number);
  let productNumber = productInput.value;
  if (isIncrease == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productInput.value > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update total price ----->

  const totalPrice = document.getElementById(productPrice);
  totalPrice.innerText = productNumber * Price;
}
/* // update total price ----->
function getUpdatePrice(productPrice) {
  const totalPrice = document.getElementById(productPrice);
  totalPrice.innerText = totalPrice * ;
} */

// sub total

function calculateTotal() {
  const phoneInput = document.getElementById("phone-number");
  const phoneNumber = parseInt(phoneInput.value);
  const phoneTotal = phoneNumber * 1200;
  const caseInput = document.getElementById("case-number");
  const caseNumber = parseInt(caseInput.value);
  const caseTotal = caseNumber * 60;
  const subTotalValueText = document.getElementById("sub-total");
  let subTotalValue = parseInt(subTotalValueText.innerText);
  subTotalValue = phoneTotal + caseTotal;
  subTotalValueText.innerText = subTotalValue;

  // tax total
  const tax = subTotalValue / 10;
  document.getElementById("tax-amount").innerText = tax;
  // Grand total
  const total = subTotalValue + tax;
  document.getElementById("total").innerText = total;
}
