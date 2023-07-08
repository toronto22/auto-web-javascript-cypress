class BasePage {

    logout() {
        cy.xpath(this.logoutButton).click();

        return this;
    }

    homeButton = '//button[text()="Home"]';
    logoutButton = '//button[text()="Logout"]';
}

export default BasePage;