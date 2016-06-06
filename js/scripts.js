$(function () {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $('.' + blank).text(userInput);
    });

    $('#story').show();

  });
  //
  // $('#emptyletter form').submit(function(event){
  //   var personInput = $("input#person").val();
  //   $('.person').text(personInput.toUpperCase());
  //   event.preventDefault();
  // });

  $('form#order-form').submit(function(event) {
    event.preventDefault();
    var letterBlanks = ["full_name_id", "street1_id", "street2_id", "city_id", "state_id", "zip_id"]
    letterBlanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $('.' + blank).text(userInput);
    });

  });
});
//
// // appointment
//
//   $('form#appointment-form').submit(function(event){
//     debugger;
//     var fullname = $("#full_name_id").val();
//     var startdt = $(".dp1").val();
//     var stopdt = $(".dp2").val();
//     $('.person').text(fullname);
//     $('.startdate').text(startdt);
//     $('.enddate').text(stopdt);
//     event.preventDefault();
//   });
//
// });
