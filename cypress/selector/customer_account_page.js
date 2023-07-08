class CustomerAccountPage {

    openTransactionTab() {
        cy.xpath(this.transactionsTab).click();

        return this;
    }

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
}

export default CustomerAccountPage;