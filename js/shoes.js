$(document).ready(function() {
    $("#products").click(function(){
        $("#medio").load("products.html");
    });
    $("#about").click(function(){
        $("#medio").load("about.html");
    });
    $("#sales").click(function(){
        $("#medio").load("sales.html");
    });
    $("#home").click(function(){
        $("#init").load("indix.html");
    });
});