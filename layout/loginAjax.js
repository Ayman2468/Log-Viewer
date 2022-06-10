$(document).ready(function () {
  /**
   * when the  page is ready on click the login button I get the values of user credentials to check if correct to let him access the log viewer
   */
  $("#login").click(function (e) {
    e.preventDefault();
    /**
     * @var {string} username is the user input for username,
     */ 
     /** 
     * @var {string} password is the user input for password
     */
    var username = $("#username").val();
    var password = $("#password").val();
        /**
         * @function post sending the user credentials he entered to login.php
         */
    $.post(
      "./pages/login.php",
      {
        username: username,
        password: password
      },
      /**
       * here the function check if data are back successfully or not if yes got to log viewer and if not displays the warning
       * @var {json} data the data returned from login.php as json
       */
      function (data) {
          data = JSON.parse(data);
          console.log(data)
        if (data == 'success') {
            window.location.href = "pages/logViewer.php"
        }else{
            document.getElementById('danger').innerHTML = data;
        }
      }
    );
  });
});
