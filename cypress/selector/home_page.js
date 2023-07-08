class  HomePage {
    customerLoginButton = '//button[text()="Customer Login"]';
    bankManagerLoginButton = '//button[text()="Bank Manager Login"]';

    visit() {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

        return this;
    }

    accessLoginPage(){
        cy.xpath(this.customerLoginButton).click();
    }
  }


export default HomePage;