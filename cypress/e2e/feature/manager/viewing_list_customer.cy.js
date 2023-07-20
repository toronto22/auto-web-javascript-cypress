/// <reference types="cypress" />


import BankManagePage from "../../../selector/bank_manage_page";

describe('viewing list test', () => {
    const bankManagerPage = new BankManagePage();

    beforeEach(() => {
        bankManagerPage.navigate();
    })

    it('Manager view list customer table', () => {
        bankManagerPage
            .openCustomerTab()
            .getCustomerRecords()
            .should('have.length', 5)

    })

    it('Manager create a new customer', () => {
        const firstName = 'ken';
        const lastName = 'james';
        const postCode = '9999';
        bankManagerPage
            .addCustomer(firstName, lastName, postCode)
            .openCustomerTab()
            .getCustomerRecords()
            .should('have.length', 6)
    })

})

