class AdminPage {
  navigateToAdmin() {
    cy.contains('Admin').click()
  }
  clickAddUser() {
    cy.contains('Add').click()
  }
  enterNewAdminDetails(username, role) {
    cy.get('input[name="username"]').type(username)
    cy.get('div[role="listbox"]').click()
    cy.contains(role).click()
  }
  saveUser() {
    cy.contains('Save').click()
  }
  verifyUserExists(username) {
    cy.contains(username).should('exist')
  }
}
module.exports = AdminPage