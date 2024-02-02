Feature: Booking Tickets with Different Prices

  As a user I will be able to book tickets with different prices

  Scenario: User books tickets for a child and two adults
    Given I am logged in as a user
    And I click on "Boka" from the top
    Then I select the movie and the date
    And I add 1 child, 2 adult tickets and I choose the seats
    When I click "Boka Biljetter" button to complete the booking
    Then I click "Bekräfta" button and booking number will be displayed





