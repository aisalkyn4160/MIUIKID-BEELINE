let productImg = document.getElementsByClassName('img_good');
console.log(productImg[0]);
let productText = document.getElementsByClassName('ttl');
productText[0].innerText = 'T-shirt';

let productPrice = document.getElementsByClassName('price');
productPrice[0].innerHTML = `<div class="price"><span>$12</span><del>$42</del></div>`;

let elements = document.getElementsByClassName('add_cart');
console.log(elements);

function myFunction(){
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.ttl');
    const getPrice = this.parentNode.parentNode.parentNode.querySelectorAll('.price span');
    const getUrlImg = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.img_good');
    const showBasket = `${attribute[0].innerText}/${getPrice[0].innerText}/${getUrlImg[0].getAttribute('src')}`;

    alert(showBasket);
    
};

for (let i=0; i<elements.length; i++){
    elements[i].addEventListener('click', myFunction, false);
};


