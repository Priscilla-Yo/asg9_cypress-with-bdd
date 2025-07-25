class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  }
  enterUsername(username) {
    cy.get('[name="username"]').clear().type(username)
  }
  enterPassword(password) {
    cy.get('[name="password"]').clear().type(password)
  }
  clickLogin() {
    cy.get('[type="submit"]').click()
  }
}
module.exports = LoginPage