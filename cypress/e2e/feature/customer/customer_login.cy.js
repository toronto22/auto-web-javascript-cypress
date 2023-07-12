/// <reference types="cypress" />

import CustomerLoginPage from "../../../selector/customer_login_page";


describe('customer login test', () => {
    const customerLoginPage = new CustomerLoginPage();
    const validUserName = "Harry Potter";

    beforeEach(() => {
        customerLoginPage
            .navigate();

    })

    it('The Login button is hidden in default', () => {
        customerLoginPage
            .getLoginButton().should('not.be.visible');
    })

    it('The Login Button Is Hidden When Deselect Your Name', () => {
        customerLoginPage
            .selectYourName(validUserName)
            .deselectYourName()
            .getLoginButton().should('not.be.visible');
    })

    it('The Login Button Is Shown When Select Your Name', () => {
        customerLoginPage
            .selectYourName(validUserName)
            .getLoginButton().should('be.visible');
    })
    it('Login Successfully With Valid Credential', () => {
        customerLoginPage
            .login(validUserName);
    })
})

