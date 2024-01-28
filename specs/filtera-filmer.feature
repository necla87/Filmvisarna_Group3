Feature: Filter movies
  As a user,I want to be able to filter films by age limit

  Scenario: Filter
    Given that the use is on the homepage
    When I press the button  "Logga In"
    Then I can choose "visningar"
    And after that I can choose "välj åldersgräns"
    And I Can filter movies by age