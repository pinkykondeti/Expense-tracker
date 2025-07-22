<?php
include 'db.php';
session_start();
$data = json_decode(file_get_contents("php://input"));
$user_id = $_SESSION['user_id'];
$date = $data->date;
$amount = $data->amount;
$category = $data->category;
$type = $data->type;
$sql = "INSERT INTO transactions (user_id, date, amount, category, type) VALUES ($user_id, '$date', $amount, '$category', '$type')";
$conn->query($sql);
?>
