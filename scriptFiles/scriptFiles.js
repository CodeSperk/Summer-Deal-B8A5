const cards = document.querySelectorAll('.card');
for(let card of cards){
  function handleCart(){
    const title = card.querySelector('h2').innerText;
    const priceValue = card.querySelector('p').innerText.split(' ')[0];
    
    // added items in the cart
    const container = document.getElementById('item-container');
    const newLi = document.createElement('li');
    newLi.innerText = title;
    container.appendChild(newLi);
    



  }card.addEventListener('click', handleCart);
}