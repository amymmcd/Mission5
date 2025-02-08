// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// on click for "estimate cost" button 
$("#btn").click(function() {

    // create variables for hours based on user input and for rate
    var hours = $("#hours").val();
    var rate = $("#rate").val();
    
    // if the user enters valid numbers, calculate total amount
    if (hours > 0 && hours <= 5) {
        var total = hours * rate;
            
        // show the estimate label and total amount
        $("#estimate").removeAttr("hidden");
        $("#totalCost").text("$" + total.toFixed(2));
    }
    // otherwise, alert user
    else {
        alert("Please enter a valid number");
        
        // clears out any value in totalCost and hides the estimate div
        $("#totalCost").empty();
        $("#estimate").hide();
    }
})