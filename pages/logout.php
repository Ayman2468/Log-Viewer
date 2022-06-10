<?php
/**
 * here user logs out and session destroyed then redirected to login page
 */

session_start();
session_unset();
session_destroy();

header('Location: ../index.php');
exit();
?>