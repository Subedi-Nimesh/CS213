window.onload = function() {
   document.getElementById("apr").focus();
};

function setFocus() 
{
    document.getElementById("apr").focus();
}

function verify()
{
    if (apr.value=="")
        {
            alert ("APR field Required")
            document.getElementById("apr").focus();
        }
    if (loanTerm.value=="")
        {
            alert ("Loan Term field Required")
            document.getElementById("loanTerm").focus();
        }
    if (loanAmount.value=="")
        {
            alert ("Loan Amount field Required")
            document.getElementById("loanAmount").focus();
        }
}

function calculatePayment() 
{
    if (verify()==false)
    {
        return;
    }
    else
    {
        var apr = parseFloat(document.getElementById('apr').value);
        var loanTerm = parseFloat(document.getElementById('loanTerm').value);
        var loanAmount = parseFloat(document.getElementById('loanAmount').value);
        var months = (loanTerm * 12);
        var point = ((apr / 100) / 12);
        var power = Math.pow((1 + point) , months);
        var MontlyPayment = loanAmount * ((point * power) / (power - 1));
        MontlyPayment = MontlyPayment.toFixed(2);
      
        if (apr < 0 || apr > 25)
        {
            alert("APR should be 0.01 - 25.00");
           document.getElementById("apr").focus();
        }
        else
            var validateAPR = 1;
      
        if (loanTerm < 1 || loanTerm > 40)
        {
            alert("Loan Term should be > 0 and <= 40 years");
            document.getElementById("loanTerm").focus();
        }
        else
            var validateLT = 1;
        
        if (loanAmount < 0)
        {
            alert("Loan Amount should be > 0");
            document.getElementById("loanAmount").focus();
        }
        else
            var validateLM = 1;
            
        if (validateAPR == 1 && validateLT == 1 && validateLM == 1)
            document.getElementById('monthlyPayment').innerHTML = "$ " + MontlyPayment;
        else
            document.getElementById('monthlyPayment').innerHTML = "";
    }
}

function resetValues() {
	document.getElementById('monthlyPayment').innerHTML = "";
	document.getElementById('apr').value = "";
	document.getElementById('loanTerm').value = "";
	document.getElementById('loanAmount').value = "";

	setFocus();
}