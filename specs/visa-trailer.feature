Feature: View trailer
  As a user ,I want to be able to see trailers for movies

  Scenario: Show trailer
    Given that the user visit the start page
    When the user presses on the "VISNINGAR"
    And the user press on the movie title
    Then the user click on the red play button
    And the user should be able to see the trailer for the movie

