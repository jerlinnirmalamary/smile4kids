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

// // button
const body = document.querySelector("body");
const coll1 = document.querySelector(".coll1"); //
const coll2 = document.querySelector(".coll2"); //
const coll3 = document.querySelector(".coll3"); //
const coll4 = document.querySelector(".coll4"); //
const coll5 = document.querySelector(".coll5"); //
const nextbtn1 = document.querySelector(".nextbtn1"); //
// //
const prebtn1 = document.querySelector(".pre_btn1");
const nextbtn2 = document.querySelector(".nextbtn2"); //

// //
const prebtn2 = document.querySelector(".pre_btn2"); //
const nextbtn3 = document.querySelector(".nextbtn3"); //
//
const prebtn3 = document.querySelector(".pre_btn3"); //
const nextbtn4 = document.querySelector(".nextbtn4"); //
//
const prebtn4 = document.querySelector(".pre_btn4"); //
const submitbtn = document.querySelectorAll(".submitbtn");

nextbtn1.addEventListener("click", () => {
  if ((coll1.style.marginLeft = "-50px")) {
    coll1.style.display = "none";
  }
}); //

// //
nextbtn2.addEventListener("click", () => {
  if ((coll2.style.marginLeft = "-50px")) {
    coll2.style.display = "none";
  }
}); //

// //
nextbtn3.addEventListener("click", () => {
  if ((coll3.style.marginLeft = "-50px")) {
    coll3.style.display = "none";
  }
}); //
nextbtn4.addEventListener("click", () => {
  if ((coll4.style.marginLeft = "-50px")) {
    coll4.style.display = "none";
  }
}); //

//
//
//

prebtn1.addEventListener("click", () => {
  if ((coll1.style.marginLeft = "0px")) {
    coll1.style.display = "block";
  }
}); //
prebtn2.addEventListener("click", () => {
  if ((coll2.style.marginLeft = "-0px")) {
    coll2.style.display = "block";
  }
}); //;

// //
prebtn3.addEventListener("click", () => {
  if ((coll3.style.marginLeft = "-0px")) {
    coll3.style.display = "block";
  }
}); //

// //
prebtn4.addEventListener("click", () => {
  if ((coll4.style.marginLeft = "-0px")) {
    coll4.style.display = "block";
  }
});
