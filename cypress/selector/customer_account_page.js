class CustomerAccountPage {
    openTransactionTab() {
        cy.xpath(this.transactionsTab).click();

        // To make sure the transaction record is displayed
        cy.wait(6000);

        return this;
    }

    resetTransaction(){
        cy.xpath(this.resetButton).click();

        return this;
    }

    getTransactionsRecords(){
        return cy.xpath(this.transactionRecords);
    }

    openDepositTab(){
        cy.xpath(this.depositTab).click();
        cy.xpath(this.depositButton).should('be.visible');

        return this;
    }

    openWithdrawTab(){
        cy.xpath(this.withdrawTab).click();
        cy.xpath(this.withdrawButton).should('be.visible');

        return this;
    }

    deposit(amount){
        cy.xpath(this.depositAmountInput).type(amount);
        cy.xpath(this.depositButton).click();

        return this;
    }

    withdraw(amount){
        cy.xpath(this.withdrawnAmountInput).type(amount);
        cy.xpath(this.withdrawButton).click();

        return this;
    }

    getMessage(){
        return cy.xpath(this.messageLabel)
    }

    getBalance(){
        return cy.xpath(this.balanceLabel);
    }

    messageLabel = '//*[@ng-show="message"]';
    customerNameLabel = '//strong/span';
    accountNumberLabel = '(//strong[@class="ng-binding"])[1]';
    balanceLabel = '(//strong[@class="ng-binding"])[2]';
    currencyLabel = '(//strong[@class="ng-binding"])[3]';
    transactionsTab = '//button[@ng-class="btnClass1"]';
    depositTab = '//button[@ng-class="btnClass2"]';
    withdrawTab = '//button[@ng-class="btnClass3"]';

    //deposit tab
    depositAmountInput = '//input[@ng-model="amount"]';
    depositButton = '//button[text()="Deposit"]';

    //withdraw tab
    withdrawnAmountInput = '//input[@ng-model="amount"]';
    withdrawButton = '//button[text()="Withdraw"]';

    //transactions tab
    startDateInput = '#start';
    endDateInput = '#end';
    resetButton = '//button[text()="Reset"]';
    transactionRecords = "//tbody/tr"
}

export default CustomerAccountPage;