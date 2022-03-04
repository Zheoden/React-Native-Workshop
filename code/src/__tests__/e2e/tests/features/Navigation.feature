Feature: Navigation

  Scenario: User should be able to navigate the app
    Given the user is in the application

    When the user clicks the Go to Help button
      Then the help page should be visible
    When the user clicks the back button in the help page
      Then the home page should be visible

    When the user clicks the Go to Category 1 button
      Then the category page should be visible
    When the user clicks the back button in the category page
      Then the home page should be visible

    When the user clicks the Go to Category 2 button
      Then the category page should be visible
    When the user clicks the back button in the category page
      Then the home page should be visible