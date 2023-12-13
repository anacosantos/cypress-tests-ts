  

Cypress.Commands.add('getBySel', (selector, ...args):Cypress.Chainable => {
    return cy.get(`[data-test=${selector}]`, ...args);
});
  
Cypress.Commands.add('getBySelLike', (selector, ...args):Cypress.Chainable => {
    return cy.get(`[data-test*=${selector}]`, ...args)
})

Cypress.Commands.add('getByTestId', (selector, ...args):Cypress.Chainable => {
    return cy.get(`[data-testid=${selector}]`, ...args)
});


