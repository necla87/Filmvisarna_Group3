Feature: Movie prototype

    As a user I want to be able to choose between 10 different movies, and choose between 2 different salons, and choose between 28 different dates to watch the movies.


    Scenario: Choose between 10 movies 
    Given that the user is on the homepage
    When the user presses on "VISNINGAR" 
    Then the user should be able to choose between 10 different movies by using a filter

    Scenario: Choose between 2 different salons 
    Given that the user is on the homepage
    When the user presses on "VISNINGAR"
    Then the user should be able to choose between 2 different salons

    Scenario: Choose date for movie
    Given that the user is on the homepage
    When the user presses on "VISNINGAR"
    Then the user should be able to choose between 28 different dates to watch a movie