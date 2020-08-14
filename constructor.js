function Product(name, price){
    this.name = name;
    this.price = price;
    this.getInfo = function() {
        return "Prodcut " + this.name + " $" + this.price;
    };
}
let product = new Product("fish", 4);
console.log(product.getInfo());