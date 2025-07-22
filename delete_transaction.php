<?php
include 'db.php';
session_start();
$id = $_GET['id'];
$user_id = $_SESSION['user_id'];
$conn->query("DELETE FROM transactions WHERE id=$id AND user_id=$user_id");
?>