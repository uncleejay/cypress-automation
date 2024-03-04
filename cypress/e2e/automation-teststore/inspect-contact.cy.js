describe('Inspect Automation Test Store Items using Chain of Commands', () => {
    it('click on the first item using item header', () => {
        cy.visit('https://automationteststore.com')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });

    it('click on the first item using item text', () => {
        cy.visit('https://automationteststore.com')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });

    it.only('click on the first item using item index', () => {
        cy.visit('https://automationteststore.com')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
});