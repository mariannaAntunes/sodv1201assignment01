/*
    Name: Assignement1
    Course Code: SODV1201
    Class: Introduction to Web Programming
    Author: Marianna Rangel Antunes
*/

//Adding current date and copy right information to the footer
const d = new Date()
document.getElementById("todaysDate").innerHTML = "&copy; Marianna Rangel Antunes - " + d.toDateString();

// getting the button, input and paragraph elements
let buttonEle = document.getElementsByTagName('button')[0]
let inputEle = document.getElementsByTagName('input')[0]
let outputEle = document.getElementById('output')

// To be executed when the button is clicked
buttonEle.addEventListener('click', ()=>{
    let input = ""
    console.log(inputEle.value)
    input = inputEle.value

    //A Mark must be number only, nonnegative, and less than 101
    try{
        if (isNaN(input) || input == "") // Check if the input is not a number or is empty
        {
            throw "Input is not a number. Try again!" //Error message when the input is not a number
        }
        else if (input < 0) // Check if the input is a negative number
        {
            throw "Negative numbers are not allowed. Enter a nonnegative number!" //Error message when the input is a negative number
        }
        else if (input > 100) // Check if the input is grater then 100
        {
            throw "Numbers grater than 100 are not allowed. Enter a valid number between 0 and 100!" //Error message when the input is grater then 100
        }
        else
        {
            //style the output in case of valid input
            outputEle.style.color = '#f1baa7'
            outputEle.style.fontSize = '50px'
            outputEle.style.fontWeight = 'bold'
            
            //If the user entered any value above 90 Grade A should be displayed as a result
            if (input > 90){
                outputEle.innerText = "GRADE A"
            }
            //If user entered any value above 80 Grade B should be displayed
            else if (input > 80){
                outputEle.innerText = "GRADE B"
            }
            //If user entered any value above 70 Grade C should be displayed
            else if (input > 70){
                outputEle.innerText = "GRADE C"
            }
            //If user entered any value above 50 Grade D should be displayed
            else if (input > 50){
                outputEle.innerText = "GRADE D"
            }
            //If user entered any value less than 50 Grade F should be displayed
            else{
                outputEle.innerText = "GRADE F"
            }
        }
    }
    catch(err){
        //style the output in case of error
        outputEle.style.color = 'red'
        outputEle.style.fontWeight = 'bold'
        outputEle.style.fontSize = '20px'
        outputEle.innerText = 'Error: ' + err
    }
})