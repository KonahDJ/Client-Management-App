package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ClientMeetings {


@When("the user clicks on the Scheduled Meetings link at the top of web page")
public void the_user_clicks_on_the_scheduled_meetings_link_at_the_top_of_web_page() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Step 1: ");
}

@And("the web page is changed\\/routed to the Scheduled Meetings webpage")
public void the_web_page_is_changed_routed_to_the_scheduled_meetings_webpage() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Step 2: ");
}

@Then("the user is directed to a table with Clients that have a Meeting date")
public void the_user_is_directed_to_a_table_with_clients_that_have_a_meeting_date() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Step 3: ");
}

@And("will include their names, company, project, and date of the meeting")
public void will_include_their_names_company_project_and_date_of_the_meeting() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Step 3.1: ");
}

@And("have a submit input form \\(buttton, checkbox, etc.) that will delete the desired row in the table")
public void have_a_submit_input_form_buttton_checkbox_etc_that_will_delete_the_desired_row_in_the_table() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Step 4: ");
}
	
}
