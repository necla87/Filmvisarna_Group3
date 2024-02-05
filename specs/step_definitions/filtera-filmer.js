import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user is on the web page', () => {

  cy.visit("/visningar");
  cy.wait(4000)

  // Val ålder
  cy.get('.screenings-selectors').eq(1).select('0')


  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('contain', '0 år');
  });

  // Kontrollera att andra filmer inte visas med andra åldrar
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '7');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '11 år');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '15 år');
  });

  // Val ålder
  cy.get('.screenings-selectors').eq(1).select('7')
  cy.wait(3000)
  // Kontroll att filmer med ålder 7 år syns endast
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('contain', '7 år');
  });

  // Kontrollera att andra filmer inte visas med andra åldrar
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', 'Barntillåtet');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '11 år');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '15 år');
  });
  cy.wait(2000)


  // Val ålder
  cy.get('.screenings-selectors').eq(1).select('11')
  cy.wait(3000)
  // Kontroll att filmer med ålder  11 år syns endast
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('contain', '11 år');
  });

  // Kontrollera att andra filmer inte visas med andra åldrar
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', 'Barntillåtet');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '7 år');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '15år');
  });
  cy.wait(3000)


  cy.get('.screenings-selectors').eq(1).select('15')
  cy.wait(3000)
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('contain', '15 år');
  });

  // Kontrollera att andra filmer inte visas med andra åldrar
  cy.get('.screenings-list').each(($movie) => {
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', 'Barntillåtet');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '7 år');
    cy.wrap($movie).find('.screenings-p.desktopvye').should('not.contain', '11');

  });
});




When('I press the button  {string}', (a) => {
  // TODO: implement step
});

Then('I can choose {string}', (a) => {
  // TODO: implement step
});

Then('after that I can choose {string}', (a) => {
  // TODO: implement step
});

Then('I Can filter movies by age', () => {
  // TODO: implement step
});