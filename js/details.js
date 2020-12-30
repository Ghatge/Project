$(function() {

    let breeds = JSON.parse(localStorage["breed"]);
    $("span.breed_name").text(breeds.name);
    $("img.breed_image")
        .attr("src",`images/${breeds.pictures.large}`)
        .attr("alt",breeds.name);
    $("span.breed_text").text(breeds.text);
    $("span.breed_link").html(breeds.link);
});