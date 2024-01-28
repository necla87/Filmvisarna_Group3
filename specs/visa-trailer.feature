Feature: View trailer
  As a user ,I want to be able to see trailers for movies

  Scenario: Show trailer
    Given that the user visit the homepage
    When I scroll down to "Aktuella filmer"
    And I can watch all current movies
    And the movie that I have chosen to watch the trailer from shows on the screen
    Then I can choose "visa mer"
    And I can press the " röda kanappen"
    And the trail plays
