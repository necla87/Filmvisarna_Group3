Feature: Booking History
As a user I will be able to see the booked tickets.
  
  Scenario: Viewing Book History
    Given that the user is logged in to the page
    When I click on "BOKA" to book
    Then I choose the movie, the date and the seats
    And I click on "Bekräfta" button to complete the booking
    When I get back to the main page and I click on the "Profil" tab
    Then I will be able to see the booking history