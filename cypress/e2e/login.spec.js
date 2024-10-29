describe('login on website', () => {
    it('login with correct email and pass then delete account', () => {
        const email= 'gsd@fsas.com'
        let password= '123123'

        cy.visitwebsite()
        cy.get('li').contains(' Signup / Login').click()

        cy.get('[placeholder="Email Address"]').eq(0).type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('[data-qa="login-button"]').click()


    })
})