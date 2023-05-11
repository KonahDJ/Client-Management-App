#Author: john@example.com
#Date: 10 May 2023
#Description: This feature is the flow to see the Clients and their Info on the web page
#Keywords: Clients, Information, Names, Company, Email
Feature: feature to arrive at the users Client Information on their Client Managing App

  Scenario: User is successful in going to the Clients webpage 
    Given the user has successfully logged into Client Managing App
    When the user clicks on the Clients link at top of web page
    And the web page is changed/routed to the Clients webpage
    Then the user is directed to a table with all Clients and their names, company, email, and phone number
    
    
    
    