<?php
/**
 * here is the core of the project, here user enters the path of the file he want to read
 * and it ges validated and processed by ajax (logAjax.js) and then return data in the right way to the output field
 * @var  $_SESSION['id'] is checked here if the user is allowed to enter this page
 */
session_start();
include "../include/header.php";
include "../include/nav.php";
if (isset($_SESSION['id'])) {
?>
    <div class="container">
        <div>
            <form id="logview" method="post" enctype="" action="">
                <label for="path">File Path: </label>
                <input type="text" name="path" id="path" placeholder="enter the path of the file" required>
                <input type="submit" id="submit" class="view" name="view" value="View">
            </form>
            <div class="output" id="output">
            </div>
            <div class="buttons">
                <button id="first">&#x2758;&lt;</button>
                <button id="previous">&lt;</button>
                <button id="next">&gt;</button>
                <button id="last">&gt;&#x2758;</button>
            </div>
        </div>
    </div>
<?php
} else {
    header('location: ../index.php');
}
include "../include/footer.php";
?>
<script src="../layout/logAjax.js"></script>