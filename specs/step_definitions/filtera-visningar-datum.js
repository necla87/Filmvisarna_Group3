import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user is on the home page', () => {
  cy.visit('/')


});

When('I press the button {string}', (a) => {
  cy.get('[href="/visningar"]').click()
});

/* No duplicate steps, this one already in filtera-filmer.js
Then('I can choose {string}', (a) => {});*/

/* No duplicate steps, this one already in filtera-filmer.js
Then('after that I can choose {string}', (a) => {});*/

Then('I can choose a week to watch a movie', (a) => {
  // TODO: implement step
  cy.wait(11000)
  cy.get('.screenings-selectors:nth-child(3)').select('Vecka 39')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Alla veckor')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Vecka 48')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Alla veckor')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Vecka 49')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Alla veckor')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Vecka 50')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Alla veckor')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Vecka 51')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Alla veckor')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Vecka 52')
  cy.wait(1000)
  cy.get('.screenings-selectors:nth-child(3)').select('Alla veckor')


});



