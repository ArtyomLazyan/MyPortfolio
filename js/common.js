$(function() {

    /* Modal portfolio */
    $(".portfolio-block").click(function() {
        // vercnum e nkari src u poxum 
        $att = $(this).children().attr("src");
        $(".modal-content").attr("src", $att);

        // description
        $description = $(this).find(".des").text();
        $(".caption").html($description);

        $(".modal").css("display", "block");
    });

    $(".close").click(function() {
        $(".modal").css("display", "none");
    });
    /*_--------- modal ----------*/


    // animations 
    $(window).scroll(function() {

        if ($(this).scrollTop() > 450) {
            $(".bar-chart li").addClass("animated fadeInUp");
        }
        if ($(this).scrollTop() > 1000) {
            $(".process-text").addClass("animated fadeInLeft");
            $(".development-img").addClass("animated fadeInRight");
        }

        if ($(this).scrollTop() > 1700) {
            $("#portfolio .block").addClass("animated fadeIn");
        }

        if ($(this).scrollTop() > 2100) {
            $(".form").addClass("animated fadeInUp");
        }
    });



    // scroll nav animate
    $(".nav a, .top, .navbar-bottom a").mPageScroll2id({
        offset: 0, // nra hamara vor cheta kpni verevin mi qich margin top unena 
        scrollSpeed: 700 // aragutyunna 
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
