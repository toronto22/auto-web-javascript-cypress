/// <reference types="cypress" />


import BankManagePage from "../../../selector/bank_manage_page";

describe('adding customer test', () => {
    const bankManagerPage = new BankManagePage();

    beforeEach(() => {
        bankManagerPage.navigate();
    })

    it('Manager Adds Customer With Valid Customer Information', () => {
        const firstName = 'ken';
        const lastName = 'james';
        const postCode = '9999';
        bankManagerPage.addCustomer(firstName, lastName, postCode);

        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.have('Customer added successfully with customer id: 6');
        })

        bankManagerPage.searchCustomers(firstName).should('have.length', 1)
    })

    it('Manager Is Unable To Add Customer Without Post Code Field', () => {
        const firstName = 'ken';
        const lastName = 'james';
        const postCode = '';
        bankManagerPage
            .addCustomer(firstName, lastName, postCode)
            .getPostCodeInput().then(($input) => {
            expect($input[0]["validationMessage"]).to.eq('Please fill out this field.')
        })
    })

    it('Manager Is Unable To Add Customer Without First Name Field', () => {
        const firstName = '';
        const lastName = 'james';
        const postCode = '9999';
        bankManagerPage
            .addCustomer(firstName, lastName, postCode)
            .getFirstNameInput().then(($input) => {
            expect($input[0]["validationMessage"]).to.eq('Please fill out this field.')
        })
    })


    it('Manager Is Unable To Add Customer Without Last Name Field', () => {
        const firstName = 'ken';
        const lastName = '';
        const postCode = '9999';
        bankManagerPage
            .addCustomer(firstName, lastName, postCode)
            .getLastNameInput().then(($input) => {
            expect($input[0]["validationMessage"]).to.eq('Please fill out this field.')
        })
    })

})

