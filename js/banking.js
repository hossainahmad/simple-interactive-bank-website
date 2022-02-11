// Handle Deposite Button Event 

document.getElementById('deposit-button').addEventListener('click', function () {
    // Get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmountText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositAmmountText);

    // Update Deposit Total

    const depositTotal = document.getElementById('deposit-total');
    const previusDeposiText = depositTotal.innerText;
    const previusDeposiAmount = parseFloat(previusDeposiText);
    const newDepositTotal = previusDeposiAmount + newDepositAmmount;

    depositTotal.innerText = newDepositTotal;

    // Update Account Blanace

    const balanceTotal = document.getElementById('total-account-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBalanceTotal + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;


    // Clear the deposit input field
    depositInput.value = '';
});

// Handle Withraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // Set Withdraw Total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Clear Withdraw input value

    withdrawInput.value = '';

});


