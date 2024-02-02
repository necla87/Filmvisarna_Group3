Feature: Member
  As a user I will be able to login as a member

  Scenario: Login with registered account
    Given That I am on the main page
    When I click on the  "Logga In" button    
    Then I fill in the credentials
    And I click on "Logga in" button to complete the login

  Scenario: Log out from the logged in user
    Given That I am on the main page
    When I click on the  "Logga Ut" 
    Then the user will be logged out.
    


