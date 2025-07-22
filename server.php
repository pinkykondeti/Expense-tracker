<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'expenses_db';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
  $res = $conn->query("SELECT * FROM transactions ORDER BY date DESC");
  echo json_encode($res->fetch_all(MYSQLI_ASSOC));
}

if ($method == 'POST') {
  $date = $_POST['date'];
  $amount = $_POST['amount'];
  $category = $_POST['category'];
  $type = $_POST['type'];
  $conn->query("INSERT INTO transactions (date, amount, category, type) VALUES ('$date', '$amount', '$category', '$type')");
}

if ($method == 'PUT') {
  parse_str(file_get_contents('php://input'), $_PUT);
  $id = $_PUT['id'];
  $date = $_PUT['date'];
  $amount = $_PUT['amount'];
  $category = $_PUT['category'];
  $type = $_PUT['type'];
  $conn->query("UPDATE transactions SET date='$date', amount='$amount', category='$category', type='$type' WHERE id=$id");
}

if ($method == 'DELETE') {
  parse_str(file_get_contents('php://input'), $_DELETE);
  $id = $_DELETE['id'];
  $conn->query("DELETE FROM transactions WHERE id=$id");
}
?>
