// Phone Minus
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone-number", 1200, false, "phone-price");
  calculateTotal();
});

// Phone Plus

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone-number", 1200, true, "phone-price");
  calculateTotal();
});

//----------------------------------------------

// case Minus
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case-number", 60, false, "case-price");
  calculateTotal();
});

// case Plus
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case-number", 60, true, "case-price");
  calculateTotal();
});

//----------------------------------------------

// laptop Minus
document.getElementById("laptop-minus").addEventListener("click", function () {
  updateProductNumber("laptop-number", 13400, false, "laptop-price");
  calculateTotal();
});

// laptop Plus
document.getElementById("laptop-plus").addEventListener("click", function () {
  updateProductNumber("laptop-number", 13400, true, "laptop-price");
  calculateTotal();
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

// sub total
function calculateTotal() {
  const laptopField = document.getElementById("laptop-number");
  const laptopNumber = parseInt(laptopField.value);
  const laptopTotal = laptopNumber * 13400;

  const phoneField = document.getElementById("phone-number");
  const phoneNumber = parseInt(phoneField.value);
  const phoneTotal = phoneNumber * 1200;

  const caseField = document.getElementById("case-number");
  const caseNumber = parseInt(caseField.value);
  const caseTotal = caseNumber * 60;

  const subTotal = document.getElementById("sub-total");
  let subTotalValue = parseInt(subTotal.innerText);
  subTotalValue = laptopTotal + phoneTotal + caseTotal;
  subTotal.innerText = subTotalValue;
  //   tax total
  const tax = subTotalValue / 10;
  document.getElementById("tax-amount").innerText = tax;
  //   Grand total
  const total = subTotalValue + tax;
  document.getElementById("total").innerText = total;
}

// check Out

document.getElementById("check-out").addEventListener("click", function () {
  window.location.href = "phone.html";
});
