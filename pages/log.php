
    <?php
    /**
     * here I get the path of the file from ajax, read he file data, measure the memory usage and return the data as json to the log viewer
     * @param $path receives the data from logAjax.js
     * @param $myfile read data from the file given
     * @param $data is and array to store the lines of the file
     * @param $sizebefore reads the memory usage before storing lines of the file
     * @param $sizeafter reads the memory usage after storing lines of the file
     */
    $path = $_POST['path'];
        $myfile = fopen($path, "r") or die("Unable to open file!");
        $data = [];
        $sizebefore = memory_get_usage();
        while (!feof($myfile)) {
            array_push($data, fgets($myfile));
            $sizeafter = memory_get_usage();
            if ($sizeafter - $sizebefore >= 3000000) {
                break;
            }
        }
        echo json_encode($data);
        fclose($myfile);
    ?>