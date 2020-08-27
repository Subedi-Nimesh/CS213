<?php
	include'connectdatabase.php';
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="edit.css">
	<title>Display Questions</title>
  <script>
        function onLoad() {
            document.getElementById('answer').value = 'apple';
        }
    function confirmation()
    {
      return confirm('Are you sure?');
    }
  </script>
</head>
<body onload="onLoad()">
	<p><b>Edit Answer:</b><br> 
	<form action="displayquestions.php" onsubmit='return confirmation()' method="POST">
  	<?php
    echo "Select Type:      <select name='typeSelect' required>";
    echo "<option>Choose Types</option>";
			foreach ($db->query('SELECT * FROM types') as $row)
			{
			  	echo "<option value=".$row['id'].">".$row['type']."</option><br>";
      }
      echo "</select><br>";

      echo "Enter New Answer:  <input type='text' name='editAnswer' id='answer' required><br><br>";

		?>

    <button type='submit'>Submit</button>
  </form>
</body>
</html>