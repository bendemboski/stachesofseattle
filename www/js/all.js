// Navigation
$(function() {
    $(".js-page-nav").click(function(e) {
        e.preventDefault();
        $(e.currentTarget).closest(".modal").modal('hide');
        var id = $(e.currentTarget).attr("href");
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    $(".js-scroll-top").click(function(e) {
        $('html,body').animate({
            scrollTop: 0
        });
    });
});

// Buy link
$(function() {
    $(".js-buy-link").click(function(e) {
        e.preventDefault();
        $(e.currentTarget).closest("form").submit();
    });
});

$(function() {
  var costBreakdown = $(".js-cost-breakdown");
  costBreakdown.popover({
     html: true,
     trigger: 'hover',
     placement: 'top',
     title: "Approximate cost breakdown",
     content: '<div class="ui-font-small">' +
         '$4 goes to printing costs<br/>' +
         '$1 goes to PayPal<br/>' +
         '$10 goes to charity<br/>' +
         '<b>$15 total</b>' +
         '</div>'
  });
  costBreakdown.click(function(e) {
      e.preventDefault();
  });
});

$(function() {
  $("#welcome-modal").modal('show');
  var carousel = $("#welcome-modal-carousel");

  // Use the default transition interval, but do the first transition after
  // 2 seconds
  carousel.carousel({ pause: false });
  setTimeout(function() {
      carousel.carousel('next');
  }, 2000);
});

$(function() {
  var factory = function(placement) {
    var fn = function() {
      var el = $(this);
      el.popover({
        html: true,
        trigger: 'hover',
        placement: placement,
        animation: false,
        content: function(e) {
          return '<img width="' + el.attr("data-width") +
            '" height="' + el.attr("data-height") +
            '" src="' + el.attr("href") + '"/>';
        }
      });
    };
    return fn;
  };

  $(".js-calendar-top-row .js-calendar-pic-set").each(factory('top'));
  $(".js-calendar-bottom-row .js-calendar-pic-set").each(factory('top'));
});
