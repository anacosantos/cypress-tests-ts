class NavTopBar {

    generalNavBarElements = {
        navTopBarToggle:():Cypress.Chainable => cy.getBySel('sidenav-toggle'),
        navTopBarEveryone:():Cypress.Chainable => cy.getBySel('nav-public-tab'),
        navTopBarFriends:():Cypress.Chainable => cy.getBySel('nav-contacts-tab'),
        navTopBarMine:():Cypress.Chainable => cy.getBySel('nav-personal-tab'),
        navTopBarNew:():Cypress.Chainable => cy.getBySel('nav-top-new-transaction'),
        navTopBarNotifications:():Cypress.Chainable => cy.getBySel('nav-top-notifications-link'),
    };  
}
    
export default NavTopBar;