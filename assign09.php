<?php
     // create a PHP object with the filename,filetype, and cwd properties.
     class fileN
     {
        public $fileName;
        public $fileType;
        public $cwd;
     }

     $cwd = getcwd();     // get path to the current working directory
     $folder = ".";       // Set the folder variable to specify the "current" directory    
     
     // create an array of filenames of files from the current directory
     $files = scandir($folder);
     $directory = Array();     // create a array object to store a list of objects.


    for ($i = 0; $i < sizeof($files); $i++) {
        $directory[i] = new fileN();
        $directory[$i]->fileName = $files[$i];
        $directory[$i]->fileType = filetype($directory[$i]->fileName);
        $directory[$i]->cwd = $cwd;
    }
    
     // convert the PHP array of objects to a JSON string
     $str = json_encode($directory);
     print "\n $str \n";   //output the json string - The string is sent to the browser.      
 ?>

