<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Boostrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <!-- css -->
    <link rel="stylesheet" href="./assets/css/form1.css">

    <!-- jquery link -->

    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" />


    <!--  -->
    <link rel="stylesheet" href="./jquery1/jquery-ui.css" />
    <script src="./jquery1/jquery-ui.js"></script>

    <!--  -->

    <!-- 3 -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
</head>

<body>

    <div class=" container-fluid">
        <!--  -->

        <form class="row g-3 needs-validation m-0 form1 " novalidate>
            <div class="word">Panjabi/TEENS CLASSES (11 TO 19 YEARS OLD) <span>Student Details</span></div>
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control inpt" id="validationCustom01" required>
                <div class="invalid-feedback if">
                    Please enter currect firstname
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom02" class="form-label">surname</label>
                <input type="text" class="form-control inpt" id="validationCustom02" required>
                <div class="invalid-feedback if">
                    please enter correct surname.
                </div>
            </div>

            <!-- radio -->
            <div class="wd">You Are</div>
            <div class="radio">
                <input type="radio" class="radio-btn1" id="student" name="student" value="radio" checked>
                <label for="student">New Student</label><br>

                <input type="radio" class="radio-btn2" id="students" name="student" value="radio">
                <label for="students">Existing Student</label>

                <br>
            </div>

            <!--  -->

            <div class="rbox">
                <hr>
                <p> What terms have you bought already ?</p>

                <input type="checkbox" id="check_1" name="check_1" value="check_1" checked>
                <label for="check_1">Team1</label>

                <input type="checkbox" id="check_2" name="check_2" value="check_2">
                <label for="check_2">Team2</label>

                <input type="checkbox" id="check_3" name="check_3" value="check_3">
                <label for="check_3">Team3</label>

                <input type="checkbox" id="check_4" name="check_4" value="check_4">
                <label for="check_4">Team4</label>

                <input type="checkbox" id="check_5" name="check_5" value="check_5">
                <label for="check_5">Team5</label>

                <input type="checkbox" id="check_6" name="check_6" value="check_6">
                <label for="check_6">Team6</label>

                <input type="checkbox" id="check_7" name="check_7" value="check_7">
                <label for="check_7">Team7</label>

                <input type="checkbox" id="check_8" name="check_8" value="check_8">
                <label for="check_8">Team8</label>

                <input type="checkbox" id="check_9" name="check_9" value="check_9">
                <label for="check_9">Team9</label>

                <input type="checkbox" id="check_10" name="check_10" value="check_10">
                <label for="check_10">Team10</label>

                <input type="checkbox" id="check_11" name="check_11" value="check_11">
                <label for="check_11">Team11</label>

                <input type="checkbox" id="check_12" name="check_12" value="check_12">
                <label for="check_12">Team12</label>


            </div>

            <!--  -->
            <!-- date picker -->


            <div class="row">

                <!--  -->
                <div class="col-md-12">
                    <label for="validationCustom01" class="form-label">Date of Birth</label>
                    <input type="text" class="form-control inpt" id="datepicker validationCustom01 " required>
                    <div class="invalid-feedback if">
                        please pick your date of birth.
                    </div>
                </div>
                <!--  -->


            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    </div>

    <!--  -->


    <script src="./assets\js\form1.js"></script>
    <!--  -->



    <script>
    $("document").ready(function() {
        alert("hello");
    });



    $(function() {
        $("#datepicker").datepicker();
    });
    </script>
</body>

</html>