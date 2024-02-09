/*import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the booking page', () => {

  cy.visit('https://filmvisarna-team4.nodehill.se/booking-page');
});

When('I select seat {int}', (seatNumber) => {
  cy.get('#28').click();
  cy.wait(3000)
  cy.get('#29').click();
  cy.wait(3000)

});

And('both seats are available', () => {
});

Then('seat {int} should be marked as selected', (seatNumber) => {
  cy.get('.temporary-selected').should('exist');
});

When('I book the seats', () => {
  cy.contains('Boka biljetter').click();
});

Then('the seats should be booked', () => {
  // en bekräftelse på att nästa sida laddas, nästa sida borde innehålla texten "Fyll i din mailadress"
  cy.contains('Fyll i din mailadress');
});
*/