import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user visit the start page', () => {
  // TODO: implement step
  cy.visit('/')
});

/* No duplicate steps, this one already in specifik-film.js
When('the user presses on the {string}', (a) => {});*/

When('the user press on the movie title', () => {
  // TODO: implement step

  cy.get('a.link-color').contains('Parasit').click()
});

const getIframeDocument = () => {
  return cy
    .get('iframe[title="Trailer"]')
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
    // automatically retries until body is loaded
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)
}

Then('the user click on the red play button', () => {
  // TODO: implement step
  getIframeBody().find('.ytp-large-play-button').click();
});

Then('the user should be able to see the trailer for the movie', () => {
  // TODO: implement step

});