/// <reference types="cypress" />

import HomePage from "../../../selector/home_page";


describe('customer login test', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  })

  it('The Login button is hidden in default', () => {
  })

  it('The Login Button Is Hidden When Deselect Your Name', () => {
  })

  it('The Login Button Is Shown When Select Your Name', () => {
  })
  it('Login Successfully With Valid Credential', () => {
    })
  
})

