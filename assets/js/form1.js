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

// const radiobtn = document.querySelector(".radio-btn");
// radiobtn.addEventListener("click", () => {
//   alert("helooo");
// });
// function allLetter(inputtxt) {
//   var letters = /^[A-Za-z]+$/;
//   if (inputtxt.value.match(letters)) {
//     alert("Your name have accepted : you can try another");
//     return true;
//   } else {
//     alert("Please input alphabet characters only");
//     return false;
//   }
// }

//

{
  /* <body onload='document.form1.text1.focus()'>
<div class="mail">
<h2>Enter your Name and Submit</h2>
<form name="form1" action="#">
<ul>
<li>Code:</li>
<li><input type='text' name='text1'/></li>
<li class="rq">*Enter alphabets only.</li>
<li>&nbsp;</li>
<li><input type="submit" name="submit" value="Submit" onclick="allLetter(document.form1.text1)" /></li>
<li>&nbsp;</li>
</ul>
</form>
</div> */
}

// li {list-style-type: none;
//     font-size: 16pt;
//     }
//     .mail {
//     margin: auto;
//     padding-top: 10px;
//     padding-bottom: 10px;
//     width: 400px;
//     background : #D8F1F8;
//     border: 1px soild silver;
//     color: #000
//     }
//     .mail h2 {
//     margin-left: 38px;
//     }
//     input {
//     font-size: 20pt;
//     }
//     input:focus, textarea:focus{
//     background-color: lightyellow;
//     }
//     input submit {
//     font-size: 12pt;
//     }
//     .rq {
//     color: #FF0000;
//     font-size: 10pt;
//     }
