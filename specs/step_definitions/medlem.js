import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am on the main page', () => {
  cy.visit('/')
  cy.wait(2000)
});

When('I click on the  {string} button', (a) => {
  // TODO: implement step
  cy.get('.nav-login-btn').click()
  cy.wait(2000)
});

Then('I fill in the credentials', () => {
  // TODO: implement step
  cy.get('input[name="mail"]').type('neclatoker35@gmail.com');
  cy.get('input[name="password"]').type('Necla12345');
});

Then('I click on {string} button to complete the login', (a) => {
  // TODO: implement step
  cy.get('button.main-btn[type="submit"]').click();
  cy.wait(2000)
});



When('I click on the  {string}', () => {
  cy.get('.nav-login-btn').click()
});

Then('the user will be logged out.', () => {
  // TODO: implement step
});