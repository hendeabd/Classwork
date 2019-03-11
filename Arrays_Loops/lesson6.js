$(document).ready(function(){


    output();


});


var numbers = ["something", "twothings", 5, 7.26];

//ADDS ELEMENTS TO THE END OF THE ARRAY
numbers.push("one", "two", "three")

//ADDS ELEMENTS TO THE BEGINING OF THE ARRAY
numbers.unshift("four", "five", 6)

//REMOVES AND ADDS ELEMENTS AT THE SPECIFIED PLACE
numbers.slpice(2, 1, "somthing else");
numbers.slpice(2, 3);

//REMOVE WLWMWNTS FROM THE BEGINNING
numbers.shift();

//REMOVE ELEMENTS FROM THE END
numbers.pop();

//ASSIGN VALUES TO THE ARRAY
number[2] = "Repalcement"
var output = function(){
    $("#output").text("END ARRAY:" + numbers);
    $("#output").text("FIRST ELEMENT OF ARRAY " + numbers[0])
    $("#output").append("\nremoved elements" + removed)
    $("#output").append("\nremoved elements" + removed[0])
}