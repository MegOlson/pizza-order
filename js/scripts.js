// Business Logic

function Pizza (size, cheese, sauce, topping) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.topping = topping;
  this.price;
}
Pizza.prototype.findPrice = function (size) {
  this.price = 5;
  if (this.size === "Small") {
    this.total += 2;
  } else if (this.size === "Medium") {
    this.price += 4;
  } else if (this.size === "Large"){
    this.price += 6;
  } if (this.crust === "Classic Crust") {
    this.price += 0;
  } else if (this.crust === "Thin Crust"){
    this.price -= 1;
  } if (this.cheese === "No Cheese") {
    this.price -= 1;
  } else if (this.cheese === "Mozzerella" || this.cheese === "Cheddar") {
    this.price += 0;
  } for (var i = 0; i < this.toppings.length; i++) {
    this.price += 1;
  }
  console.log(this.price);
}
// Pizza.protoype.order = function () {
//   return "Your order for a " + this.size + " pizza with a " + this.crust + " with " + this.sauce + " and " + this.cheese + " topped with " + this.toppings + " is " + this.price;
// }
// var display = function() {
//
// }


// User Interface Logic
$(document).ready(function(){
  $("#order").click(function(e){
    e.preventDefault();
    var size = $("#chooseSize").val();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var cheese = $("#cheese").val();
    var topping = $("input:checkbox[name=topping]:checked").map(function(){

    var newPizza = new Pizza(size, crust, sauce, cheese, topping);
    // $("#showTotal").click(function(e){
    //   e.preventDefault();
      // $("#total").show();
      // $("#toppings").text(newPizza.topping.join(", "));
    // });
  });
});
