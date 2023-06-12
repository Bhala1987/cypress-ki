/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
const dayjs = require('dayjs')

function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

function enterInsuredPageDetails(country: string, insured: string, classBusiness: string) {
    cy.wait(500)
    //Primary Country
    if (!isEmpty(country)) {
        cy.xpath('//*[contains(@data-params,"Primary Country")]//*[text()="Choose"]').click()
        cy.contains('[role*="option"]', country).click()
    }
    //Primary Insured
    if (!isEmpty(insured)) {
        cy.xpath('//*[contains(@data-params,"Primary Insured")]//*[text()="Choose"]').click()
        cy.contains('[role*="option"]', insured).click()
    }
    //Class of Business
    if (!isEmpty(classBusiness)) {
        cy.contains(classBusiness).click()
    }
}

Cypress.Commands.add("primaryInsuredDetails", enterInsuredPageDetails)

Cypress.Commands.add('inceptionDate', (numberOfMonths: number) => {
    if (numberOfMonths === 0) {
        debugger
        cy.get('body').then((body) => {
            if (body.find('[aria-label="Day of the month"]').length > 0) {
                cy.xpath('//input[@aria-label="Day of the month"]').type('0').tab({ shift: true })
            }
            else {
                const targetDate = dayjs().add(6000, 'year').format('YYYY-MM-DD')
                cy.xpath('//input[@type="date"]').type(targetDate, { force: true })
            }
        })
    } else {
        const date = dayjs().add(numberOfMonths, 'month').format('DD/MM/YYYY')
        var dd = dayjs().add(numberOfMonths, 'month').format('DD')
        var mm = dayjs().add(numberOfMonths, 'month').format('MM')
        var yyyy = dayjs().add(numberOfMonths, 'month').format('YYYY')
        const targetDate = dayjs().add(numberOfMonths, 'month').format('YYYY-MM-DD')
        inception(dd, mm, yyyy, date, targetDate)
    }
})

async function inception(dd: string, mm: string, yyyy: string, date: string, targetDate: string) {
    cy.get('body').then((body) => {
        if (body.find('[aria-label="Day of the month"]').length > 0) {
            cy.xpath('//input[@aria-label="Day of the month"]').type(dd)
            cy.xpath('//input[@aria-label="Month"]').type(mm)
            cy.xpath('//input[@aria-label="Year"]').type(yyyy)
        }
        else {
            cy.xpath('//input[@type="date"]').type(targetDate, { force: true })
        }
    })
}

Cypress.Commands.add('successMessages', () => {
    cy.contains("Success — Quote created").should('be.visible')
    cy.contains("Submission completed. Your quote has been created successfully.").should('be.visible')
    cy.contains("You will receive an email when the quote is ready. You can check the status of your pending quotes from the Pending Quotes screen.").should('be.visible')
})