document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("newsletter-form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      document.getElementById("submissionMessage").style.display = "block";
    });
  });