$(document).ready(function() {
  $("#blanks form").submit(function(event){
      event.preventDefault();

    var moodValue = parseInt($("input:radio[name=mood]:checked").val());

    if (moodValue === 1) {
      $('#sloth').show();
      $('#bizCat').hide();
      $('#manBearPig').hide();
    } else if (moodValue === 2){
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
