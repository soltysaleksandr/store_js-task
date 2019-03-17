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
    var product = this.products.find(function (item) {
        return item.id === target.dataset.id;
    })
    
    if (product) {
        cart.addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qnty: 1
        })
    }
}

export default DataBase;