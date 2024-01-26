Feature: Available seats inside of a salon for a specifik movie

   As a user I want to be able to see available seats inside of a salon for a specific movie.



  Scenario: Be able to see available seats inside a salon
    Given that the user is on the homepage
    When the user chooses a movie
    And presses the "Boka" button
    Then the user should be able to see which seats are available for that movie



  Scenario: No seats available for the movie
    Given that the user is on the homepage
    When the user chooses a movie
    And presses the "Boka" button
    And there is no seats available for that movie
    Then the user should not be able to choose seats for that movie