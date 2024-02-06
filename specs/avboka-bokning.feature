Feature: Book and Cancel Movie Tickets
  As a user I will be able to cancel the booked tickets.
 
  Scenario: Cancel the booked ticket as a logged in user
    Given that the user is logged in
    When I click on "BOKA" tab from the header
    Then I select the movie, the date and the seats as a member
    And I complete the booking by pressing "Bekräfta" button as a member
    When I get back to the home page and I click on the "Profil" tab from the header
    Then I press the "Ta bort" button and complete the process
    And The ticket will be disappeared from the list
    
  