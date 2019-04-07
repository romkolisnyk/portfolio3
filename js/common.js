$(window).on("load", function () {
  var d = $(".loader");
  d.find(".loader-inner").fadeOut(),
    d.delay(300).fadeOut("slow")
});
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $(".header").css("background-color", "#fffffff7");
    }
    if ($(this).scrollTop() < 150) {
      $(".header").css("background-color", "transparent");
    }
  });

  $(".toggle_menu").click(function() {
    $(".sandwich").toggleClass("active");
    $(".mobile-menu").slideToggle("fast");
    $(".header").css("background-color", "#fff");
  });
  $(".mobile-menu .dropdown__button").click(function() {
    $(".mobile-menu .dropdown__list").toggleClass("active");
    $(".mobile-menu .arrow").toggleClass("active");
  });

  $(".testimonials__items").slick({
    dots: true,
    slidesToShow: 1
  });
  $(".bidding__items").slick({
    dots: true,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      var title = $(slider.$slides[i]).data("title");
      return (
        '<button type="button" role="tab"><a>' +
        (i + 1) +
        '</a></button><a class="stage">' +
        title +
        "</a>"
      );
    }
  });
  $(".pricing__items").slick({
    dots: true,
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 1024,
        settings: "slick"
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 1
        }
      }
    ],
    customPaging: function(slider, i) {
      var title = $(slider.$slides[i]).data("title");
      return '<a class="stage">' + title + "</a>";
    }
  });

  $(".nav .menu__link.dropdown").click(function() {
    $(".menu__dropdown").slideToggle("fast");
    $(".menu__link .arrow").toggleClass("active");
    $(".menu__link.dropdown").toggleClass("active");
  });
	$(".faq__title-container").on("click", function () {
		
		$(this).next().is(":visible") ? ($(this).next().slideUp(),
			$(this).find(".faq__arrow").removeClass("open")) : ($(".faq__title-container").find(".faq__arrow").removeClass("open"),
				$(this).find(".faq__arrow").addClass("open"),
				$(".faq").find(".item__content").slideUp(),
				$(this).next().slideDown())
	}),

  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000,
      "swing"
    );
  });

  $("#item-tab-1").click(function() {
    $(".grid-nav-item").removeClass("active"),
      $(".grid-item").removeClass("active"),
      $(this).addClass("active"),
      $("#e-item").addClass("active");
  }),
    $("#item-tab-2").click(function() {
      $(".grid-nav-item").removeClass("active"),
        $(".grid-item").removeClass("active"),
        $(this).addClass("active"),
        $("#w-item").addClass("active");
    }),
    $("#item-tab-3").click(function() {
      $(".grid-nav-item").removeClass("active"),
        $(".grid-item").removeClass("active"),
        $(this).addClass("active"),
        $("#p-item").addClass("active");
    }),
    // Form functions

    function t(e, t) {
      t
        ? (($("#" + e).disabled = !0), $("#" + e).css("cursor", "default"))
        : (($("#" + e).disabled = !1), $("#" + e).css("cursor", "pointer"));
    };

  function i(e, t) {
    t
      ? $("#" + e).css("visibility", "visible")
      : $("#" + e).css("visibility", "hidden");
  }

  function n(e, t) {
    i("message", e), t && $("#message").html(t);
  }

  function o() {
    document.getElementById("captcha").src =
      "/captcha.php?rnd=" + Math.random();
  }

  $(function() {
    var e = $(".name"),
      t = $(".email"),
      i = $(".captcha"),
      n = $(".message");

    e.blur(function() {
      "" == $(this).val()
        ? $(this).addClass("on-error-js")
        : $(this).hasClass("on-error-js") && $(this).removeClass("on-error-js");
    }),
      i.blur(function() {
        "" == $(this).val()
          ? $(this).addClass("on-error-js")
          : $(this).hasClass("on-error-js") &&
            $(this).removeClass("on-error-js");
      }),
      t.blur(function() {
        var e = $(this).val(),
          t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;
        t.test(e)
          ? $(this).hasClass("on-error-js") &&
            $(this).removeClass("on-error-js")
          : $(this).addClass("on-error-js");
      }),
      n.blur(function() {
        "" == $(this).val()
          ? $(this).addClass("on-error-js")
          : $(this).hasClass("on-error-js") &&
            $(this).removeClass("on-error-js");
      });
  });

  $(".dep-result").on("click", function() {
    $(".cs-wrap").slideToggle();
    $(this).toggleClass("rotate");
    $(".department-data-wrap").toggleClass("border");
  }),
    $(".cs-wrap label").on("click", function() {
      var e = $(this)
        .find("input")
        .val();
      $(this)
        .parent()
        .slideUp()
        .end()
        .closest(".department-data")
        .find(".dep-result")
        .text(e),
        $(".dep-result").addClass("selected"),
        $(this)
          .closest(".department-data")
          .removeClass("on-error-js");
    }),
    $('button[type="submit"]').click(function(o) {
      "" == e.val() && e.addClass("on-error-js"),
        "" == t.val() && t.addClass("on-error-js"),
        "" == n.val() && n.addClass("on-error-js"),
        "" == i.val()
          ? i.addClass("on-error-js")
          : i.removeClass("on-error-js"),
        "choose department" ==
          $(".dep-result")
            .text()
            .toLowerCase() && $(".department-data").addClass("on-error-js"),
        $(".on-error-js").length > 0 && o.preventDefault(),
        $(".success").text("");
    });

  // Form functions

  $("input, textarea, .captcha").focus(function() {
    $(this)
      .parents(".input-effect")
      .addClass("focused");
  });

  $("input, textarea, .captcha").blur(function() {
    var inputValue = $(this).val();
    if (inputValue == "") {
      //$(this).removeClass('filled');
      $(this)
        .parents(".input-effect")
        .removeClass("focused");
    }
  });
});
