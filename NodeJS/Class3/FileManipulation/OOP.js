class Product {
    constructor(vat) {
        this.vat = vat
    }
    buyProduct(price, discount) {
        return (price -= ((price * discount) / 100)) + ((price * this.vat) / 100);
    }
}
class Shirt extends Product {
}
let el = new Shirt(25);
let price = el.buyProduct(100, 20);
console.log(price);
