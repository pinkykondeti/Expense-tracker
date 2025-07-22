<?php
include 'db.php';
session_start();
$user_id = $_SESSION['user_id'];
$date = $_GET['date'] ?? '';
$category = $_GET['category'] ?? '';
$conditions = "WHERE user_id=$user_id";
if ($date) $conditions .= " AND date='$date'";
if ($category) $conditions .= " AND category LIKE '%$category%'";
$sql = "SELECT * FROM transactions $conditions ORDER BY date DESC";
$result = $conn->query($sql);
$rows = [];
while($row = $result->fetch_assoc()) $rows[] = $row;
echo json_encode($rows);
?>
