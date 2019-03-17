import '../assets/css/style.css';
import '../node_modules/roboto-fontface/css/roboto/roboto-fontface_custom.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/reset.css/reset.css'

import '../src/slider.js';
import Cart from '../src/cart.js';
import DataBase from '../src/database.js';

var dataBase = new DataBase();

dataBase.add({
    name: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    price: 310,
    image: 'assets/images/vanilla.png'
})

dataBase.add({
    name: 'Сливочно-кофейное с кусочками шоколада',
    price: 380,
    image: 'assets/images/chocolate.png'
})

dataBase.add({
    name: 'Сливочно-клубничное с присыпкой из белого шоколада',
    price: 355,
    image: 'assets/images/strawberry.png'
})

dataBase.add({
    name: 'Сливочное крем-брюле с карамельной подливкой',
    price: 415,
    image: 'assets/images/caramel.png'
})

var myCart = new Cart();

dataBase.handler(myCart);
dataBase.renderProduct();

function btnToggle(btnClass, blockClass) {
    var btn = document.querySelector('.' + btnClass),
        block = document.querySelector('.' + blockClass),
        icon = document.querySelector('.' + btnClass + '__icon');

    btn.addEventListener('click', function () {
        block.classList.toggle('hidden');
        btn.classList.toggle('active');
        icon.classList.toggle(btnClass + '__icon_active');
    })
}
btnToggle('cart-btn', 'cart-block__outer');
btnToggle('login-btn', 'login-block__outer');
btnToggle('search-btn', 'search-block__outer');



