describe('Ki insurance technical test project - Negative/Error/Failure scenarios', () => {
    beforeEach('visit the URL', () => {
        cy.visit('https://forms.gle/eiiqRfHiRAiCXgPX7')
    })

    it('First page - no input', () => {
        // When click on "Next" button
        cy.get('span').contains('Next').click()
        // Then the error message "This is a required question" should be displayed against the field
        cy.get('span').should('contain', 'This is a required question')
    })

    it('Layer 1 page - no input', () => {
        // And click on "Create a new quote" radio button
        cy.xpath('//*[@data-value="Create a new quote"]').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // Then the error message "This is a required question" should be displayed against the field
        cy.get('span').should('contain', 'This is a required question')
        // And enter the following details
        // | Primary Country | Primary Insured | Class of Business |
        // | China           | Newco Ltd       | Property          |
        cy.primaryInsuredDetails('China', 'Newco Ltd', 'Property')
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // Then the error message "This is a required question" should be displayed against the field
        cy.get('span').should('contain', 'This is a required question')
        // And the inception date is 1 month from now
        cy.inceptionDate(1)
        // When click on "Next" button
        cy.get('span').contains('Next').click()
        // Then the error message "This is a required question" should be displayed against the field
        cy.get('span').should('contain', 'This is a required question')
    })

    it('Layer 1 page - invalid input', () => {
        // And click on "Create a new quote" radio button
        cy.xpath('//*[@data-value="Create a new quote"]').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // And enter the following details
        // | Primary Country | Primary Insured | Class of Business |
        // | Germany         | AAA Inc         | Property          |
        cy.primaryInsuredDetails('Germany', 'AAA Inc', 'Property')
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        cy.inceptionDate(1)
        // When enter the AUM value as "invalid"
        cy.xpath('//*[contains(@data-params,"AUM Value")]//*/input').type('invalid').tab({ shift: true })
        cy.get('span').contains('Next').click()
        // Then the error message "Specify amount in US dollar" should be displayed against the field
        cy.get('span').should('contain', 'Specify amount in US dollar')
    })

    it('Layer 1 page - Invalid date', () => {
        // And click on "Create a new quote" radio button
        cy.xpath('//*[@data-value="Create a new quote"]').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // And enter the following details
        // | Primary Country          | Primary Insured | Class of Business |
        // | United States of America | Newco Ltd       | Property          |
        cy.primaryInsuredDetails('United States of America', 'Newco Ltd', 'Property')
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // And the inception date is 0 month from now
        cy.inceptionDate(0)
        cy.get('span').contains('Next').click()
        // Then the error message "Invalid date" should be displayed against the field
        cy.get('span').should('contain', 'Invalid date')
    })

    it('Insured Info page - no input', () => {
        // And click on "Create a new quote" radio button
        cy.xpath('//*[@data-value="Create a new quote"]').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // Then the error message "This is a required question" should be displayed against the field
        cy.get('span').should('contain', 'This is a required question')
        // And enter the following details
        // | Primary Country | Primary Insured | Class of Business |
        // | France          |                 |                   |
        cy.primaryInsuredDetails('France', '', '')
        // And click on "Next" button
        cy.tab().get('span').contains('Next').click()
        // Then the error message "This is a required question" should be displayed against the field
        cy.get('span').should('contain', 'This is a required question')
    })

})