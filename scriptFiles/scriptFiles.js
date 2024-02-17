let initialNumber = 1;
let totalPrice = 0;
let discount = 0;

const cards = document.querySelectorAll(".card");
for (let card of cards) {
  function handleCart() {
    const title = card.querySelector("h2").innerText;
    const priceValue = card.querySelector("p").innerText.split(" ")[0];

    // added items in the cart (inside the ul)
    /* ------------------------
     const container = document.getElementById('item-container');
    const newLi = document.createElement('li');
    newLi.innerText = title;
    container.appendChild(newLi); */

    //alternative way to give the number before added items (inside the div)
    const container = document.getElementById("item-container");
    const newP = document.createElement("p");
    newP.innerText = initialNumber + " " + title;
    container.appendChild(newP);
    initialNumber++;

    //total price in the cart
    totalPrice = totalPrice + parseFloat(priceValue);
    const totalPriceContainer = document.getElementById(
      "total-price-container"
    );
    totalPriceContainer.innerText = totalPrice.toFixed(2);

    //enable coupon & make purchase button
    if (totalPrice > 0) {
      document.getElementById("purchase-btn").removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
      const inputEl = document.getElementById("coupon-input-field");
      inputEl.removeAttribute("disabled");
      inputEl.classList.add("border-[#E527B2]");
      const applyBtn = document.getElementById("apply-btn");
      applyBtn.removeAttribute("disabled");

      applyBtn.addEventListener("click", function () {
        const inputValue = inputEl.value;
        if (inputValue === "SELL200") {
          discount = totalPrice * 0.2;


          //set discount
          document.getElementById('discount').innerText = discount.toFixed(2);

          // grand Total
          const grandTotalContainer = document.getElementById("grand-total");
          grandTotalContainer.innerText = (totalPrice - discount).toFixed(2);

          alert("You got 20% discount.");
        } else {
          alert("Please, enter valid coupon.");
        }
      });
    }
    const grandTotalContainer = document.getElementById("grand-total");
    grandTotalContainer.innerText = (totalPrice - discount).toFixed(2);

    // to go home and clear the History
  document.getElementById("modal-btn").addEventListener("click", function () {
    document.getElementById("coupon-input-field").value = "";
    document.getElementById("item-container").innerHTML = "";
    document.getElementById("total-price-container").innerText = "0.00";
    document.getElementById("discount").innerText = "0.00";
    document.getElementById("grand-total").innerText = "0.00";
    document.getElementById("apply-btn").setAttribute("disabled", "disabled");
    document.getElementById("coupon-input-field").setAttribute("disabled", "disabled");
    document
      .getElementById("purchase-btn")
      .setAttribute("disabled", "disabled");

    // to remove previous count
    totalPrice = 0;
  });
  return totalPrice;

  }
  card.addEventListener("click", handleCart);
}


