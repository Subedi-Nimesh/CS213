<!DOCTYPE html>

<html>
<head>
    <title>Purchase</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css"  href="external04.css">
</head>
<body>

    <div style="font-size: 20px; text-align:center; font-family:'High Tower Text'">
        <h1>
            <?php

                if ($_GET["confirm"]) {
                    echo "Your order has been placed!<br>";
                    echo "Thank you for shopping with us.";
                } 
                else if ($_GET["cancel"]) {
                    echo "Your order has been canceled.";
                }
                else {
                    echo "<h1>!!!Error!!!</h1>";
                }

            ?>
        </h1>
        <h3><a href='assign10.html'>Back to order form.</a></h3>
    </div>
</body>
</html>
