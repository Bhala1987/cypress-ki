describe('Ki insurance technical test project - Pending quotes', () => {
    beforeEach('visit the URL', () => {
        cy.visit('https://forms.gle/eiiqRfHiRAiCXgPX7')
    })

    it('Successful viewing of pending quotes', () => {
        // And click on "See my pending quotes" radio button
        cy.xpath('//*[@data-value="See my pending quotes"]').click()
        // And click on "Next" button
        cy.get('span').contains('Next').click()
        // Then I should see the insureds "Service Tech Ltd,Logistics Worldwide Inc,XYZ Holdings PLC" in the pending quotes
        var insureds = "Service Tech Ltd,Logistics Worldwide Inc,XYZ Holdings PLC"
        var str_array = insureds.split(",")
        for (var i = 0; i < str_array.length; i++) {
            // Trim the excess whitespace.
            str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
            // Add additional code here, such as:
            cy.get('div').contains(str_array[i]).should('be.visible')
        }
        // And I should see the classes & premiums "CLASS: Cyber // PREMIUM: $560K,CLASS: Property // PREMIUM: $2.4M,CLASS: Energy // PREMIUM: $1.3M" in the pending quotes
        var classes_premiums = "Service Tech Ltd,Logistics Worldwide Inc,XYZ Holdings PLC"
        var str_array = classes_premiums.split(",")
        for (var i = 0; i < str_array.length; i++) {
            // Trim the excess whitespace.
            str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
            // Add additional code here, such as:
            cy.get('div').contains(str_array[i]).should('be.visible')
        }
    })
})