    // Navbar Shrinks on scroll=====================
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-52px";
        }
        prevScrollpos = currentScrollPos;
    }

    // Navbar Bg on scroll=====================
    $(document).ready(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 80) {
                $("#navbar").addClass("nav-bag");
            }

            else {
                $("#navbar").removeClass("nav-bag");
            }
        })
    });

    // Data Aos=====================
    AOS.init({
        duration: 1200,
    });

    // Preloader=====================
    $(window).load(function () {
        $(".pageloader").fadeOut("slow");;
    });

    // Scroll top btn=====================
    $(document).ready(function () {

        var scrollTop = $("#myBtn");

        $(window).scroll(function () {

            var topPos = $(this).scrollTop();

            if (topPos > 80) {
                $(scrollTop).css("opacity", "1");

            } else {
                $(scrollTop).css("opacity", "0");
            }

        });
        
        $(scrollTop).click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1);
            return false;
        });
    });


    // Footer Btn

    $(document).ready(function(){
        $("#footer-btn").click(function(){
            $(".footer").toggleClass("hide");
        });
    });