(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//

//radio

const radio1 = document.querySelector(".radio-btn1");
const radio2 = document.querySelector(".radio-btn2");
const rbox = document.querySelector(".rbox");

radio2.addEventListener("click", () => {
  rbox.style.display = "block";
});
radio1.addEventListener("click", () => {
  rbox.style.display = "none";
});
