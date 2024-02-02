import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user is on the homepage', () => {
  cy.visit('/');
});

When('the user presses on the header {string}', () => {
  cy.get('[href="/bokning/6523d4e91451567f3ed4cebf"]').click()
});

When('the user chooses a movie,  date and seats', () => {
  cy.get('.dropdown-container:nth-child(3) select').select('Titane');
  cy.wait(2000)
  cy.get('.dropdown-container:nth-child(4) select').select('Vecka 49');
  cy.wait(2000)
  cy.get('.dropdown-container:nth-child(5) select').select('6523d5601451567f3ed4cec9');
  cy.wait(3000)
  cy.get('.ticket-counter-container').contains('Vuxenbiljetter').next('.plus-minus-container').find('.ticket-counter-arrow-plus').click();
  cy.get('.ticket-counter-container').contains('Vuxenbiljetter').next('.plus-minus-container').find('.ticket-counter-arrow-plus').click();  
});


When('the user select a seat that is booked', () => {
  cy.wait(3000)
  cy.get('#\\33').click();
});

Then('the user should not be able to choose the seat that is already taken by someone else', () => {
  cy.get('.book-button').click();
});

Then('it should display a screen with the text {string}', (a) => {
  cy.get(3000)
  cy.get('#alertMessage').contains('Vänligen välj lika många säten som biljetter.')
    .should('be.visible')
});