import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given('that the user is logged in', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team4.nodehill.se/logga-in')
  cy.get('input[name="mail"]').type('necla.saglam87@gmail.com');
  cy.get('input[name="password"]').type('Saglam4820');
  cy.get('button.main-btn[type="submit"]').click();
  cy.get('.nav-login-btn')
});
When('I click on {string} tab from the header', (BOKA) => {
  // TODO: implement step
  cy.get('[href="/bokning/6523d4e91451567f3ed4cebf"]').click()
});

Then('I select the movie, the date and the seats as a member', () => {
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



Then('I complete the booking by pressing {string} button as a member', (a) => {
  cy.get('.book-button').click();
  cy.get('.send-btn').click();
  cy.get('.confirm-btn').click();

});
Then('I press the {string} button and complete the process', () => {
  // TODO: implement step
  cy.contains('.card-title', 'Titane')
    .parents('.booking-history-card')
    .find('.delete-booking-btn')
    .click();
  cy.wait(2000)
  // Handle the alert
  cy.on('window:confirm', (str) => {
    expect(str).to.equal('Är du säker att du vill ta bort bokningen? Det går inte att ångra detta val');
    return true; // Click OK on the alert
  });

});
When('I get back to the home page and I click on the {string} tab from the header', () => {
  // TODO: implement step
  cy.get('.nav-list-item').contains('PROFIL').click();

});



Then('The ticket will be disappeared from the list', () => {
  // TODO: implement step
  cy.get('.profilepage-content > :nth-child(6)')
    .should('not.contain', 'Titane');
  cy.get('.nav-login-btn').click()

});