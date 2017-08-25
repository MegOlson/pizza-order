// Business Logic

function Pizza (size, cheese, sauce, toppings) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price;
}
Pizza.prototype.findPrice = function () {
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
  $(".orderReceipt").append(this.price);
}
// Pizza.prototype.order = function () {
//   return "Your order for a " + this.size + " pizza with a " + this.crust + " with " + this.sauce + " and " + this.cheese + " topped with " + this.toppings + " is " + this.price;
// }
// var display = function() {
//   $(".orderReceipt").text(this.price);
// }

// User Interface Logic
$(document).ready(function(){
  $("#showTotal").click(function(e){
    e.preventDefault();
    var size = $("#chooseSize").val();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var cheese = $("#cheese").val();
    var toppings = [];
    $("input:checked").each(function() {
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(size, crust, sauce, cheese, toppings);
    newPizza.findPrice();
    $("#total").show();
    $("form").hide();
  });
});
