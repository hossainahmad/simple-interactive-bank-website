// Handle Deposite Button Event 

document.getElementById('deposit-button').addEventListener('click', function () {
    // Get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmmount = depositInput.value;
    console.log(depositAmmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmmount;

    // Clear the deposit input field
    depositInput.value = '';
});