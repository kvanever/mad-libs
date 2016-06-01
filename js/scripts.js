$(function () {
  $('#blanks form').submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $('.person1').text(person1Input);
    $('.person2').text(person2Input);
    $('.animal').text(animalInput);
    $('.exclamation').text(exclamationInput);
    $('.verb').text(verbInput);
    $('.noun').text(nounInput);

    $('#story').show();

    event.preventDefault();
  });

  $('#emptyletter form').submit(function(event){
    var personInput = $("input#person").val();
    $('.person').text(personInput.toUpperCase());
    event.preventDefault();
  });

  $('form#order-form').submit(function(event) {
    event.preventDefault();
    var full_name_idInput = $("input#full_name_id").val();
    var street1_idInput = $("input#street1_id").val();
    var street2_idInput = $("input#street2_id").val();
    var city_idInput = $("input#city_id").val();
    var state_idInput = $("select#state_id option:selected").text();
    var zip_idInput = $("input#zip_id").val();

    $('.full_name_id').text(full_name_idInput);
    $('.street1_id').text(street1_idInput);
    $('.street2_id').text(street2_idInput);
    $('.city_id').text(city_idInput);
    $('.state_id').text(state_idInput);
    $('.zip_id').text(zip_idInput);
  });
});
