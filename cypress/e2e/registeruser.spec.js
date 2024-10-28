describe('register user on automationexercise.com', () => {
    it('register user', () => {
        const name = 'sdgs'
        let email= 'gsd@fsas.com'
        let password= '123123'


        cy.visitwebsite()
        cy.get('li').contains(' Signup / Login').click()

        cy.get('[placeholder="Name"]').type(name)
        cy.get('[placeholder="Email Address"]').eq(1).type(email)
        cy.get('button').contains('Signup').click()
        cy.get('[type="radio"]').check('Mrs')
        cy.get('#password').type(password)

        //date of birth
        cy.get('select[name="days"]').select('24').should('have.value', '24'); // Ensure the value is correct
        cy.get('select[name="months"]').select('February').should('have.value', '2'); // Adjust for the correct month value
        cy.get('select[name="years"]').select('2001').should('have.value', '2001'); // Ensure '2001' is the correct value

        //checkboxes
        cy.get('[type="checkbox"]').eq(0).check()
        cy.get('[type="checkbox"]').eq(1).check()

        //address information
        cy.get('[name="first_name"]').type('emma')
        cy.get('[name="last_name"]').type('test')
        cy.get('[name="address1"]').type('New York')
        cy.get('select[name="country"]').select('United States').should('have.value', 'United States')
        cy.get('[name="state"]').type('teststate')
        cy.get('[name="city"]').type('testcity')
        cy.get('[name="zipcode"]').type('1231')
        cy.get('[name="mobile_number"]').type('12345678')
        cy.get('[data-qa="create-account"]').click()

        //account is created

        cy.wait(4000)
        cy.get('[data-qa="continue-button"]').click()


        //now delete created account
        cy.wait(4000)
        cy.get('li').contains(' Delete Account').click()
        cy.get('[data-qa="continue-button"]').click()









    })
})