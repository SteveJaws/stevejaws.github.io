<?php

$conn = mysqli_connect("localhost:3306", "089031" , "PyjamaSammie12", "bonus");

if(!$conn){
    echo "geen verbinding";
    die("Connection failed: " . mysqli_connect_error());
}
else{
    echo "verbonden";
}

?>