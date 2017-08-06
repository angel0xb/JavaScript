// Binary to Decimal and Back Converter
// Used with BinaryDecimalConverter.html 
// converter to convert a decimal number to binary or a binary number to its decimal equivalent.




function binaryToDecimal(){
    var input = document.getElementById("input").innerHTML.trim();
    var inputSplit = input.split("");

    for(var i = 0; i < inputSplit.length; i++){
        if(inputSplit[i] != 1){
            inputSplit[i] = 0;
        }
    }

    input = inputSplit.join("");

    var reversedInput = input.split("").reverse().join("");
    var decimalNumber = 0;

    for(var i = input.length ; i >=0 ; i --){

            var power = Math.pow(2,i);
            decimalNumber += power * reversedInput.charAt(i);
            
    }

    document.getElementById("input").innerHTML = input;
    document.getElementById("output").innerHTML = decimalNumber;
}



function decimalToBinary(){
    var input = document.getElementById("input").innerHTML.trim();
    var binaryNumber ="";

    while(input > 0){

        binaryNumber += input%2 ;

        input = Math.floor(input/2);
    }

    document.getElementById("output").innerHTML = binaryNumber;
}
