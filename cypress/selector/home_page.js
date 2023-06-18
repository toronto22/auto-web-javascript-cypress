class  HomePage {
    customerLoginButton = '//button[text()="Customer Login"]';
    bankManagerLoginButton = '//button[text()="Bank Manager Login"]';

    visit() {
      return  cy.visit('https://shop.demoqa.com/my-account/');
    }
  };


export default HomePage;