<?php
session_start();

if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
  header('Location: index.html');
  exit;
}
?>