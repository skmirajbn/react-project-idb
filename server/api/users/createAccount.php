<?php
require_once('./../../database/config.php');
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['phone']) && isset($_POST['nid'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $nid = $_POST['nid'];

    $query = $con->query($sql);
}

?>