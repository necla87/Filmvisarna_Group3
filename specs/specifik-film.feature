Feature: Specifik film

  As a user I want to be able to go to a webpage with details for a specific movie.


  Scenario: See details for a specific movie
    Given that the user is on the homepage
    When the user presses on the "VISNINGAR"
    And the user press on a movie title
    Then the user should be able to see details about the specific movie of choice