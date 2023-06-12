describe('Ki insurance technical test project', () => {
  beforeEach('visit the URL', () => {
    cy.visit('https://forms.gle/eiiqRfHiRAiCXgPX7')
  })

  it('Clear form on first page', () => {
    cy.get('#i7').click()
    cy.get('span').contains('Clear form').click()
    cy.get('div').contains('Clear form?').should('be.visible')
    cy.get('#Qf7yGf1').contains('This will remove your answers from all questions and cannot be undone.').should('be.visible')
    cy.get('[data-id="IbE0S"]').eq(1).contains('Cancel').click()
    cy.get('span').contains('Clear form').click()
    cy.get('div').contains('Clear form?').should('be.visible')
    cy.get('[data-id="EBS5u"]').eq(1).contains('Clear form').click()
    cy.get('[aria-checked="true"]').should("not.exist")
  })

  it('Create a new quote', () => {
    cy.get('#i10').click()
    cy.get('span').contains('Next').click()

    //Primary Country
    cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').dblclick()
    cy.get('[jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').eq(0).click()
    cy.get('.OA0qNb > [data-value="Germany"] > .vRMGwf').click()

    //Primary Insured
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').dblclick()
    cy.get('[jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').eq(0).click()
    cy.get('.OA0qNb > [data-value="Newco Ltd"] > .vRMGwf').click()

    //Class of Business
    cy.get('#i16').click()
    cy.get('span').contains('Next').click()

    //Inception Date
    cy.get('[type="date"]').type("2024-01-01")

    //AUM Value ($)
    cy.get('[aria-describedby="i7 i8"]').type("1000000")

    //Premium ($)
    cy.get('[aria-describedby="i11 i12"]').type("5000.68")

    cy.get('span').contains('Next').click()

    cy.get('.aG9Vid').should('exist').contains("Success — Quote created")
    cy.get('.vfQisd').should('exist').contains("Submission completed. Your quote has been created successfully.")
    cy.get('.vfQisd').should('exist').contains("You will receive an email when the quote is ready. You can check the status of your pending quotes from the Pending Quotes screen.")
  })

  it('See my pending quotes', () => {
    cy.get('#i7').click()
    cy.get('span').contains('Next').click()

    cy.get('.aG9Vid').should('exist').contains("Pending quotes")
    cy.get('.meSK8.M7eMe').should('have.length', 3)
    cy.get('.meSK8.M7eMe').eq(0).contains("Service Tech Ltd")
    cy.get('.meSK8.M7eMe').eq(1).contains("Logistics Worldwide Inc")
    cy.get('.meSK8.M7eMe').eq(2).contains("XYZ Holdings PLC")

    cy.get('.spb5Rd.OIC90c').should('have.length', 3)
    cy.get('.spb5Rd.OIC90c').eq(0).contains("CLASS: Cyber // PREMIUM: $560K")
    cy.get('.spb5Rd.OIC90c').eq(1).contains("CLASS: Property // PREMIUM: $2.4M")
    cy.get('.spb5Rd.OIC90c').eq(2).contains("CLASS: Energy // PREMIUM: $1.3M")
  })

  it('Back button verification', () => {
    cy.get('#i7').click()
    cy.get('span').contains('Next').click()
    cy.get('span').contains('Back').click()
    cy.get('#i7').should('exist')

    cy.get('#i10').click()
    cy.get('span').contains('Next').click()
    //Primary Country
    cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').dblclick()
    cy.get('[jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').eq(0).click()
    cy.get('.OA0qNb > [data-value="United Kingdom"] > .vRMGwf').click()

    //Primary Insured
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').dblclick()
    cy.get('[jsmodel="CP1oW"] > .geS5n > .vQES8d > .jgvuAb > [jsname="LgbsSe"] > .ry3kXd > .KKjvXb > .vRMGwf').eq(0).click()
    cy.get('.OA0qNb > [data-value="Finance Group Ltd"] > .vRMGwf').click()

    //Class of Business
    cy.get('#i13').click()
    cy.get('span').contains('Next').click()

    cy.get('span').contains('Back').click()
    cy.get('#i16').should('exist')
  })
})