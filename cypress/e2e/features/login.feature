Feature: Login and Add Multiple Admins

  Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user logs in using username "<username>" and password "<password>"
    Then user should see the dashboard page

    Examples:
      | username | password  |
      | Admin    | admin123  |
