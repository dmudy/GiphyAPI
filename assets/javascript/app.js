/*Objectives:
 - change gifs to a fixed width and height
*/
//Upon enter, the code goes to a new page displaying my code. There needs to be "event" somewhere
//Can only get one set of gifs from user. If user types a different word, I want new gifs to appear
//Want to display gifs if user clicks submit button or presses enter. Used this source https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp but no success
$(document).ready(function () {
  console.log("ready!");

  $('#userInputButton').on('click', function getData(event) {
    event.preventDefault();
    var input = $("#userInput").val().trim();
    console.log('click');
    var xhr = $.get(
      "http://api.giphy.com/v1/gifs/search?q="
      + input +
      "&api_key=IjkESGH2V6bmed1LWaCukFWZFrOthKwd&limit=10"
    );

    xhr.done(function (response) {
      console.log("success got data", response);
      $('#giphy').empty();
      var gifs = response.data;
      for (i in gifs) { // for/in loops are when you want to loop an object/array
        $("#giphy").append("<img src = '" + gifs[i].images.original.url + "'/>");
      };
    });

    $('#buttons').append("<button type='button' id='button'><p id = 'phrase'>"
      + input +
      "</p></button>"
    );
  });

  $('#buttons').on('click', '#button', function recallData(event) {
    event.preventDefault();
    var savedInput = $('#phrase');
    console.log(savedInput);
    var xhr = $.get(
      "http://api.giphy.com/v1/gifs/search?q="
      + savedInput +
      "&api_key=IjkESGH2V6bmed1LWaCukFWZFrOthKwd&limit=10"
    );

    xhr.done(function (response) {
      console.log("success got data", response);
      $('#giphy').empty();
      var gifs = response.data;
      for (i in gifs) {
        $("#giphy").append("<img src = '" + gifs[i].images.original.url + "'/>");
      };
    });
  });
});

