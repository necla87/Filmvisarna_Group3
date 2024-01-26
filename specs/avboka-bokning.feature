Feature: Book and Cancel Movie Tickets
  As a Member I will be able to cancel the booked tickets.

  Background:
    Given I am logged in as a user
   

  Scenario: Book and Cancel Movie Tickets
    When I click on "Boka" tab
    And I select the movie "Titane"
    And I choose the week 
    And I select the show time
    Then I click the plus button to add 2 "vuxen biljetter"
    And I choose the seats
    When I click the "Boka Biljetter" button
    And I click the "Till bekräftelse" button
    Then I click the "Bekräfta" button
    And I click the "Hem" button
    When I click on the "Profil" tab
    And I click on the "Ta bort" button for the movie "Titane"
    Then an alert should appear with the text "Är du säker att du vill ta bort bokningen? Det går inte att ångra detta val"
    When I click "OK"

    Then the booking for the movie "Titane" should disappear from my bookings
