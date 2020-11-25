Feature: Search functionality verifircation

   Background: User Navigates to the Main Page
      Given User navigates to the Main Page
      Then I see "OOS: Crew applications" in the title
      Then I verify page header block

   Scenario:1 Search functionality verification 
      And I veryfy search functionality by test user Name
      Then I veryfy search functionality by INVALID test user Name and City

   Scenario:2 Board activities verification
      When I input Name "julia" and City "sheffield" into the form
      And I click on Submit button
      Then I veryfy that search result table contains user with First Name "julia", Last Name "cunningham", City "sheffield"