// Business Logic

function Pizza (size, base, toppings) {
  this.size = size;
  this.base = base;
  this.toppings = toppings;
  this.total = 0;
}
Pizza.prototype.sizeCost = function () {
  if (this.size = "small") {
    this.total += 5;
  } else if (this.size = "medium") {
    this.total += 7;
  } else {
    this.total += 11;
  }
}
// Pizza.prototype.


// User Interface Logic
$(document).ready(function(){
  $("#choose-size").click(function(e){
    e.preventDefault();
    var size = $("#chooseSize").val();
    $("#base").show();
    $("#size").hide();
  });
  $("#choose-base").click(function(e){
    e.preventDefault();
    $("#toppings").show();
    $("#base").hide();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var cheese = $("#cheese").val();
  });
  $("#showTotal").click(function(e){
    e.preventDefault();
    $("#total").show();
    $("#toppings").hide();
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsTotal = $(this).val();
    });
  });
});
