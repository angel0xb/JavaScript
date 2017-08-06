// Change Return
// The user enters a cost and then the amount of money given. 
// The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.



//get coin image from changeIMG list
var qIMG = document.getElementById("changeIMG").childNodes[1];
var dIMG = document.getElementById("changeIMG").childNodes[3];
var nIMG = document.getElementById("changeIMG").childNodes[5];
var pIMG = document.getElementById("changeIMG").childNodes[7];


// clears images of coins given
function clearIMG(coin) {

    coinIMG = document.getElementById(coin.name+ "s");

    if(document.getElementById(coin.name + "s").childElementCount > 0){
        while(coinIMG.hasChildNodes()){
            coinIMG.removeChild(coinIMG.childNodes[0]);
        }
    }
}

// draws coin from coin given, numCoins times
function drawCoin(coin, numCoins){
    for(var i = 0; i < numCoins; i++){ 
        var iClone = coin.image.cloneNode(true);
        document.getElementById(coin.name + "s").appendChild(iClone);
    } 

}

function changeReturn(){
    input = document.getElementById("input").innerHTML;
    cost = document.getElementById("cost").innerHTML;


    var quarter = { name: "quarter", value:0.25, image: qIMG};
    var dime = {name: "dime", value: 0.10, image: dIMG};
    var nickel = {name: "nickel", value: 0.05, image: nIMG};
    var penny = {name: "pennie", value: 0.01, image: pIMG};
    var change =((input*10 - cost*10)/10);
    var numDollars = Math.floor(input - cost);
    var numQuarters = 4 *  Math.floor(input % 1);
    var numDimes = 0;
    var numNickles = 0;
    var numPennies = 0;
    
    //  clear old coin images


    clearIMG(quarter);
    clearIMG(dime);
    clearIMG(nickel);
    clearIMG(penny);


    while(change > .009){
        if(change >= quarter.value){
            temp = (change*10 - quarter.value *10);
            change -= quarter.value;
            numQuarters++;
        }

        else if(change >= dime.value){
            
            change -= dime.value;
            numDimes++;
        }

        else if(change >= nickel.value){
            change -= nickel.value;
            numNickles++;
        }

        else{
            change -= penny.value;
            numPennies++;
        }

        document.getElementById("output").innerHTML ="Change " + ((input*10 - cost*10)/10)  + " Dollars: " + numDollars + " Quarters: " +
         numQuarters + " Dimes: " + numDimes + " Nickles: " + numNickles + " Pennies: " + numPennies;

    }

    // draw coins

        drawCoin(quarter, numQuarters);
        drawCoin(dime, numDimes);
        drawCoin(nickel, numNickles);
        drawCoin(penny, numPennies);

}
