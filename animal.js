function Animal(){
    this.name="frank";
    this.age=35;
    this.info=function () {
        return this.name + this.age;
    }
}
let animal=new Animal();
console.log(animal.info());

