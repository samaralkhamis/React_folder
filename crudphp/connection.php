<?php
header("Access-Control-Allow-Origin: *");

$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "react";

$conn = mysqli_connect($dbsn,$dbun,$password,$dbname);
if($conn)
{

}else
{
    echo "connection failed";
}
?>