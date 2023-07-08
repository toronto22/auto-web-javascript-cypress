class CustomerLoginPage {
    navigate() {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer");
        // cy.visit("https://www.google.com");
        return this;
    }

    login(username) {
        cy.xpath(this.yourNameSelect).select(username);
        cy.xpath(this.loginButton).click();

        return this;
    }

    getLoginButton() {
        return cy.xpath(this.loginButton);
    }

    selectYourName(username) {
        cy.xpath(this.yourNameSelect).select(username);
        return this;
    }

    deselectYourName() {
        const defaultValue = "---Your Name---"
        this.selectYourName(defaultValue);
        return this;
    }

    getYourNameSelect() {
        return cy.xpath(this.yourNameSelect);
    }

    yourNameSelect = '//select[@id="userSelect"]';
    loginButton = '//button[text()="Login"]';
}


export default CustomerLoginPage;