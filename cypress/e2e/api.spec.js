describe('API testing with cypress', () => {
    it('Get All Products List', () => {
        cy.api({
            method:'GET',
            url: 'https://automationexercise.com/api/productsList',
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
        })
    })

    it('Get all brands list', () => {
        cy.api({
            method:'GET',
            url:'https://automationexercise.com/api/brandsList'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Post to all products list ', () => {
        cy.api({
            method:'POST',
            url:'https://automationexercise.com/api/productsList',
            failOnStatusCode:false
        }).then((response) => {
            cy.log('response status:', response.status)
            expect(response.status).to.be.oneOf([200, 405])
            if(response.status === 405){
                cy.log('this method is not supported')
            }else if (response.status === 200){
                cy.log('just a test')
            }
        })
    })

    it('put to all brands list', () => {
        cy.api({
            method:'PUT',
            url:'https://automationexercise.com/api/brandsList',
            failOnStatusCode:false
        }).then((response) => {
            cy.log('response status:', response.status)
            expect(response.status).to.be.oneOf([200, 405])
            if(response.status === 200){
                cy.log('just a test')
            }else if(response.status === 405){
                cy.log('this method is not supported')
            }
        })

    })


    it('Get User Detail by Email', () => {
        const email = 'gsd@fsas.com'; // Replace with a valid email

        cy.api({
            method: 'GET',
            url: `https://automationexercise.com/api/getUserDetailByEmail?email=${email}`,
            failOnStatusCode: false // Avoid failing on unexpected status codes
        }).then((response) => {
            // Check that the response status is 200
            expect(response.status).to.eq(200);

            // Check if the response body contains the expected user details
            if (response.headers['content-type'].includes('application/json')) {
                expect(response.body).to.have.property('user');
            }else {
                // Use cy.log outside of .should() to log an informative message
                cy.log('The response did not return JSON data; check if the email parameter is correct or if the API returned an error page.');
            }
        });
    });

})