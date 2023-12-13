/// <reference types="cypress" />

import LoginPage from "../../../page/login";
const loginPage = new LoginPage();

let disableClass = 'Mui-disabled';
let letters = 'asc';
let loginErrors:any;

describe('Testing login page', () => {
  beforeEach('Visit the sign in page',() => {
    cy.visit("/");
    cy.fixture("authentication/authenticationErrors.json").then((data:string) => {
      loginErrors = data;
    };)  
  });

  it('Visit the sign in page and log in',() => {
    loginPage.authentication(Cypress.env('username'), Cypress.env('password'));
  });
 
  it('Should not validade username field and show the errors', () => {
    loginPage.generalLoginElements.usernameInput().should('exist').should('be.visible').trigger('mouseover').trigger('click').trigger('mouseout');
    cy.get('body').click();
    loginPage.generalLoginElements.usernameRequired().should('contain', loginErrors.errors.usernameRequired);
    loginPage.generalLoginElements.submitButton().should('have.class', disableClass);

    loginPage.generalLoginElements.usernameInput().should('exist').type('wed');
    loginPage.generalLoginElements.submitButton().should('have.class', disableClass);
  });

  it('Should not validade password field and show the errors', () => {
    loginPage.generalLoginElements.usernameInput().should('exist').type(letters);
    loginPage.generalLoginElements.passwordInput().should('exist').type(letters);
    loginPage.generalLoginElements.usernameInput().click();
    loginPage.generalLoginElements.passwordAtLeastFour().should('contain', loginErrors.errors.passwordAtLeastFour);
    loginPage.signinButtonDisable();
  });

  it('Should not validade usarname and password when pass both wrong', () => {
    loginPage.generalLoginElements.usernameInput().should('exist').type(letters);
    loginPage.generalLoginElements.passwordInput().should('exist').type('aaaaa');
    loginPage.generalLoginElements.submitButton().should('exist').click();
    loginPage.generalLoginElements.signinError();
  });

  it('Should validate remember me box', () => {
    loginPage.rememberBoxCheck();
  });  

  it('Should go to sign up page', () => {
    loginPage.generalLoginElements.signUpLink().click();
    cy.url().should('contain', 'signup');
  });
});
