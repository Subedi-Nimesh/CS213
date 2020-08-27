<?php
  include'connectdatabase.php';
  
  $value = $_GET['Id'];
  $questionValue = $db->prepare("SELECT * FROM questions where id = :value");
  $questionValue->bindValue(':value', $value, PDO::PARAM_INT);
  $questionValue->execute();
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="edit.css">
	<title>Display Questions</title>
  <script>
    function confirmation()
    {
      return confirm('Are you sure?');
    }
  </script>
</head>
<body>
	<p><h1><b>Edit Question:</b></h1><br> 
	<form action="displayquestions.php" onsubmit='return confirmation()' method="POST">
  	<?php

    $result = $questionValue->fetch(PDO::FETCH_ASSOC);
    $result = $result['questions'];
    echo "<div class='indent'>";
      echo "Enter New Question:  <textarea name='editquestion' row='2' cols='50' id='question' required>$result</textarea><br><br>";

      echo "Select Answer:      <select name='answerSelect' required>";
        echo "<option>Choose Answer</option>";
                foreach ($db->query('SELECT * FROM answers') as $row)
                {
                    echo "<option value=".$row['id'].">".$row['answer']."</option><br>";
            }
            echo "</select><br><br>";
            echo "<input type='hidden' name='editId' value='$value'>";
            echo "</div>";
    ?>

    <button class='button' type='submit'>Submit</button>
  </form>
</body>
</html>