<!DOCTYPE html>
<html>
	<head>
		<title>Calculated Payment</title>
		<meta charset="UTF-8" />
		<link rel="stylesheet" type="text/css"  href="external04.css">
	</head>
	<body style="background-image:url('bkground.jpg'); height = 100%;
        background-position: center; background-repeat: no-repeat;
        background-size: cover; margin-bottom: 185px;">

		<div style="text-align: center;">
			<header>
				<h1 >Mortgage Payment Calculator</h1>
			</header>
			With an APR of <b>%<?php echo $_GET["apr"]; ?></b> for <b><?php echo $_GET["loanTerm"]; ?></b> years and a loan of <b>$<?php echo $_GET["loanAmount"]; ?>
		</div>
		<h2 style="text-align: center;"> Monthly payment = $
		
		<?php
			function calculate() {
				$apr = $_GET["apr"];
				$loanTerm = $_GET["loanTerm"];
				$loanAmount = $_GET["loanAmount"];

				$months = ($loanTerm * 12);
				$point = (($apr / 100) / 12);
				$power = pow((1 + $point) , $months);
				$MontlyPayment = $loanAmount * (($point * $power) / ($power - 1));
				echo (round($MontlyPayment, 2));
			}

			calculate();			
		?>
		/ per Month
		</h2>
	</body>
</html>
