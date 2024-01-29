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
  cy.get(':nth-child(3) > select').select('Titane');
  cy.get(':nth-child(4) > select').should('have.value', '49')

 

});

Then('I complete the booking by pressing {string} button', (a) => {
  // TODO: implement step
});

When('I get back to the home page', () => {
  // TODO: implement step
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