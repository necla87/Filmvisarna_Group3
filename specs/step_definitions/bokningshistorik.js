import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user is logged in to the page', () => {
  cy.visit('https://filmvisarna-team4.nodehill.se/logga-in')
  cy.get('input[name="mail"]').type('neclatoker35@gmail.com');
  cy.get('input[name="password"]').type('Necla12345');
  cy.get('button.main-btn[type="submit"]').click();
  cy.get('.nav-login-btn')
});

When('I click on {string} to book', (a) => {
  cy.window().then(window => window.eval('sessionStorage.clear()'))
  cy.get('[href="/bokning/6523d4e91451567f3ed4cebf"]').click()
});

Then('I choose the movie, the date and the seats', () => {
  // Select the movie
  cy.get('.dropdown-container:nth-child(3) select').select('Titane');
  // Select the week
  cy.wait(2000)
  cy.get('.dropdown-container:nth-child(4) select').select('Vecka 49');
  cy.wait(2000)
  // Select the showing
  cy.get('.dropdown-container:nth-child(5) select').select('6523d5601451567f3ed4cec9');
  cy.wait(3000)
  // Dynamically select and book available seats
  // Select the first two available seats
  cy.get('.seats-grid .available').eq(0).click();

  cy.get('.seats-grid .available').eq(1).click();


});

Then('I click on {string} button to complete the booking', (a) => {
  cy.get('.book-button').click();
  cy.get('.send-btn').click();
  cy.get('.confirm-btn').click();
});

When('I get back to the main page and I click on the {string} tab', (a) => {
  cy.get('.nav-list-item').contains('PROFIL').click();

});

Then('I will be able to see the booking history', () => {
  cy.get('.profilepage-content > :nth-child(6)').should('be.visible')
  cy.get('.nav-login-btn').click()
});