$(document).ready(function () {
    $('.navigation__link').click(function (e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
           scrollTop: $(linkHref).offset().top
        }, 1000);
       e.preventDefault();
    });
});
