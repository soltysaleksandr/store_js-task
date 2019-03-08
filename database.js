var Product = (function () {
    var id = 1;
    return function (params) {
        this.id = 'ice-' + id++;
        this.name = params.name;
        this.price = params.price;
        this.image = params.image;
    }
}())

function DataBase() {
    this.products = [];
}

DataBase.prototype.add = function (params) {
    this.products.push(
        new Product(params)
    );
}

DataBase.prototype.renderProduct = function () {
    var mainContentHits = document.querySelector('.hits');

    this.products.forEach(function (item) {
        mainContentHits.insertAdjacentHTML('afterbegin',
            '<div class="hits-item__outer" data-id="' + item.id + '">\
                <div class="hits-item">\
                    <div class="hits-item__inner">\
                        <img class="hits-item__img" src="' + item.image + '" alt="vanilla">\
                        <h3 class="hits-item__price">\
                            <span class="hits-item__text">' + item.price + '</span>/кг\
                        </h3>\
                        <div class="hits-item__label"></div>\
                    </div>\
                    <p class="hits-item__description">' + item.name + '</p>\
                    <input type="button" class="hits-item__btn btn btn_md" value="Быстрый просмотр">\
                </div>\
            </div>')
    })
}


DataBase.prototype.handler = function (cart) {
    var self = this,
        mainContentHits = document.querySelector('.hits');

    mainContentHits.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== this) {
            if (target.className === 'hits-item__outer') {
                self.addProduct(cart, target);
            }
            target = target.parentNode;
        }
    })
}

DataBase.prototype.addProduct = function (cart, target) {
    this.products.filter(function (item) {
        if (item.id === target.dataset.id) {
            cart.addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                qnty: 1
            })
        }
    })
}


var dataBase = new DataBase();

dataBase.add({
    name: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    price: 310,
    image: 'images/vanilla.png'
})

dataBase.add({
    name: 'Сливочно-кофейное с кусочками шоколада',
    price: 380,
    image: 'images/chocolate.png'
})

dataBase.add({
    name: 'Сливочно-клубничное с присыпкой из белого шоколада',
    price: 355,
    image: 'images/strawberry.png'
})

dataBase.add({
    name: 'Сливочное крем-брюле с карамельной подливкой',
    price: 415,
    image: 'images/caramel.png'
})