describe('Verify All Products and product detail page', () => {
    beforeEach(() => {
        cy.visitwebsite()
    })
    it('products detail page', () => {

        const name = 'Test'
        let email = 'test@g.com'
        let review = 'good product'

        // cy.visitwebsite()
        cy.get('li').contains(' Products').click()
        //find first product in list
        cy.get('.choose').eq(0).click()

        //write a review on product
        cy.get('[placeholder="Your Name"]').type(name)
        cy.get('[placeholder="Email Address"]').type(email)
        cy.get('[placeholder="Add Review Here!"]').type(review)

        cy.get('button').contains('Submit').click()


    })
    it('Add product to cart from Recommended  then buy it', () => {
        const email= 'gsd@fsas.com'
        let password= '123123'


        cy.wait(4000)
        cy.get('.recommended_items').find('a').eq(2).should('be.visible').click()

        // cy.get('button').contains('Continue Shopping').click()
        cy.get('.modal-content').find('a').contains('View Cart').click()

        //checkout process and authorize on page
        cy.get('section').contains('Proceed To Checkout').click()
        cy.get('.text-center').contains('Register / Login').click()

        cy.get('[placeholder="Email Address"]').eq(0).type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('[data-qa="login-button"]').click()

        //after sign in redirect on cart page
        cy.get('li').contains(' Cart').click()
        cy.get('section').contains('Proceed To Checkout').click()

        cy.get('.btn').contains('Place Order').click()

        //payment is without validations so we can write anything, it will succeed order.
        cy.get('[name="name_on_card"]').type('test')
        cy.get('[name="card_number"]').type('123')
        cy.get('[name="cvc"]').type('111')
        cy.get('[name="expiry_month"]').type('12')
        cy.get('[name="expiry_year"]').type('10')

        cy.get('[data-qa="pay-button"]').click()

        //download invoice
        cy.get('.btn').contains('Download Invoice').click()

        //return home page with continue button
        cy.get('.btn').contains('Continue').click()


    })

})