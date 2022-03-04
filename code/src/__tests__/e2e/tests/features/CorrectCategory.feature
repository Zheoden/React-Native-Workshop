Feature: Correct Category

  Scenario: User navigates to Category 1
    Given the user is in the application

    When the user clicks the Go to Category 1 button
      Then the category page should be visible
      And the page should say Category 1
    When the user clicks the back button in the category page
      Then the home page should be visible

  Scenario: User navigates to Category 2
    Given the user is in the application

    When the user clicks the Go to Category 2 button
      Then the category page should be visible
      And the page should say Category 2
    When the user clicks the back button in the category page
      Then the home page should be visible