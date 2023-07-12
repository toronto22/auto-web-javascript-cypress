/// <reference types="cypress" />


import CustomerLoginPage from "../../../selector/customer_login_page";
import CustomerAccountPage from "../../../selector/customer_account_page";

describe('customer transactions test', () => {
    const customerLoginPage = new CustomerLoginPage();
    const customerAccountPage = new CustomerAccountPage();
    const validUserName = "Harry Potter";
    const validAmount = 200;

    beforeEach(() => {
        customerLoginPage
            .navigate()
            .login(validUserName);
    })

    it('Customer deposits money with valid amount', () => {

        const successMessage = 'Deposit Successful';
        customerAccountPage
            .openDepositTab()
            .deposit(validAmount)
            .getMessage().should('have.text',successMessage);
        customerAccountPage
            .getBalance().should('have.text',validAmount);
    })

    it('Customer is unable to withdraw the money that exceed the balance', () => {
        const message = 'Transaction successful';
        customerAccountPage
            .openDepositTab()
            .deposit(validAmount)
            .openWithdrawTab()
            .withdraw(validAmount)
            .getMessage().should('have.text',message);
        customerAccountPage
            .getBalance().should('have.text',0);
    })

    it('Customer withdraws money with valid amount', () => {
        const invalidAmount = validAmount + 1;
        const errorMessage = 'Transaction Failed. You can not withdraw amount more than the balance.';
        customerAccountPage
            .openDepositTab()
            .deposit(validAmount)
            .openWithdrawTab()
            .withdraw(invalidAmount)
            .getMessage().should('have.text',errorMessage);
        customerAccountPage
            .getBalance().should('have.text',validAmount);
    })

    it('Customer resets the customer transactions', () => {
        customerAccountPage
            .openDepositTab()
            .deposit(validAmount)
            .deposit(validAmount)
            .openWithdrawTab()
            .withdraw(validAmount)
            .openTransactionTab()
            .resetTransaction()
            .getTransactionsRecords().should('not.exist')
    })
})

