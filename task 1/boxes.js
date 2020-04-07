$(document).ready(function () {
    $('.box4').hide();
    $('.box5').hide();
    $('.box6').hide();
    $(".slide-toggle1").click(function () {
        $('.box1').toggle('slide',1000);
        $('.box4').delay(500).toggle('slide',1000);
    });

    $(".slide-toggle2").click(function () {
        $('.box2').toggle('slide',1000);
        $('.box5').delay(500).toggle('slide',1000);
    });

    $(".slide-toggle3").click(function () {
        $('.box3').toggle('slide',1000);
        $('.box6').delay(500).toggle('slide',1000);
});

});
