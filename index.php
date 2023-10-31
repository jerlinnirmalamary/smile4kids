<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/index.css">
    <!--  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</head>

<body>


    <div class="container-fluid">
        <button id="apply-btn" class="h6 px-4 py-2 border-none "> <a href="form1.php">ApplyNow </a></button>


    </div>


</body>

</html>

<form action="">
    <!--  -->
    <div>
        <h5>Spanish/TEENS CLASSES (11 TO 19 YEARS OLD) </h5>
        <h6>Student Details</h6>
    </div>
    <!--  -->

    <div class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required>
            <div class="valid-feedback">please enter correct firstname</div>
        </div>
        <!--  -->
        <div class="col-md-6">
            <label for="validationCustom02" class="form-label">Surname</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required>
            <div class="valid-feedback">please enter correct firstname</div>
        </div>
        <!--  -->
        <h6>Date of Birth</h6>
        <div class="col-md-12">
            <input type="text" class="form-control" id="datepicker" required>
            <div class="valid-feedback">please enter correct Date</div>
        </div>

        <!--  -->
        <h6>Select Child Category</h6>
    </div>
    <!--  -->
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
</form>