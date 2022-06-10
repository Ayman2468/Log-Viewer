<?php
/**
 * login page (here you enter username and password) \n
 * when click submit data sent to loginAjax.js
 * @var  $_SESSION['id'] stores the data of logged in user to be able to open logViewer.php
 */
session_start();
if (isset($_SESSION['id'])) {
    header('Location: pages/logViewer.php');
}
include "include/header.php";
?>

<div class="container" id="container">
    <div id="danger"></div>
    <form class="loginForm" action="" method="post">
        <p>Login</p>
        <div class="formbody">
            <div class="sort">
                <label for="username">User Name: </label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="sort">
                <label for="password">Password: </label>
                <input type="text" id="password" name="password" required>
            </div>
            <div class="sort">
                <input type="submit" class="submit" id="login" name="login" value="Login">
            </div>
        </div>
    </form>
</div>

<?php
include "include/footer.php"
?>
<script src="layout/loginAjax.js"></script>