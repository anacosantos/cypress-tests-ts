declare module "cypress" {
  global {
    namespace Cypress {
      interface Chainable {
        getByTestId: (selector: string) => Chainable<string>;
        getBySelLike: (selector: string) => Chainable<string>;
        getBySel: (selector: string) => Chainable<string>;
      }
    }
  }
}