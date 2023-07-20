/// <reference types="cypress" />


import BankManagePage from "../../../selector/bank_manage_page";

describe('opening account test', () => {
    const bankManagerPage = new BankManagePage();

    beforeEach(() => {
        bankManagerPage.navigate();
    })

    it('Manager open account for the customer', () => {
        const customerName = 'Harry Potter';
        const currency = 'Dollar';
        bankManagerPage.openAccount(customerName,currency)

        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.have('Account created successfully with account Number :1016');
        })
        const accountNumber = '1016'
        bankManagerPage.searchCustomers(accountNumber).should('have.length', 1)
    })

    it('Manager open account with empty customer name field', () => {
        const customerName = '';
        const currency = 'Dollar';
        bankManagerPage
            .openAccount(customerName,currency)
            .getCustomerSelect()
            .then(($input) => {
                expect($input[0]["validationMessage"]).to.eq('Please select an item in the list.')
            })
    })

    it('Manager open account with empty currency field', () => {
        const customerName = 'Harry Potter';
        const currency = '';
        bankManagerPage
            .openAccount(customerName,currency)
            .getCurrencySelect()
            .then(($input) => {
                expect($input[0]["validationMessage"]).to.eq('Please select an item in the list.')
            })
    })

})

