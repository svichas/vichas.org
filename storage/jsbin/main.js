
$(function() {
    
    $(".section").eq(0).addClass("active");

    $('.mainContainer').on('mousewheel', function(event) {
        console.log(event.deltaX, event.deltaY, event.deltaFactor);
    });

});
