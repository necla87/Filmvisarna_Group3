Feature: Specifik film

  As a user I want to be able to go to a webpage with details for a specific movie.


  Scenario: See details for a specific movie
    Given that the user is on the homepage
    When the user presses on the header "Visningar"
    And the user chooses a movie
    Then the user should be able to see details about the specific movie of choice