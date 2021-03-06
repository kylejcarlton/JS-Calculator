$(document).ready(function(){
  var calculation = [];
  var operators ={plus:"+", minus:"-", multiply:"*", divide:"/", decimal:"."};

  // https://stackoverflow.com/questions/1055767/why-can-i-not-define-functions-in-jquerys-document-ready
  var maxLengthCheck = function(){
    if(calculation.length < 26){
      $("#small").html(calculation.join(""));
    }
    else{
      $("#large").html(eval(calculation.join("")).toPrecision(3));
      $("#small").html(calculation.join("")+" =");
      calculation = [];
    }
  }

  $("ul.numbers li").click(function(){
    if($(this).attr("id") == 'decimal'){
      calculation.push(operators[$(this).attr("id")]);
    }
    else{
      calculation.push($(this).attr("id"));
    }
      maxLengthCheck();
  });
  $("ul.operators li").click(function(){
      calculation.push(operators[$(this).attr("id")]);
      maxLengthCheck();
  });
  $("ul.actions li").click(function(){
      if($(this).attr("id") == "ce"){
        calculation.pop();
        maxLengthCheck();
      }
      if($(this).attr("id") == "c"){
        calculation = [];
        $("#large").html("0");
        $("#small").html("");
      }
      if($(this).attr("id") == "equals"){
      if(eval(calculation.join("")) > 9999999999){
        $("#large").html(eval(calculation.join("")).toPrecision(3));
      }
      else{
        $("#large").html(Number(eval(calculation.join("")).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        //https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      }

      $("#small").html(calculation.join("")+" =");
      calculation = [];
      //https://stackoverflow.com/questions/5834318/are-variable-operators-possible
      }
  });


}); //END DOC READY JS
