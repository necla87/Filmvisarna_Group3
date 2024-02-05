import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the booking page', () => {
  // By default, visit the booking page URL
  cy.visit('https://filmvisarna-team4.nodehill.se/booking-page');
});

When('I select seat {int}', (seatNumber) => {
  // ersätt
  cy.get(`.seat.available:nth-child(${seatNumber})`).click();
});

And('both seats are available', () => {
});

Then('seat {int} should be marked as selected', (seatNumber) => {
  // ersätt
  cy.get(`.seat.selected:nth-child(${seatNumber})`).should('exist');
});

When('I book the seats', () => {
  // ersätt book-button
  cy.get('button[book-button"]').click();
});

Then('the seats should be booked', () => {
  // en bekräftelse på att nästa sida laddas, nästa sida borde innehålla texten "Fyll i din mailadress"
  cy.contains('Fyll i din mailadress');
});



root > div.booking - page - container > div > button.book - button



// Scenario: Select seats that are not available

When('I select a seat that is not available', () => {
  // ersätt
  cy.get('.seat.unavailable').eq(0).click(); // Assuming the first unavailable seat
});

Then('I cannot click it or book it', () => {
  // ersätt
  cy.get('.seat.unavailable').eq(0).should('not.have.class', 'selected');
  // ersätt
  cy.get('button[type="submit"]').should('be.disabled');
});
