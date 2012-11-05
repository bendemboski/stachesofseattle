// Navigation
$(function() {
    $(".js-page-nav").click(function(e) {
        e.preventDefault();
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
