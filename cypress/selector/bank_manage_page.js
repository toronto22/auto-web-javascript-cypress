class  BankManagePage {
  //Actions
  addCustomer() {
    cy.get(this.addCustomerTab).click();
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

  }

  export default BankManagePage;