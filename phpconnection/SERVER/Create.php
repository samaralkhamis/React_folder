<?php
include_once './connection.php';

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$age=$_REQUEST['age'];

$sql="INSERT into user(name,email,age) VALUES ('$name','$email','$age')";

mysqli_query($conn,$sql);


?>

