export default {
    csutomerNameLabel: '//strong/span',
    accountNumberLabel: '(//strong[@class="ng-binding"])[1]',
    balanceLabel: '(//strong[@class="ng-binding"])[2]',
    currencyLabel: '(//strong[@class="ng-binding"])[3]',
    transactionsTab: '//button[@ng-class="btnClass1"]',
    depositTab: '//button[@ng-class="btnClass2"]',
    withdrawlTab: '//button[@ng-class="btnClass3"]',

    //deposit tab
    depositAmountInput: '//input[@ng-model="amount"]',
    depositButton: '//button[text()="Deposit"]',

    //withdrawl tab
    withdrawnAmountInput: '//input[@ng-model="amount"]',
    withdrawButton: '//button[text()="Withdraw"]',

    //transactions tab
    startDateInput: '#start',
    endDateInput: '#end',
    resetButton: '//button[text()="Reset"]',
  };