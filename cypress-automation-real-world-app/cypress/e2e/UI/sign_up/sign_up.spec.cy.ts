/// <reference types="cypress" />

import SignUp from "../../../page/sign_up";
const signup = new SignUp();
import LoginPage from "../../../page/login";
const loginPage = new LoginPage();
import Onboarding from "../../../page/onboarding";
const onboarding = new Onboarding();

import { generateRandomCypressEmails, generateRandomCypressNames } from "../../../support/utils";

describe('Sign up the page', () => {
    beforeEach(() => {
        cy.visit('/signup')
        cy.url().should('contain', 'signup');
    });

    it('Should validate sign up page', () => {
        let firstname = generateRandomCypressNames();
        let lastname =  generateRandomCypressNames() + "lastname";
        let username =  generateRandomCypressNames() + "username";
        let password =  generateRandomCypressEmails();    
        let confirmPass = password;
        signup.signUpAuthentication(firstname, lastname, username, password, confirmPass)
        cy.url().should('contain', 'signin');
        loginPage.authentication(username, password)
        onboarding.generalOnboardingElements.onboboardingGetStared().should('be.visible')
    });
});