<?php
include 'db.php';
session_start();
$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$password = $data->password;

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  $_SESSION['user_id'] = $result->fetch_assoc()['id'];
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false]);
}
?>
