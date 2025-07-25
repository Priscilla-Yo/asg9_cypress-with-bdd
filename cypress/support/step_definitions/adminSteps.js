const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const LoginPage = require('../../pages/loginPage')
const AdminPage = require('../../pages/adminPage')
const loginPage = new LoginPage()
const adminPage = new AdminPage()

Given('user is logged in as {string} with {string}', (username, password) => {
  loginPage.visit()
  loginPage.enterUsername(username)
  loginPage.enterPassword(password)
  loginPage.clickLogin()
})

When('user navigates to Admin page', () => {
  adminPage.navigateToAdmin()
})

When('user adds a new admin {string} with role {string}', (newUsername, role) => {
  adminPage.clickAddUser()
  adminPage.enterNewAdminDetails(newUsername, role)
  adminPage.saveUser()
})

Then('the admin {string} should appear in the user list', (newUsername) => {
  adminPage.verifyUserExists(newUsername)
})
