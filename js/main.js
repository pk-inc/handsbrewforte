// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = navLinks.classList.contains('active') ? '✕' : '☰';
            mobileMenuBtn.textContent = icon;
        });
    }

    // Loan Calculator Interaction
    const calculatorForm = document.getElementById('loan-calculator');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            calculateLoan();
        });
    }
});

function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const months = parseInt(document.getElementById('loan-duration').value);
    const rate = 0.05; // Example monthly interest rate of 5%

    if (isNaN(amount) || isNaN(months)) {
        alert('Please enter valid numbers');
        return;
    }

    const interest = amount * rate * months;
    const totalRepayment = amount + interest;
    const monthlyRepayment = totalRepayment / months;

    const resultDiv = document.getElementById('calc-result');
    resultDiv.innerHTML = `
        <h3>Estimated Repayment</h3>
        <p><strong>Monthly Pmt:</strong> ₦${monthlyRepayment.toLocaleString('en-NG', {maximumFractionDigits: 2})}</p>
        <p><strong>Total Repayment:</strong> ₦${totalRepayment.toLocaleString('en-NG', {maximumFractionDigits: 2})}</p>
        <p><small>*Estimates based on standard rates. Terms apply.</small></p>
    `;
    resultDiv.style.display = 'block';
}
