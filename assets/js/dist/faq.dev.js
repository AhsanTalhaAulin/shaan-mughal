"use strict";

// Get the modal
var modal = document.getElementById("faq_id"); // Get the button that opens the modal

var btn = document.getElementById("faq-btn"); // Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0]; // When the user clicks the button, open the modal 

btn.onclick = function () {
  console.log("Hello world!");
  modal.style.transitionDuration = "1s";
  modal.style.display = "block";
}; // When the user clicks on <span> (x), close the modal


span.onclick = function () {
  modal.style.display = "none";
}; // When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}; // collapsible section


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}