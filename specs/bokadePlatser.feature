Feature: Unavailable seats

    As a user I should not be able to book a seat that is already booked by someone else.


    Scenario: See booked seats
    Given that the user is on the homepage
    When the user scrolls down on the page and chooses a movie 
    And press the "Boka" button 
    And select a seat that is booked
    Then the user should not be able to choose the seat that is already taken by someone else
    And it should display a screen with the text "Vänligen välj lika många säten som biljetter."

    
