import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user is on the home page', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team4.nodehill.se/')
});

When('I click on {string} tab from the header', (BOKA) => {
  // TODO: implement step
  cy.get('[href="/bokning/6523d4e91451567f3ed4cebf"]').click()
});

Then('I select the movie, the date and the seats', () => {
  // cy.get(':nth-child(3) > select').select('Titane');
  // cy.get(':nth-child(4) > select').should('have.value', '49')
  // Select the movie
  cy.get('.dropdown-container:nth-child(3) select').select('Titane');
  // Select the week
  cy.wait(2000)
  cy.get('.dropdown-container:nth-child(4) select').select('Vecka 49');
  cy.wait(2000)
  // Select the showing
  cy.get('.dropdown-container:nth-child(5) select').select('6523d5601451567f3ed4cec9');
  cy.wait(3000)
  cy.get('.ticket-counter-container').contains('Vuxenbiljetter').next('.plus-minus-container').find('.ticket-counter-arrow-plus').click();
  cy.get('.ticket-counter-container').contains('Vuxenbiljetter').next('.plus-minus-container').find('.ticket-counter-arrow-plus').click();

  cy.get('#\\33').click();
  
  cy.get('#\\34').click();


});

Then('I complete the booking by pressing {string} button', (a) => {
  cy.get('.book-button').click();
  cy.get('.email-field').type('necla.saglam87@gmail.com');
  cy.get('.send-btn').click();
  cy.get('.confirm-btn').click();

});

When('I get back to the home page', () => {
  // TODO: implement step
  cy.get('.nav-btn').click();

});

Then('there is no option to cancel the booking', () => {
  // TODO: implement step
});

Given('that the user is logged in', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
When('I click on {string} tab from the header', (a) => {});*/

/* No duplicate steps, this one already above
Then('I select the movie, the date and the seats', () => {});*/

/* No duplicate steps, this one already above
Then('I complete the booking by pressing {string} button', (a) => {});*/

When('I get back to the home page and I click on the {string} tab from the header', (a) => {
  // TODO: implement step
});

Then('I press the {string} button and complete the process', (a) => {
  // TODO: implement step
});

Then('The ticket will be disappeared from the list', () => {
  // TODO: implement step
});