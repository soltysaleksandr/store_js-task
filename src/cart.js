function Cart() {
    this.list = [];
    this.init();
}

Cart.prototype.init = function () {
    this.removeProduct();
    this.checkout();
}

Cart.prototype.addToCart = function (params) {
    var product = this.list.find(function (item) {
        return item.id === params.id
    })
    if (product) product.qnty += 1;
    if (!product) this.list.push(params);
    this.renderCartItem();
}

Cart.prototype.renderCartItem = function () {
    var self = this,
        goodsList = document.querySelector('.goods-list'),
        sumValue = document.querySelector('.cart-block__sum-value');

    goodsList.innerHTML = '';

    this.list.forEach(function (item) {
        goodsList.insertAdjacentHTML('afterbegin',
            '<li class="goods-list__item goods-item" data-id="' + item.id + '">\
                <span class="goods-item__remove-btn fa fa-times"></span>\
                <img src="' + item.image + '" alt="" class="goods-item__img">\
                <span class="goods-item__product-name">' + item.name + '</span>\
                <span class="goods-item__quantity">' + item.qnty + ' кг</span>\
                <span class="goods-item__price">' + item.price * item.qnty + ' руб.</span>\
            </li>'
        )
        sumValue.textContent = self.getSum();
    })
    this.isEmpty();
}

Cart.prototype.isEmpty = function () {
    var cartBtnIcon = document.querySelector('.cart-btn__icon'),
        qntyValue = document.querySelector('.cart-btn__text'),
        sumValue = document.querySelector('.cart-block__sum-value');

    if (this.list.length) {
        qntyValue.textContent = this.getQnty() + ' товаров';
        cartBtnIcon.classList.add('cart-btn__icon_not-empty');
    } else {
        qntyValue.textContent = 'пусто';
        sumValue.textContent = '0';
        cartBtnIcon.classList.remove('cart-btn__icon_not-empty');
    }
}

Cart.prototype.getQnty = function () {
    return this.list.reduce(function (acc, currentValue) {
        return acc + currentValue.qnty;
    }, 0)
}

Cart.prototype.getSum = function () {
    return this.list.reduce(function (acc, currentValue) {
        return acc + currentValue.price * currentValue.qnty;
    }, 0)
}

Cart.prototype.removeProduct = function () {
    var self = this,
        goodsList = document.querySelector('.goods-list');

    goodsList.addEventListener('click', function (event) {
        var target = event.target,
            btn = target.classList.contains('goods-item__remove-btn');
        if (btn) {
            self.list.splice(self.list.findIndex(function (item) {
                return target.parentElement.dataset.id === item.id;
            }), 1)
            self.renderCartItem();
        }
    })
}

Cart.prototype.checkout = function () {
    var self = this,
        checkoutBtn = document.querySelector('.cart-block__checkout-btn');

    checkoutBtn.addEventListener('click', function () {
        var outgoingData = self.list.slice();
        self.list = [];
        console.log(outgoingData);
        self.renderCartItem();
    })
}

export default Cart;