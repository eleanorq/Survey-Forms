const superhero = $("#superhero").val(); 
const genre = $("input:radio[name=genre]:checked").val();

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const favFoodInput = $("input#favFood").val();
    const favAnimalInput= $("input#favanimal").val();
  });
});