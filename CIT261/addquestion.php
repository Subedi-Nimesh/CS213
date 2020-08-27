<?php
	include'connectdatabase.php';
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
	<p><h1><b>Add New Questions:</b></h1><br> 
	<form action="displayquestions.php" onsubmit='return confirmation()' method="POST">
  	<?php
    echo "<div class='indent'>";
        echo "Enter New Question:  <textarea name='newQuestion' row='1' cols='50' required></textarea><br>";

        echo "Select Answer:      <select name='answerSelect' required>";
        echo "<option>Choose Answer</option>";
                foreach ($db->query('SELECT * FROM answers') as $row)
                {
                    echo "<option value=".$row['id'].">".$row['answer']."</option><br>";
            }
            echo "</select><br><br>";
            echo "</div>";
		?>

    <button class='button' type='submit'>Submit</button>
  </form>
</body>
</html>