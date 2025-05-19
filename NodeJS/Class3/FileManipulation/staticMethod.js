class Product {
    static buyProduct(price, discount, vat) {
        return (price -= ((price * discount) / 100)) + ((price * vat) / 100);
    }
}
let price = Product.buyProduct(100, 10, 15);
console.log(price);
