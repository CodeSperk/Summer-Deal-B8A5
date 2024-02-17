let initialNumber = 1;
let totalPrice = 0;
let discount = 0;

const cards = document.querySelectorAll('.card');
for(let card of cards){
  function handleCart(){
    const title = card.querySelector('h2').innerText;
    const priceValue = card.querySelector('p').innerText.split(' ')[0];
    
    // added items in the cart (inside the ul)
    /* ------------------------
     const container = document.getElementById('item-container');
    const newLi = document.createElement('li');
    newLi.innerText = title;
    container.appendChild(newLi); */
    
    //alternative way to give the number before added items (inside the div)
    const container = document.getElementById('item-container');
    const newP = document.createElement('p');
    newP.innerText = initialNumber + ' ' + title;
    container.appendChild(newP);
    initialNumber++;

    //total price in the cart
    totalPrice = totalPrice + parseFloat(priceValue);
    const totalPriceContainer = document.getElementById('total-price-container');
    totalPriceContainer.innerText = totalPrice.toFixed(2);
    
    //enable coupon & make purchase button
    if(totalPrice>0){
      document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    if(totalPrice>=200){
      document.getElementById('apply-btn').removeAttribute('disabled')
    }

    // grand Total
    const grandTotalContainer = document.getElementById('grand-total');
    grandTotalContainer.innerText = (totalPrice - discount).toFixed(2);
    


  }card.addEventListener('click', handleCart);
}