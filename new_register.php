<?php
include 'db.php';
session_start();
$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$password = $data->password;

$check = $conn->prepare("SELECT id FROM users WHERE username = ?");
$check->bind_param("s", $username);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
  echo json_encode(["success" => false, "message" => "Username already exists"]);
} else {
  $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
  $stmt->bind_param("ss", $username, $password);
  if ($stmt->execute()) {
    echo json_encode(["success" => true]);
  } else {
    echo json_encode(["success" => false, "message" => "Registration failed"]);
  }
}
?>
