

class LoginPage {

  generalLoginElements = {
    usernameInput:():Cypress.Chainable => cy.getByTestId('signin-username'),
    usernameRequired:():Cypress.Chainable => cy.get('#username-helper-text'),
    passwordInput:():Cypress.Chainable => cy.getByTestId('signin-password'),
    passwordAtLeastFour:():Cypress.Chainable => cy.get('#password-helper-text'),
    rememberMeBox:():Cypress.Chainable => cy.getByTestId('signin-remember-me').should('exist'),
    submitButton:():Cypress.Chainable => cy.getBySel('signin-submit'),
    signUpLink:():Cypress.Chainable => cy.getBySel('signup').should('exist'),
    logo:():Cypress.Chainable => cy.getByTestId('logo').should('exist'),
    signinError:():Cypress.Chainable => cy.getBySel('signin-error').should('exist')
  };

  signinButtonDisable() : void {
    this.generalLoginElements.submitButton().should('have.class', 'Mui-disabled');
  };

  signinButtonEnable() :void {
    this.generalLoginElements.submitButton().should('not.have.class', 'Mui-disabled');
  }

  rememberBoxCheck(): void {
    this.generalLoginElements.rememberMeBox().check()
    this.generalLoginElements.rememberMeBox().should('be.checked')
  }

  authentication(username:string, password:string):Cypress.Chainable {
    cy.url().should('contain', "signin");
    this.generalLoginElements.logo();
    this.generalLoginElements.usernameInput().should('exist').type(username);
    this.generalLoginElements.passwordInput().should('exist').type(password);
    return this.generalLoginElements.submitButton().should('exist').click();
  };
}
  
export default LoginPage;
  
 
  
 