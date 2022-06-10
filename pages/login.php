<?php
/**
 * here I get the user data from the ajax file (loginAjax.js) to check if he has the right to get access to the log viewer
 * @param $username is the right username value to give accesss
 * @param $password is the right password value to give accesss
 * @param $_POST['username'] is the value the user entered for username
 * @param $_POST['password'] is the value the user entered for password
 * @param $data is the container of result in both ways and sent back to ajax to continue process of login
 */
session_start();
$username = 'admin';
$password = 'admin';
if ($username === $_POST['username'] && $password === $_POST['password']) {
    $_SESSION['id'] = 'admin';
    $data = 'success';
} else {
    $data = '<div class="danger"><p>Wrong Credentials</p></div>';
}
echo json_encode($data)
?>