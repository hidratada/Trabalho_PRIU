/*Função ver mais */
$(document).ready(function () {

    $('.tgl').before('<span><font color=red>more »</font></span>');

    $('.tgl').css('display', 'none')

    $('span', '#box-toggle').click(function () {

        $(this).next().slideToggle('slow')

            .siblings('.tgl:visible').slideToggle('fast');

        $(this).toggleText('more »', '« less')

            .siblings('span').next('.tgl:visible').prev()

            .toggleText('more »', '« less')

    });

})
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}