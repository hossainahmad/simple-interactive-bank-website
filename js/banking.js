// Handle Deposite Button Event 

document.getElementById('deposit-button').addEventListener('click', function () {
    // Get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const previusDeposiAmount = depositTotal.innerText;
    const updatedDepositTotal = parseFloat(previusDegitposiAmount) + parseFloat(newDepositAmmount);
    console.log(updatedDepositTotal);
    depositTotal.innerText = updatedDepositTotal;

    // Clear the deposit input field
    depositInput.value = '';
});

