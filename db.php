<?php
$conn = new mysqli("localhost", "root", "", "expenses");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
