Feature: Booking Tickets with Different Prices
  As a user I will be able to book tickets with different prices.

  Background:
    Given I am logged in as a user

  Scenario: User books tickets with different prices
    When I click on "Boka" tab
    And I select the movie "Triangle of Sadness"
    And I choose the week "49"
    Then I select the show time
    And add one ticket to 'Barnbiljetter'
    And add one ticket to 'Vuxenbiljetter'
    And add one ticket to 'Pensionärbiljetter'
    Then choose three seats
    When I click the "Boka Biljetter" button
    And I click the "Till bekräftelse" button
    Then I click the "Bekräfta" button


