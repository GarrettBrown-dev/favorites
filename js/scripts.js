$(document).ready(function() {
  $("#formOne").submit(function(event) {
    

    let food = $("input#food").val();
    let animal = $("input#animal").val();
    let place = $("input#place").val();
    let movie = $("input#movie").val();
    let seltzer = $("input#seltzer").val();

    let favorites = [food, animal, place, movie, seltzer];
    let someFavorites = [];
    let favoriteTwo = favorites[1];
    let favoriteOne = favorites[0];
    let favoriteThree = favorites[2];

    someFavorites.push(favoriteTwo);
    someFavorites.push(favoriteOne);
    someFavorites.push(favoriteThree);


    $(".favoriteTwo").text(someFavorites[0]);
    $(".favoriteOne").text(someFavorites[1]);
    $(".favoriteThree").text(someFavorites[2]);
   
    $(".favorites").text(favorites);
    
    
    event.preventDefault();
  });
});