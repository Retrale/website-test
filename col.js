// collapsible text boxes for FAQ

document.addEventListener("DOMContentLoaded", function(){
    var coll = document.getElementsByClassName("collapsible");
      var i;
      
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }

})


        // JavaScript code to dynamically change child height (for demonstration purposes)
        document.addEventListener("DOMContentLoaded", function() {
            const child = document.querySelector('.collapsible');

            // Simulate an action that increases the child's height
            setTimeout(() => {
                child.style.height = '100px'; // Set the new height for the child
            }, 2000); // After 2 seconds (you can replace this with your logic)
        });


    