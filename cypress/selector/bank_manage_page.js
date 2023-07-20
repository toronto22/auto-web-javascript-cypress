class BankManagePage {
    //Actions
    addCustomer(firstName, lastName, postCode) {
        cy.xpath(this.addCustomerTab).click();
        if (firstName !== '') {
            cy.xpath(this.firstNameInput).type(firstName);

        }
        if (lastName !== '') {
            cy.xpath(this.lastNameInput).type(lastName);
        }

        if (postCode !== '') {
            cy.xpath(this.postCodeInput).type(postCode);
        }

        cy.xpath(this.addCustomerButton).click();

        return this;
    }

    openAccount(customer, currency) {
        cy.xpath(this.openAccountTab).click();
        if (customer !== '') {
            cy.get(this.customerSelect).select(customer);
        }

        if (currency !== '') {
            cy.get(this.currencySelect).select(currency)
        }

        cy.xpath(this.processButton).click();

        return this;
    }
    getCustomerSelect(){
        return cy.get(this.customerSelect);
    }

    getCurrencySelect(){
        return cy.get(this.currencySelect);
    }

    openCustomerTab(){
        cy.xpath(this.customersTab).click();

        return this;
    }

    getCustomerRecords(){
        return cy.xpath(this.customersRecords)
    }

    navigate() {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');

        return this;
    }

    getPostCodeInput() {
        return cy.xpath(this.postCodeInput);
    }

    getFirstNameInput() {
        return cy.xpath(this.firstNameInput);
    }

    getLastNameInput() {
        return cy.xpath(this.lastNameInput);
    }

    searchCustomers(searchInput) {
        cy.xpath(this.customersTab).click();
        cy.xpath(this.searchCustomerInput).type(searchInput);

        return this.getCustomers();
    }

    getCustomers() {
        return cy.xpath(this.customersRecords)
    }

    //Selectors
    addCustomerTab = '//button[@ng-class="btnClass1"]';
    openAccountTab = '//button[@ng-class="btnClass2"]';
    customersTab = '//button[@ng-class="btnClass3"]';

    //add customer tab
    firstNameInput = '//input[@ng-model="fName"]';
    lastNameInput = '//input[@ng-model="lName"]';
    postCodeInput = '//input[@ng-model="postCd"]';
    addCustomerButton = '//button[text()="Add Customer"]';

    //open account tab
    customerSelect = '#userSelect';
    currencySelect = '#currency';
    processButton = '//button[text()="Process"]';

    //customers tab
    searchCustomerInput = '//input[@ng-model="searchCustomer"]';
    customersRecords = '//table/tbody/tr'

}

export default BankManagePage;