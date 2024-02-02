import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user visit the homepage', () => {
  // TODO: implement step
  cy.visit('/')

  cy.get("div.movie-card-links p").eq(0).click();


  cy.wait(3000);
  // funkar inte filmen spelas inte eftersom att den ligger i en iframe?
  // om det är okej att man bara refrera till ifram utan att använda klick funktionen.













  cy.get("a:nth-of-type(2) > button").click();
});

When('I scroll down to {string}', (a) => {
  // TODO: implement step
});

When('I can watch all current movies', () => {
  // TODO: implement step
});

When('the movie that I have chosen to watch the trailer from shows on the screen', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already in filtera-filmer.js
Then('I can choose {string}', (a) => {});*/

Then('I can press the {string}', (a) => {
  // TODO: implement step
});

Then('the trail plays', () => {
  // TODO: implement step
});