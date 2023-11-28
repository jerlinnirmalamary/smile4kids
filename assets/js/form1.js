(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      (event) => {
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
const nameinput1 = document.getElementById("validationCustom01");
const nameinput2 = document.getElementById("validationCustom02");
const dateinput1 = document.getElementById("datepicker");
// // // //
const inpt1 = document.querySelector(".inpt1");
const inpt2 = document.querySelector(".inpt2");
const textarea = document.querySelector("#validationTextarea");
const emaill = document.querySelector(".emaill");
const numbers = document.querySelector("#phone_no");

//
//
//
const invalidCheck1 = document.querySelector("#invalidCheck1");
const invalidCheck2 = document.querySelector("#invalidCheck2");
const invalidCheck3 = document.querySelector("#invalidCheck3");
const invalidCheck4 = document.querySelector("#invalidCheck4");
const invalidCheck5 = document.querySelector("#invalidCheck5");
const invalidCheck6 = document.querySelector("#invalidCheck6");

//
const invalidCheck7 = document.querySelector("#invalidCheck7");
const invalidCheck8 = document.querySelector("#invalidCheck8");
const invalidCheck9 = document.querySelector("#invalidCheck9");
//
const invalidCheck10 = document.querySelector("#invalidCheck10");
const invalidCheck11 = document.querySelector("#invalidCheck11");
const invalidCheck12 = document.querySelector("#invalidCheck12");

//radio.

const radio1 = document.querySelector(".radio-btn1");
const radio2 = document.querySelector(".radio-btn2");
const rbox = document.querySelector(".rbox");

radio2.addEventListener("click", () => {
  rbox.style.display = "block";
});
radio1.addEventListener("click", () => {
  rbox.style.display = "none";
});

// // colls
const coll1 = document.querySelector(".coll1"); //
const coll2 = document.querySelector(".coll2"); //
const coll3 = document.querySelector(".coll3"); //
const coll4 = document.querySelector(".coll4"); //
const coll5 = document.querySelector(".coll5"); //
// // // // // //nextbtn
const nextbtn1 = document.querySelectorAll(".nextbtn1");
// console.log(nextbtn1);
// // // // // //nextbtn previous
const preBtn1 = document.querySelector(".pre_btn1");
const preBtn2 = document.querySelector(".pre_btn2");
const preBtn3 = document.querySelector(".pre_btn3");
const preBtn4 = document.querySelector(".pre_btn4");
// // // // // //
const submitbtn = document.querySelector(".submitbtn"); // // // // //
//

// var form = document.forms.form;
const form = document.getElementById("form");
//console.log("form1", form);
//

//
for (var i = 0; i < nextbtn1.length; i++) {
  // console.log("loopButton", nextbtn1[i]);
  //first
  nextbtn1[0].addEventListener("click", () => {
    var name1 = form.elements.fname;
    var name2 = form.elements.sname;

    var letters = /^[A-Za-z]+$/;
    if (!name1.value.match(letters)) {
      coll1.classList.add("was-validated");
    } else if (!name2.value.match(letters)) {
      coll1.classList.add("was-validated");
    } else {
      coll1.style.display = "none";
      coll2.style.display = "block";
    }
  });
  //   //second
  nextbtn1[1].addEventListener("click", () => {
    var fname1 = form.elements.fname2;
    var sname2 = form.elements.sname2;
    var emails = form.elements.emails;
    var number1 = form.elements.number1;
    var letters2 = /^[A-Za-z]+$/;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //
    var num = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)s?\d{3}\s?\d{3}$/;
    //
    if (!fname1.value.match(letters2)) {
      coll2.classList.add("was-validated");
      console.log("fname");
    } else if (!sname2.value.match(letters2)) {
      coll2.classList.add("was-validated");
      console.log("sname");
    } else if (!emails.value.match(validRegex)) {
      coll2.classList.add("was-validated");
      console.log("email");
    } else if (number1.value.match(num)) {
      coll2.classList.add("was-validated");
      console.log("number");
    } else {
      coll2.style.display = "none";
      coll3.style.display = "block";
    }
  });
  //
  preBtn1.addEventListener("click", () => {
    coll1.style.display = "block";
  });
  //
  //thired
  nextbtn1[2].addEventListener("click", () => {
    var check1 = form.elements.check1;
    var check2 = form.elements.check2;
    var check3 = form.elements.check3;
    var check4 = form.elements.check4;
    var check5 = form.elements.check5;
    var check6 = form.elements.check6;

    if (check1.checked == false) {
      coll3.classList.add("was-validated");
      console.log("checked1");
    } else if (check2.checked == false) {
      console.log("checked2");
      coll3.classList.add("was-validated");
    } else if (check3.checked == false) {
      console.log("checked3");
      coll3.classList.add("was-validated");
    } else if (check4.checked == false) {
      console.log("checked4");
      coll3.classList.add("was-validated");
    } else if (check5.checked == false) {
      console.log("checked5");

      coll3.classList.add("was-validated");
    } else if (check6.checked == false) {
      console.log("checked6");

      coll3.classList.add("was-validated");
    } else {
      coll3.style.display = "none";
      coll4.style.display = "block";
    }
  });

  //
  preBtn2.addEventListener("click", () => {
    coll2.style.display = "block";
  });
  //
  // //four
  nextbtn1[3].addEventListener("click", () => {
    var check7 = form.elements.check7;
    var check8 = form.elements.check8;
    var check9 = form.elements.check9;
    if (check7.checked == false) {
      coll4.classList.add("was-validated");
      console.log("checked7");
    } else if (check8.checked == false) {
      console.log("checked8");
      coll4.classList.add("was-validated");
    } else if (check9.checked == false) {
      console.log("checked9");
      coll4.classList.add("was-validated");
    } else {
      coll4.style.display = "none";
      coll5.style.display = "block";
    }
  });

  //
  preBtn3.addEventListener("click", () => {
    coll3.style.display = "block";
  });
  //

  //
  //five
  // nextbtn1[4].addEventListener("click", () => {
  //   var check10 = form.elements.check10;
  //   var check11 = form.elements.check11;
  //   var check12 = form.elements.check12;

  //   if (check10.checked == false) {
  //     console.log("checked10");
  //     coll5.classList.add("was-validated");
  //   } else if (check11.checked == false) {
  //     console.log("checked11");
  //     coll5.classList.add("was-validated");
  //   } else if (check12.checked == false) {
  //     console.log("checked12");
  //     coll5.classList.add("was-validated");
  //   } else {
  //     coll5.style.display = "block";
  //   }
  // });

  //

  preBtn4.addEventListener("click", () => {
    coll4.style.display = "block";
  });
}

//

//LOCAL STORAGE:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var forms = new FormData(document.getElementById("form"));
  //
  console.log(forms);

  const fname = document.querySelector(".inpt1").value;
  //console.log(fname);
  // console.log(typeof fname);
  const sname = document.querySelector(".inpt2").value;
  // console.log(sname);
  const radioBtn1 = document.querySelector("#student").value;
  // console.log(radioBtn1);
  const radioBtn2 = document.querySelector("#students").value;
  // console.log(radioBtn2);
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  //console.log(checkboxes);
  const dateinpt = document.querySelector(".inptt").value;
  // console.log(dateinpt);
  const cradio1 = document.querySelector("#radio_1").value;
  // console.log(cradio1);
  const cradio2 = document.querySelector("#radio_2").value;
  // console.log(cradio2);
  const cradio3 = document.querySelector("#radio_3").value;
  // console.log(cradio3);
  const gradio1 = document.querySelector(".ginput1").value;
  // console.log(gradio1);
  const gradio2 = document.querySelector(".ginput2").value;
  // console.log(gradio2);
  //
  const fname2 = document.querySelector(".inpt3").value;
  // console.log(fname2);
  const sname2 = document.querySelector(".inpt4").value;
  // console.log(sname2);
  const Textarea = document.getElementById("validationTextarea").value;
  // console.log(Textarea);
  const emaills = document.getElementById("emails").value;
  // console.log(emaills);
  const phone_no = document.getElementById("phone_no").value;
  // console.log(phone_no);
  //
  const alldatas = {
    FirstName1: fname,
    SurName1: sname,
    sradioBtn1: radioBtn1,
    sradioBtn2: radioBtn2,
    datePicker: dateinpt,
    Category1: cradio1,
    Category2: cradio2,
    Category3: cradio3,
    GenderM: gradio1,
    GenderF: gradio2,
    FirstName1: fname,
    SurName1: sname2,
    textarea: Textarea,
    emaillid: emaills,
    PhoneNumber: phone_no,
  };
  saveFormData(alldatas);
});

function saveFormData(alldatas) {
  const storedFormData = JSON.parse(localStorage.getItem("alldatas")) || [];
  storedFormData.push(alldatas);
  localStorage.setItem("alldatas", JSON.stringify(storedFormData));
}
