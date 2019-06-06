//this code will run after everything loads
$(document).ready(function(){
  $("#survey").submit(function(event) {
      var side1 = parseFloat($("#side1").val());
      var side2 = parseFloat($("#side2").val());
      var side3 = parseFloat($("#side3").val());
      event.preventDefault();

      if(side1 === side2 && side2 === side3) {
        $(".output").text("You made an equilateral triangle!");
      } else if(side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1){
        $(".output").text("You did NOT make a triangle");
      } else if(side1 === side2 || side2 === side3 || side1 === side3) {
        $(".output").text("You made an isosceles triangle!");
      } else if(side1 !== side2 && side2 !== side3 && side1 !== side3) {
        $(".output").text("You made an a scalene triangle");
      }
  });
});
