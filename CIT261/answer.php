<?php
    include'connectdatabase.php';
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="edit.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Result</title>
</head>
<body style="background-color: darkblue;">
<img src="logo.png" width='766px' height='581.33px'>
    <br>
    <div class="text">
    <?php
    $selectedAns = $_POST['selected'];
    $correctAns = $_SESSION['Answer_id'];
    if($selectedAns == $correctAns)
    {
        $_SESSION['Score'] += 1;
        if($_SESSION['Score'] != 10) {
        echo "<h1>Congrats.</h1><br> It was correct.<br><b> Your total score is ". $_SESSION['Score'];
        echo "</b><br><button class='button'><a href = 'game.php'>Next Question</a></button>";
        } else {
            echo "Congrats you have completed the game.<br>";
            echo "<button class='button'><a href = 'millionaire.php'>Start Over</a></button>";
            echo "<button class='button'><a href = ''>Claim Reward</a></button>";
        }
    } else {
        echo "Boo.<br> It was incorrect.<br><b> Your final score is ". $_SESSION['Score'];
        echo "</b><br><button class='button'><a href = 'millionaire.php'>Start Over</a></button>";
    }
    ?>
    </div>
</body>
</html>