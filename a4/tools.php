<?php
  session_start();
  error_reporting(0);

  $nameErr = $emailErr = "";
  $name = $email = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $valid = true;
    if (empty($_POST["name"])) {
      $nameErr = "Name is required";
      $valid = false;
    } else {
      $name = test_input($_POST["name"]);
      if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $nameErr = "Only letters and white space allowed";
        $valid = false;
      }
    }

    if (empty($_POST["email"])) {
      $emailErr = "Email is required";
      $valid = false;
    } else {
      $email = test_input($_POST["email"]);
      if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "invalid email format";
        $valid = false;
      }
    }

    //if valid then redirect
  if($valid){
    header("Location: tools.php");
   }
  }

  function test_input($data) {
    $data = trim($data);
    $data = stripcslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

?>