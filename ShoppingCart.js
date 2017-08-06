//Create a table of shopping items using Product Number,Description,Quantity and Price
// takes in single line with each row separated by ";" and each col seperated by ":" 
// example input: P0001:Chocolate:5:$5.99;P0002:Apples:10:$0.99;P0003:Bananas:2:$1.19
       
    function table(){
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var rows = input.innerHTML.split(";");   
    var table   = "<table border='1' >"  + "<tr> <td>Product Number</td><td>Description</td><td>Quantity</td><td>Price</td></tr>" ;
    var cols = [];
    for(var i = 0; i < rows.length; i++){
        cols[i] =rows[i].split(":");
    }
   
    for(var n = 0; n < rows.length; n++){
        table = table.concat("<tr>");
        for(var j = 0; j< cols[0].length;j++){
            table = table.concat("<td>" + cols[n][j] + "</td>");
                
        }
        table = table.concat("</tr>");
    }

    table = table.concat("</table>");

    output.innerHTML = table;
}
