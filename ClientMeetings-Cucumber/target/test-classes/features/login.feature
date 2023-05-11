#Author: john@example.com
#Date: 10 May 2023
#Description: This feature is to validate the login flow
#Keywords: login, email, password
Feature: feature to validate the login flow for the client meetings app

  Scenario: Validate the login is successful when user enters credentials
    Given the user is on the login page
    When the user enters email and password in the form
    And the user clicks on the login button
    Then the user will be navigated to the Home Page
