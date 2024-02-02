import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in bokadePlatser.js
Given('that the user is on the homepage', () => {});*/


When('the user presses on the {string}', (a) => {
  cy.get('[href="/visningar"]').click()
  cy.wait(11000)
});

When('the user press on a movie title', () => {
  cy.get('a.link-color').contains('Parasit').click()
});

Then('the user should be able to see details about the specific movie of choice', () => {
  // TODO: implement step
  cy.wait(6000)
  cy.get('.movie-info-text')
  cy.get('p.normal-text')
});