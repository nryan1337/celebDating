$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    var age = $("input#age").val();
    age = parseInt(age);

    var shyness = $("#shy").val();

    if (shyness === "yes") {
      $("#legolas").show();
      $("#frodo").hide();
      $("#bilbo").hide();
    } else if (age < 50) {
      $("#frodo").show();
      $("#bilbo").hide();
      $("#legolas").hide();
    } else {
      $("#bilbo").show();
      $("#frodo").hide();
      $("#legolas").hide();
    }

    event.preventDefault();

  });
});
