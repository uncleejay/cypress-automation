// describe("Iterate over elements", () => {
//     beforeEach(function() {
//       cy.visit("https://automationteststore.com/");
//       cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
//     })
//     it("Log information of all hair care products", () => {
//       cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
//           cy.log("Index: " + index + " : " + $el.text())
//       });
//     });
//     it("Add specific product to basket", () => {
//       cy.selectProduct('Curls to straight Shampoo');
//     });


  
//     it("Add another specific product to basket", () => {
//       cy.selectProduct('Seaweed Conditioner');
//     });
  
//     it("Add another specific product to basket 2", () => {
//       cy.selectProduct('Eau Parfumee au The Vert Shampoo');
//     });
//   });


describe("BBC", () => {
  
  it("Check weather for bournemouth", () => {
    cy.visit('https://www.bbc.co.uk/')
    cy.get('a.ssrcss-1qc9pyg-NavigationLink.e1gviwgp17')
      .contains('Weather')
      .click();
      cy.get('#ls-c-search__input-label').type('Bournemouth')
      cy.get('.ls-c-search__submit').click()
      cy.get(':nth-child(1) > .ls-o-location').contains('Bournemouth, Bournemouth').click()
      cy.get('#wr-location-name-id').should('contain', 'Bournemouth')
  });
});