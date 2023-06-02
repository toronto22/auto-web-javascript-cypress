/// <reference types="cypress" />

import BankManagePage from "../../../selector/bank_manage_page"


describe('customer login test', () => {
  const bankManager = new BankManagePage();

  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('The Login button is hidden in default', () => {
    bankManager.addCustomer();
  })

  it('The Login Button Is Hidden When Deselect Your Name', () => {
  })

  it('The Login Button Is Shown When Select Your Name', () => {
  })
  it('Login Successfully With Valid Credential', () => {
    })
  
})

