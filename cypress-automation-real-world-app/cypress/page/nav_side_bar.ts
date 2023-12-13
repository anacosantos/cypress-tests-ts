class NavSideBar {

    generalNavSIdeBarElements = {
        sideNaAvatar:():Cypress.Chainable => cy.getBySel('avatar-ui'),
        sideNavFullName:():Cypress.Chainable => cy.getBySel('sidenav-user-full-name'),
        sideNavUserName:():Cypress.Chainable => cy.getBySel('sidenav-username'), 
        sideNavAccountBalance:():Cypress.Chainable => cy.getBySel('sidenav-user-balance'),
        sideNavHome:():Cypress.Chainable => cy.getBySel('sidenav-home'),
        sideNavAccount:():Cypress.Chainable => cy.getBySel('sidenav-user-settings'),
        sideNavBankAccounts:():Cypress.Chainable => cy.getBySel('sidenav-bankaccounts'),
        sideNavNotifications:():Cypress.Chainable => cy.getBySel('sidenav-notifications'),
        sideNavSignout:():Cypress.Chainable => cy.getBySel('sidenav-signout'),
    };  
}
    
export default NavSideBar;