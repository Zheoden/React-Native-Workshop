Feature: Change Language

  Scenario: User should be able to change language
    Given the user is in the application
    When the user clicks the English toggle button
      Then the language is Spanish
    When the user clicks the Spanish toggle button
      Then the language is English