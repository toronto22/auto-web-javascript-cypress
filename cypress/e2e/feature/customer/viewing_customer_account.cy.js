/// <reference types="cypress" />


import CustomerLoginPage from "../../../selector/customer_login_page";
import CustomerAccountPage from "../../../selector/customer_account_page";

describe('viewing customer account test', () => {
    const customerLoginPage = new CustomerLoginPage();
    const customerAccountPage = new CustomerAccountPage();
    const validUserName = "Harry Potter";

    beforeEach(() => {
        customerLoginPage
            .navigate()
            .login(validUserName);
    })


    it('Customer Views Default Account Information Details', () => {
        customerAccountPage.getAccountNumber().should('contain.text',"1004");
        customerAccountPage.getBalance().should('contain.text',"0");
        customerAccountPage.getCustomerName().should('contain.text',"Harry Potter");
        customerAccountPage.getCurrency().should('contain.text',"Dollar");
    })

    it.only('Customer Views Other Account Information Details', () => {
        customerAccountPage.selectAccount("1005")
        customerAccountPage.getAccountNumber().should('contain.text',"1005");
        customerAccountPage.getBalance().should('contain.text',"0");
        customerAccountPage.getCustomerName().should('contain.text',"Harry Potter");
        customerAccountPage.getCurrency().should('contain.text',"Pound");
    })

})

