import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in bokadePlatser.js
Given('that the user is on the homepage', () => {});*/


When('the user presses the {string} button', (a) => {
  // TODO: implement step
  cy.get('[href="/bokning/6523d4e91451567f3ed4cebf"]').click()
});

Then('the user should be able to see which seats are available for that movie', () => {
  // TODO: implement step
  cy.get('.seats-grid button.available').should('exist');
});

