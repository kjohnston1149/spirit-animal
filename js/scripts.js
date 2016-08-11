$(document).ready(function() {
  $("#blanks form").submit(function(event){
      event.preventDefault();

    var moodValue = parseInt($("input:radio[name=mood]:checked").val());
    var lunchValue = parseInt($("#lunch").val());
    var sleepValue = parseInt($("#sleep").val());
    var result = moodValue + lunchValue + sleepValue;

    if (result === ) {
      $('#sloth').show();
      $('#bizCat').hide();
      $('#manBearPig').hide();
    } else if (result === 6){
      $('#bizCat').show();
      $('#sloth').hide();
      $('#manBearPig').hide();
    } else {
      $('#manBearPig').show();
      $('#sloth').hide();
      $('#bizCat').hide();
    };


  });
});
