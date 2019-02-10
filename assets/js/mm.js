$(document).ready(function(){
    //when a link is clicked, use jquery to go to that href
    $("#graphicOverlay .row ul a.navLinks").click(function(event) {
        event.preventDefault();
        let divTarget = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divTarget).offset().top
        }, 700);
    });
    //Manages scrolltop header.
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('#aboveFold').height()) {
            $('#navRow').addClass("scrollNav");
            if($(window).width() < 768) {
                $('#navRow ul').hide();
            }
        } else if ($('#aboveFold').height() > 0)  {
            $('#navRow').removeClass("scrollNav");
            $('#navRow ul').show();

        }
    });

    $('#hamburgerMenu').click(function(){
        $('.scrollNav#navRow ul').slideToggle();
    });

    $("#bsModal").on("shown.bs.modal", function(e) {
        var link = $(e.relatedTarget).attr("href");
        $(this).find(".modal-content").load(link);
    });

    $("#bsModal").on("hide.bs.modal", function(e) {
        $(this).find(".modal-content").empty();
    });
    $('#formSuccessClose').click(function() {
        $('#submitSuccess').remove();
    })

});	