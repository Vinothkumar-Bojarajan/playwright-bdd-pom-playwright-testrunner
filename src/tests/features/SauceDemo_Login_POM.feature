Feature: Login
     Feature Login page will work depending on the user credentials.

  @Login_Test
  Scenario: Successful Login with Valid Credentials
    Given A web browser is at the saucelabs login page
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    Then the url will contains the inventory subdirectory
