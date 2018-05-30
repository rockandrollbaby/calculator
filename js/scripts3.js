

var resultCups = function(oz) {
  return oz * 0.125;
}

$(document).ready(function(){
  $("form#ozcups").submit(function(event) {
    event.preventDefault();
    var oz = parseInt($("#ozin").val());
    var result = resultCups(oz);
    $("#output").text(result);
  });

});
