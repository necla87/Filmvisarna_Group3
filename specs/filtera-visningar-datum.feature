Feature: Filter the movies by date
  As a user ,T want to be able to filter the movies by date

  Scenario: Filter
    Given that the user is on the home page
    When I press the button "Logga In"
    Then I can choose "Visningar"
    And after that I can choose "Alla veckor"
    And choose which "vecka"
    And I can see the day and date on the screen