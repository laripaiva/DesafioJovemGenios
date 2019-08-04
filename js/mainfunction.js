$("#result").hide();
$("#error").hide();
function multiplos() {
  let number = document.getElementById("number").value;
  if (number == null || isNaN(number)) {
    $("#result").html("");
    $("#result").hide();
    $("#error").show();
  } else {
    $("#result").html("");
    $("#result").show();
    $("#error").hide();
    for (let i = 0; i <= number; i++) {
      console.log(i);
      if (i != 0 && i % 3 == 0 && i % 5 != 0) {
        $("#result").append("<p> Jovem</p>");
      } else if (i != 0 && i % 5 == 0 && i % 3 != 0) {
        $("#result").append("<p> Gênios</p>");
      } else if (i != 0 && i % 5 == 0 && i % 3 == 0) {
        $("#result").append("<p> Jovem Gênios</p>");
      } else {
        $("#result").append("<p>" + i + "</p>");
      }
    }
  }
}
