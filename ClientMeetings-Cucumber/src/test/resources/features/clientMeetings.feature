#Author: john@example.com
#Date: 10 May 2023
#Description: This feature is the flow to see any scheduled meeting client with option to cancel it
#Keywords: Clients, Information, Names, Company, Project, Meeting, Cancel
Feature: feature to arrive at the users Client Meeting schedule on their Client Managing App

  Scenario: User is successful in going to the Clients Meeting webpage 
    Given the user has successfully logged into Client Managing App
    When the user clicks on the Scheduled Meetings link at the top of web page
    And the web page is changed/routed to the Scheduled Meetings webpage
    Then the user is directed to a table with Clients that have a Meeting date
    And will include their names, company, project, and date of the meeting
    And have a submit input form (buttton, checkbox, etc.) that will delete the desired row in the table
    
    
    
    
    
    
    