/*
    Name: Assignement1
    Course Code: SODV1201
    Class: Introduction to Web Programming
    Author: Marianna Rangel Antunes
*/

$(document).ready(function(){
    //Adding current date and copy right information to the footer
    const d = new Date()
    $("#todaysDate").html("&copy; Marianna Rangel Antunes - " + d.toDateString())

    let celsius
    let input
    
    //Using named function to convert Degree Fahrenheit to Degree Celsius
    function fahrenheitToCelsius(degreeFahrenheit)
    {
        return (degreeFahrenheit - 32)*5/9
    }

    //Using anonimous function to convert Degree Celsius to Kelvin
    let kelvin = (degreeCelsius) => {
        $("#output2").css({"color": "#f1baa7", "fontSize": "30px", "fontWeight": "bold"}) //Style the output (kelvin)
        $("#output2").text(degreeCelsius.toFixed(2) + " Degree Celsius = " + (degreeCelsius + 273.15).toFixed(2) + " Kelvin") //Display Kelvin = celsius + 273.15
    }

    // To be executed when the button is clicked
    $("button").click(function(){
        
        input = $("input").val()
        try{
            if(isNaN(input) || input == "") // Check if the input is not a number or is empty
            {
                throw "Invalid input. Please enter a number!" //Error message when the input is not a number
            }
            else
            {
                celsius = fahrenheitToCelsius (input) //Call function to convert Degree Fahrenheit to Degree Celsius
                $("#output1").css({"color": "#f1baa7", "fontSize": "30px", "fontWeight": "bold"}) //Style the output (celsius)
                $("#output1").text(input + " Degree Fahrenheit = " + celsius.toFixed(2) + " Degree Celsius") //Display Degree Celsius  
                                
                kelvin(celsius) //Call function to convert Degree Celsius to Kelvin
            } 
        }
        catch(err)
        {
            $("#output1").css({"color": "red", "fontWeight": "bold", "fontSize": "20px"}) //Change error message color to red
            $("#output2").text("") //2nd output empty
            $("#output1").text(err) //Add error message (when input is not a number)
        }
    })
})