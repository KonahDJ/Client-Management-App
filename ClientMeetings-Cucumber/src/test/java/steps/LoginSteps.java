package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {

	@Given("the user is on the login page")
	public void the_user_is_on_the_login_page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 1: Given");
	}

	@When("the user enters email and password in the form")
	public void the_user_enters_email_and_password_in_the_form() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 2: When");
	}

	@And("the user clicks on the login button")
	public void the_user_clicks_on_the_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 3: And");
	}

	@Then("the user will be navigated to the Home Page")
	public void the_user_will_be_nagivated_to_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Step 4: Then");
	}
}
