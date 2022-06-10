/**
 * here is the main core of log viewer process
 * on submit I get the file path from user and prevent the page from refreshing 
 */
$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    /**
     * @param {*} val get the path value from uer input
     */
    const val = $("#path").val();
    if (val) {
      var path = "../" + val;
      console.log(path);
      /**
       * @param {*} xhr check if the path is for and existing file
       */
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', path, false);
        xhr.send();
      if (xhr.status !== 404) {
        /**
         * @function post sending the path to log.php
         */
        $.post(
          "./log.php",
          {
            path: path,
          },
          /**
           * 
           * @param {*} data check if there is data comming back from log.php and process on it
           */
          function (data) {
            if (data != null) {
              var len = 0;
              /**
               * connverting data from json to array
               * @param {*} len is the length of the returned data
               */
              data = JSON.parse(data);
              len = data.length;
              if (len > 0) {
                /**
                 * here i turn data to assoc array to can control the display of lines
                 * @param {*} pages is the total number of pages will be created
                 * @param {*} page is the current page
                 * @param {*} singlepage is the array of lines of a single page
                 * @param {*} linedata is the form of line that will be stored in $singlepage
                 */
                var pages = Math.ceil((len + 1) / 10);
                var page = 1;
                var pagesdata = [];
                while (page <= pages) {
                  var singlepage = [];
                  for (var i = (page - 1) * 10; i < page * 10; i++) {
                    var linedata =
                      "<div class='line'><span class='count'>" +
                      (i + 1) +
                      "</span><span class='content'>" +
                      data[i] +
                      "</span></div>";
                    if (data[i]) {
                      singlepage.push(linedata);
                    }
                  }
                  pagesdata.push(singlepage);
                  page += 1;
                }
                /**
                 * @param {*} pageIndex is the index of current small array in process (current page) to call it then display
                 * here first page displays automatically
                 */
                var pageIndex = 0;
                call(pagesdata, pageIndex, pages);
                /**
                 * here when user click next page(array) index increases by one to display next page
                 */
                $("#next").click(() => {
                  pageIndex += 1;
                  call(pagesdata, pageIndex, pages);
                });
                /**
                 * here when user click previous page(array) index decreases by one to display previous page
                 */
                $("#previous").click(() => {
                  pageIndex -= 1;
                  call(pagesdata, pageIndex, pages);
                });
                /**
                 * here I get the first page to display
                 */
                $("#first").click(() => {
                  pageIndex = 0;
                  call(pagesdata, pageIndex, pages);
                });
                /**
                 * here I get the last page to display
                 */
                $("#last").click(() => {
                  pageIndex = pages - 1;
                  call(pagesdata, pageIndex, pages);
                });
              }
            }
          }
        );
      }else{
        $("#output").empty();
        $("#output").append('<div class="line">file doesn\'t exist</div>');
      }
    }
  });
});
/**
 * @function call() here the function check if the page(array) is within the correct range and read every element as a line to display then append to the output holder
 * @param {*} pagesdata the main array
 * @param {*} pageIndex is the index of current small array in process (current page) to call it then display
 * @param {*} pages total number of pages or arrays
 */
function call(pagesdata, pageIndex, pages) {
  if (pageIndex < pages && pageIndex >= 0) {
    $("#output").empty();
    pagesdata[pageIndex].forEach((line) => {
      $("#output").append(line);
    });
  }
}
