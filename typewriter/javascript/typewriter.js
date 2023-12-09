// Event listener for the 'sendButton' click event
document.getElementById('sendButton').addEventListener('click', function () {
    // Display an alert when the button is clicked
    alert('Your feedback has been submitted! Thank you so much for your valuable opinion.');
});

// Event listeners for the 'privacyPolicyButton' mouseover and click events
document.getElementById("privacyPolicyButton").addEventListener("mouseover", showMessage);
document.getElementById("privacyPolicyButton").addEventListener("click", myFunction);

// Function to toggle the visibility of the 'myDIV' element
function myFunction() {
  var x = document.getElementById("myDIV");
  alert('scroll down to read it');
  if (x.style.display === "none") {
    // If 'myDIV' is hidden, display it
    x.style.display = "block";
  } else {
    // If 'myDIV' is visible, hide it
    x.style.display = "none";
  }
}


// Function to display a message when hovering over the 'privacyPolicyButton'
// function showMessage() {
//   // Display an alert with a message about clicking the button
//   alert("Click this button to view our Privacy Policy.");
// }
