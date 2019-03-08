
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



