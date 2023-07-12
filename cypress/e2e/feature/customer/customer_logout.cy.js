/// <reference types="cypress" />


import CustomerLoginPage from "../../../selector/customer_login_page";
import BasePage from "../../../selector/base_page";
import CustomerAccountPage from "../../../selector/customer_account_page";

describe('customer logout test', () => {
    const customerLoginPage = new CustomerLoginPage();
    const basePage = new BasePage();
    const validUserName = "Harry Potter";

    beforeEach(() => {
        customerLoginPage
            .navigate()
            .login(validUserName);
    })

    it('Customer Log Out Successfully From Account Page', () => {
        basePage.logout();

        customerLoginPage.getYourNameSelect().should("be.visible");
    })

    it('Customer Log Out Successfully From Transaction Page', () => {
        const customerAccountPage = new CustomerAccountPage();
        customerAccountPage.openTransactionTab();
        basePage.logout();

        customerLoginPage.getYourNameSelect().should("be.visible");
    })
})

