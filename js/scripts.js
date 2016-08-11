$(document).ready(function() {
  $("#blanks form").submit(function(event){
      event.preventDefault();

    var moodValue = parseInt($("input:radio[name=mood]:checked").val());
    var lunchValue = parseInt($("#lunch").val());
    var sleepValue = parseInt($("#sleep").val());
    var result = moodValue + lunchValue + sleepValue;
    var nameInput = $("input#name").val();


    $(".name").text(nameInput);

    if (nameInput === "") {
      $(".error").show();
      $('#sloth').hide();
      $('#bizCat').hide();
      $('#manBearPig').hide();
    } else if (result >=3 && result <6 ) {
      $('#sloth').show();
      $('#bizCat').hide();
      $('#manBearPig').hide();
      $(".error").hide();
    } else if (result >=6 && result <8){
      $('#bizCat').show();
      $('#sloth').hide();
      $('#manBearPig').hide();
      $(".error").hide();
    } else {
      $('#manBearPig').show();
      $('#sloth').hide();
      $('#bizCat').hide();
      $(".error").hide();
    };





  });
});
