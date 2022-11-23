$(document).ready( function(){
    $('#headers').click(function(){
        $(this).css("background-color","red");
    })

},
$('#sidebarid').click(function(){
    $(this).text("Left Bar");
}),
$('#extracontentid').click(function(){
    $('#maincontentid').fadeOut(1000);
})

);