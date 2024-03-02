/*
    Name: Assignement1
    Course Code: SODV1201
    Class: Introduction to Web Programming
    Author: Marianna Rangel Antunes
*/

//Adding current date and copy right information to the footer
const d = new Date()
document.getElementById("todaysDate").innerHTML = "&copy; Marianna Rangel Antunes - " + d.toDateString();

//the name of the pictures will appear after 10 seconds
setTimeout(()=>{
    document.getElementById("introduce").innerHTML = "Hey, I'm Marianna..."
    document.getElementById("what").innerHTML = "Here's what"
    document.getElementById("Ido").innerHTML = "I do..."
    document.getElementById("myHobbies").innerHTML = "My hobbies..."
 }, 10000)

 