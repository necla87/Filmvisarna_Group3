Feature: Available seats inside of a salon for a specifik movie

   As a user I want to be able to see available seats inside of a salon for a specific movie.



  Scenario: Be able to see available seats inside a salon
    Given that the user is on the homepage
    When the user presses the "BOKA" button
    Then the user should be able to see which seats are available for that movie



