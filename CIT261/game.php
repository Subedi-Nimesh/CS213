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
    <title>Game</title>
</head>
<body style="background-color: darkblue;">
<img src="logo.png" width='766px' height='581.33px'>
    <br>
    <form action="answer.php" method="POST">
        <?php
        echo "<div class='text'>";
        // $displayQues = $db->query("SELECT * FROM questions WHERE ID NOT IN ($_SESSION['Prev']) ORDER BY RANDOM() LIMIT 1");
        // $result = $displayQues->fetch(PDO::FETCH_ASSOC);
        // $result = $result['questions'];
        // echo "$result";
        $displayQues = $db->query("SELECT * From questions Q INNER JOIN answers A ON Q.answers_id=A.id ORDER BY RANDOM() LIMIT 1");
        $result = $displayQues->fetch(PDO::FETCH_ASSOC);
        $resultQ = $result['questions'];
        $resultA = $result['answer'];
        $resultAns = $result['answers_id'];
        $_SESSION['Answer_id'] = $resultAns;
        $resultAnsType = $result['answer_type'];
        echo "$resultQ<br>";
        // echo "<input type='radio' value='$resultAns' >$resultA<Br>";
        $display = rand(1,4);
        $count = 1;
        $displayQues = $db->query("SELECT * From answers WHERE answer_type=$resultAnsType AND id!=$resultAns ORDER BY RANDOM() LIMIT 3");
        $result = $displayQues->fetchAll(PDO::FETCH_ASSOC);
        // echo "<div class='answers'>";
        echo "<table class='table'><tr>";
        foreach ($result as $incorrect){
            if ($count == 3) {
               echo "</tr><tr>";
            }
            if($count == $display){
                echo "<td class='td'><span class='hover input'><input type='radio' name='selected' value='$resultAns' >$resultA</span></td>";
                $count += 1;
            }
            if ($count == 3) {
                echo "</tr><tr>";
            }
            echo "<td class='td'><span class='hover input'><input type='radio' name='selected' value=".$incorrect['id'].">".$incorrect['answer']."</span></td>";
            $count += 1;
        }
        if($display == 4){
            echo "<td class='td'><span class='hover input'><input type='radio' name='selected' value='$resultAns' >$resultA<Br></span></td><br>";
        }
        echo "</tr></table>";
        // echo "</div>";
        echo "</div>";
        echo "<span class='submit'><button class='button' type='submit'>Submit</button></span>";
    ?>

    </form>
    
</body>
</html>