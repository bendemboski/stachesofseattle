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
         '$10 goes to charity' +
         '</div>'
  });
  costBreakdown.click(function(e) {
      e.preventDefault();
  });
});
