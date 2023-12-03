describe('Promotions Search', () => {
  it('should display search results', () => {
    cy.visit('http://localhost:3000/')

    const originWrapper = cy.get('#input-origin').parent('.combobox-wrapper')
    const destinationWrapper = cy.get('#input-destination').parent('.combobox-wrapper')

    originWrapper.find('.combobox-button').click()

    cy.get('.combobox-options li:first-child').click()

    destinationWrapper.find('.combobox-button').click()

    cy.get('.combobox-options li:first-child').click()

    cy.get('.promotion-list-wrapper').should('be.visible')
  })
})
