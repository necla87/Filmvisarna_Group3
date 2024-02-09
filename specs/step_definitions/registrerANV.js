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
  const uniqueEmail = `testuser${Math.floor(Math.random() * 100000)}@example.com`;

  cy.get('[name="first-name"]').type('tester');
  cy.get('[name="last-name"]').type('KYH');
  cy.get('[type="email"]').type(uniqueEmail);
  cy.get('.password-left > .login-field').type('Tester12345');
  cy.get('.password-right > .login-field').type('Tester12345');

});

Then('I click on {string} button to complete the registration', () => {
  // TODO: implement step
  cy.get('.main-btn').click()
  cy.wait(2000)
  cy.get('.nav-login-btn').click()
  cy.wait(2000)
  //back to the home page 
  cy.get('[href="/"]>.nav-list-item').click()
});