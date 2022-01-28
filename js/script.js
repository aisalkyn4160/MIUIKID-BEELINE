const basket = document.querySelector('.basket');

basket.onclick = () => {
    const dropdown_menu2 = document.querySelector('.dropdown_menu2');
    dropdown_menu2.classList.toggle('show_basket')
}

console.log('hello');