class SignUp {

    generalSignUpElements = {
        signupFirstName:():Cypress.Chainable =>cy.getBySel('signup-first-name'),
        signupLastName:():Cypress.Chainable =>cy.getBySel('signup-last-name'),
        signupUsername:():Cypress.Chainable =>cy.getBySel('signup-username'),
        signupPassword:():Cypress.Chainable =>cy.getBySel('signup-password'),
        signupConfirmPassword:():Cypress.Chainable =>cy.getBySel('signup-confirmPassword'),
        signupSubmitButton:():Cypress.Chainable =>cy.getBySel('signup-submit'),
    };

    signUpAuthentication(firstname: string, lastname: string, username:string, password: string, confirmPassw: string):Cypress.Chainable {
        this.generalSignUpElements.signupFirstName().should('exist').type(firstname);
        this.generalSignUpElements.signupLastName().should('exist').type(lastname);
        this.generalSignUpElements.signupUsername().should('exist').type(username);
        this.generalSignUpElements.signupPassword().should('exist').type(password);
        this.generalSignUpElements.signupConfirmPassword().should('exist').type(confirmPassw);
        return this.generalSignUpElements.signupSubmitButton().should('exist').click();
    };
};

export default SignUp;