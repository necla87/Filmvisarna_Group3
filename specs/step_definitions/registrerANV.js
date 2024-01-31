import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am on the home page', () => {
  cy.visit('/')
});

When('I click on the header  {string}', () => {
  // TODO: implement step
  cy.get('[href="/registrera"]').click()
});

Then('I fill in the information', () => {
  // TODO: implement step
  cy.get('[name="first-name"]').type('tester')
  cy.get('[name="last-name"]').type('KYH')
  cy.get('[type="email"]').type('neclatoker35@gmail.com')
  cy.get('.password-left > .login-field').type('Necla12345')
  cy.get('.password-right > .login-field').type('Necla12345')
  cy.get('.main-btn').click()

});

Then('I click on {string} button to complete the registration', () => {
  // TODO: implement step
});