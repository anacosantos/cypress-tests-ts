class Onboarding {
    generalOnboardingElements = {
        onboboardingGetStared:():Cypress.Chainable => cy.getBySel('user-onboarding-dialog-title').should('exist'),
    };
}

export default Onboarding;