import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in as a user', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team4.nodehill.se/logga-in')
  cy.get('input[name="mail"]').type('neclatoker35@gmail.com');
  cy.get('input[name="password"]').type('Necla12345');
  cy.get('button.main-btn[type="submit"]').click();
  cy.get('.nav-login-btn')
});

Given('I click on {string} from the top', () => {
  // TODO: implement step
  cy.get('[href="/bokning/6523d4e91451567f3ed4cebf"]').click()
});

Then('I select the movie and the date', () => {
  // TODO: implement step
  cy.get('.dropdown-container:nth-child(3) select').select('Call me by your name');
  // Select the week
  cy.wait(2000)
  cy.get('.dropdown-container:nth-child(4) select').select('Vecka 49');
  cy.wait(2000)
  // Select the showing
  cy.get('.dropdown-container:nth-child(5) select').select('652e425babf116825cc87204');
  cy.wait(3000)
});

Then('I add 1 child, 2 adult tickets and I choose the seats', () => {
  // TODO: implement step
  cy.get(':nth-child(6) > .plus-minus-container > .ticket-counter-arrow-plus').click()
  cy.get('.seats-grid .available').eq(0).click();
  cy.get('.seats-grid .available').eq(1).click();
  cy.get('.seats-grid .available').eq(2).click();

});

When('I click {string} button to complete the booking', (a) => {
  // TODO: implement step
  cy.get('.book-button').click();
  cy.get('.send-btn').click();
  cy.get('.confirm-btn').click();
  cy.get('.booking-num').should('be.visible');
  
});

Then('I click {string} button and booking number will be displayed', (a) => {
  // TODO: implement step
  
  cy.get('.nav-login-btn').click()
});