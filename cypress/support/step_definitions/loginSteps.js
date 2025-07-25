const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const LoginPage = require('../../pages/loginPage')
const loginPage = new LoginPage()

Given('user is on the login page', () => {
  loginPage.visit()
})

When('user logs in using username {string} and password {string}', (username, password) => {
  loginPage.enterUsername(username)
  loginPage.enterPassword(password)
  loginPage.clickLogin()
})

Then('user should see the dashboard page', () => {
  cy.url().should('include', '/dashboard')
})