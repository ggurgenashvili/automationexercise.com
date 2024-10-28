describe('contact us form', () => {
    it('fill the form', () => {

        const name = 'Emma'
        let email = 'qatester@test.com'
        let subject = 'Testing'
        let message = 'your message here'

        cy.visitwebsite()

        cy.get('li').contains(' Contact us').click()
        cy.get('[placeholder="Name"]').type(name)
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Subject"]').type(subject)
        cy.get('[placeholder="Your Message Here"]').type(message)

        cy.get('[name="submit"]').click()

        cy.get('span').contains(' Home').click()




    })
})