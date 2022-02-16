let productImg = document.getElementsByClassName('img_good');
console.log(productImg[0]);
let productText = document.getElementsByClassName('ttl');
productText[0].innerText = 'T-shirt';

let productPrice = document.getElementsByClassName('price');
productPrice[0].innerHTML = `<div class="price"><span>$12</span><del>$42</del></div>`;

let elements = document.getElementsByClassName('add_cart');
console.log(elements);

// function myFunction(){
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.ttl');
//     const getPrice = this.parentNode.parentNode.parentNode.querySelectorAll('.price span');
//     const getUrlImg = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.img_good');
//     const showBasket = `${attribute[0].innerText}/${getPrice[0].innerText}/${getUrlImg[0].getAttribute('src')}`;

//     alert(showBasket);
    
// };

// for (let i=0; i<elements.length; i++){
//     elements[i].addEventListener('click', myFunction, false);
// };


// Добавление товара в корзину
// function myFunction(){
//     document.getElementById("myCheck").click();
// }

let cN =document.getElementsByClassName('add_cart');
console.log(cN);

let myFunction = function(evt){
    evt.preventDefault();
    let attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.ttl');
    let getPrice = this.parentNode.parentNode.parentNode.querySelectorAll('.price span');
    let getUrlImg = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.img_good');

    let create_li = document.createElement('li')

    console.log();
    console.log();
    console.log();

    create_li.innerHTML = ' <div class="bag_img">\
                                            <a href="?search=#">\
                                                <img src="'+getUrlImg[0].src+'">\
                                            </a>\
                                        </div>\
                                        <div class="bag_info">\
                                            <p class="info_title"> <a href="?search=#">'+attribute[0].innerText+'</a> </p>\
                                            <div class="info_price">\
                                                <span>'+getPrice[0].innerText+'</span>\
                                                <del>$42.00</del>\
                                            </div>\
                                            <div class="trash">\
                                                <a href="?search=#"><i class="fas fa-trash"></i></a>\
                                            </div>\
                                        </div>';
                            
    let block_cart = document.querySelector('.dropdown_menu2 ul');
    block_cart.appendChild(create_li);
    
    alert('Товары успешно добавлены в корзину');
    
}

for (let i=0; i< cN.length; i++){
    cN[i].addEventListener('click', myFunction,false);
}