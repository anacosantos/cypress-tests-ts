/// <reference types="cypress" />

import type Authentication from '../fixtures/authentication/authenticationErrors.json';

interface FixtureTypes {
  authenticationErrors: typeof Authentication;
  // Add other fixtures here
}

declare global {
  namespace Cypress {
    interface Chainable {
      fixture<K extends keyof FixtureTypes>(
        fixtureName: K,
      ): Chainable<FixtureTypes[K]>;
    }
  }
}
