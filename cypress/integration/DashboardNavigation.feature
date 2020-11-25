Feature: Dashboard card verirfication

    Background: User Navigates to the Main Page
        Given User navigates to the Main Page
        Then I see "OOS: Crew applications" in the title
        Then I verify page header block

    Scenario:1 Board activities verification
        When I input Name "julia" and City "sheffield" into the form
        And I click on Submit button
        Then I veryfy that search result table contains user with First Name "julia", Last Name "cunningham", City "sheffield"
        When I set user status to the Applied state
        Then Items count in the coloumn with text "Applied" should be "1"
        When I click on the right Arrow button on the user's card
        Then Items count in the coloumn with text "Interviewing" should be "1"
        When I click on the right Arrow button on the user's card
        Then Items count in the coloumn with text "Hired" should be "1"
        Then I veryfy that search result table contains user with First Name "julia", Last Name "cunningham", City "ASSERTION TEST"