<?php
    include'connectdatabase.php';
    session_start();
    $_SESSION['Answer_id'] = -1;
    $_SESSION['Score'] = 0;
    // $_SESSION['Prev'] = array(-1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="edit.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Millionaire</title>
</head>
<body style="background-color: darkblue;">
<img src="logo.png" width='766px' height='581.33px'>
    <br>
    <button class = "button" style ="margin-left:220px"><a href="game.php">Start Game</a></Button>
    <button class = "button"><a href="displayquestions.php">Edit Questions</a></Button>
</body>
</html>