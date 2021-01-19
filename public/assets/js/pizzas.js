// Make sure to wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
      let id = $(this).data("id");
      let newDevoured = $(this).data("newdevoured");
      console.log(newDevoured);
  
      let newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/pizzas/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // Condition check #new-pizza input value
      if ($("#new-pizza").val() === "") {
        $("#alert-modal").modal("show");
        // alert("Please enter a pizza name!")
      } else {
        let newPizzaName = $("#new-pizza").val().trim();
        let newPizza = {
          name: newPizzaName.toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
          }).replace(/\b\w{1,2}\b/g, function (letter) {
            return letter.toLowerCase();
          }),
        };
  
        // Send the POST request.
        $.ajax("/api/pizzas", {
          type: "POST",
          data: newPizza
        }).then(
          function () {
            console.log("created new pizza");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
    });
  
    $(".delete-pizza").on("click", function (event) {
      let id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/pizzas/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted pizza", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  