Feature: Filter movies
  As a cinema visitor,I want to be able to filter films by age limit

  Scenario: Filter
    Given that the customer visit the webbsite
    When I press the button on the right side
    Then I can choose "visningar"
    And after that I can choose "välj åldersgräns"
    And I Can filter movies by age