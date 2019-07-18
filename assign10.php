<!DOCTYPE html>
<html>
	<head>
		<title>Calculated Payment</title>
		<meta charset="UTF-8" />
		<link rel="stylesheet" type="text/css"  href="external04.css">
	</head>
	<body>

		<div style="text-align: center;">
			<header>
				<h1 >Your Scheduled Payment</h1>
			</header>
			<b><?php echo $_GET["fName"]; ?> <?php echo $_GET["lName"]; ?></b><br>
			Your online payment for ticket of Haunted House is scheduled.<br><br>
			Here's the info we will be using for your payment.<br>
			<b>Payment Info</b><br>
			<b>Full Name: </b> <?php echo $_GET["fName"]; ?> <?php echo $_GET["lName"]; ?><br>
			<b>Billing Address: </b> <?php echo $_GET["address"]; ?><br>
			<b>Phone Number: </b> <?php echo $_GET["phone"]; ?><br> 
			<b>Credit Card Type: </b> <?php echo $_GET["cardType"]; ?><br>
			<b>Credit Expiration date: </b> <?php echo $_GET["month"];?>/<?php echo $_GET["year"];?><br><br>
		</div>

		<div style="text-align: center;">
			<?php $under12 = $_GET["under12"]; $child = $_GET["child"]; $adult = $_GET["adult"]; $senior = $_GET["senior"]; ?>
			<b>Children under 12: </b>Free <br>
			<b>Children under 18: </b><?php echo $child; ?><br>
			<b>Adults: </b><?php echo $adult; ?><br>
			<b>Seniors: </b><?php echo $senior; ?><br>
		</div>
		<h2 style="text-align: center;"><b>Total Amount: </b> $ 
			<?php
				if ($child > 0)
					$total += $child * 5.00;
				if ($adult > 0)
					$total += $adult * 10.00;
				if ($senior > 0)
					$total += $senior * 12.00;

				echo $total;
			?>
			including TAX.
		</h2><br><br><br>

		<h2 style="text-align: center;">Click below to confirm or cancel your order</h2>
		<form action="assign10_a.php" style="text-align: center;" method="get">
		<input type="submit" name="confirm" value="Confirm Order">
		<input type="submit" name="cancel" value="Cancel">

	</body>
</html>
