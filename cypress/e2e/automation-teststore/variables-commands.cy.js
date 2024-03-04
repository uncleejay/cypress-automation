describe('Verifying variables, cypress commands and jquery commands', () => {
    it('navigates to specific product pages', () => {
        cy.visit('https://automationteststore.com')
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup")
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains("Skincare")
        // makeupLink.click()
        // skincareLink.click()
        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        cy.get('a[href*="product/category&path="]').contains("Skincare").click()
    });

    it('checks if title exists', () => {
        cy.visit('https://automationteststore.com')
        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
        })
    });

    it.only('validates properties of the contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        // uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')


        // JQuery Approach

        // Embedded Commands
    });
})