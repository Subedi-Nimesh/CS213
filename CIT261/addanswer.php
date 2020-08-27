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
	<p><h1><b>Add New Answers:</b><h1><br> 
	<form action="displayquestions.php" onsubmit='return confirmation()' method="POST">
  	<?php
    echo "<div class='indent'>";
    echo "Select Type:      <select name='typeSelect' required>";
    echo "<option>Choose Types</option>";
			foreach ($db->query('SELECT * FROM types') as $row)
			{
			  	echo "<option value=".$row['id'].">".$row['type']."</option><br>";
      }
      echo "</select><br>";

      echo "Enter New Answer:  <textarea name='newAnswer' row='1' cols='50'required></textarea><br><br>";
      echo "</div>";
		?>

    <button class='button' type='submit'>Submit</button>
  </form>
</body>
</html>