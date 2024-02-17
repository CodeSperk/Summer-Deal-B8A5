let initialNumber = 1;

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


  }card.addEventListener('click', handleCart);
}