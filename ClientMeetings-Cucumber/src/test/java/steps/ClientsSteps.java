package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ClientsSteps {

	@Given("the user has successfully logged into Client Managing App")
	public void the_user_has_successfully_logged_into_client_managing_app() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 1: ");
	}

	@When("the user clicks on the Clients link at top of web page")
	public void the_user_clicks_on_the_clients_link_at_top_of_web_page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 2: ");
	}

	@And("the web page is changed\\/routed to the Clients webpage")
	public void the_web_page_is_changed_routed_to_the_clients_webpage() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 3: ");
	}

	@Then("the user is directed to a table with all Clients and their names, company, email, and phone number")
	public void the_user_is_directed_to_a_table_with_all_clients_and_their_names_company_email_and_phone_number() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 4: ");
	}
}

