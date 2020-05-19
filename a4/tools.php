<?php
  session_start();
// Put your PHP functions and modules here
function csvToJson($fname) {
  if (!($fp = fopen($fname, 'r'))) {
      die("Can't open file...");
  }
  $key = fgetcsv($fp,"1024",";");
  $json = array();
      while ($row = fgetcsv($fp,"1024",";")) {
      $json[] = array_combine($key, $row);
  }
  fclose($fp);
  return json_encode($json);
}
$movies = csvToJson("Movies.csv");
?>