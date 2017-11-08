$(document).ready(function() {
  $("#addButton").on("click", function() {
    $.getJSON("http://fakerestapi.azurewebsites.net", function(json) {
      $(".message").html(JSON.stringify(json));
    });
  });
});
