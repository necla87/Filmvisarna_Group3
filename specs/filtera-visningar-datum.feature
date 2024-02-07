Feature: Filter the movies by weeks
  As a user ,T want to be able to filter the movies by date

  Scenario: Filter
    Given that the user is on the start page
    When I press the button "Visningar"
    Then I can choose a week to watch a movie
