$(document).ready(function() {
  $("#formOne").submit(function(event) {
    

    let food = $("input#food").val();
    let animal = $("input#animal").val();
    let place = $("input#place").val();
    let movie = $("input#movie").val();
    let seltzer = $("input#seltzer").val();

    let favorites = [food, animal, place, movie, seltzer];
   
    $(".favorites").text(favorites);
    
    
    event.preventDefault();
  });
});