const clearFormPara_Ubuntu = "This will remove your answers from all questions, and cannot be undone."
const clearFormPara_Windows = "This will remove your answers from all questions and cannot be undone."
const clearFormPara = ['This will remove your answers from all questions, and cannot be undone.', 'This will remove your answers from all questions and cannot be undone.']
const regex = new RegExp(`${clearFormPara.join('|')}`, 'g')
describe("Ki insurance technical test project - Clear form & Back buttons functionalities", () => {
  beforeEach("visit the URL", () => {
    cy.visit("https://forms.gle/eiiqRfHiRAiCXgPX7");
  });

  it.only("Clear form on first page", () => {
    // And click on "See my pending quotes" radio button
    cy.xpath('//*[@data-value="See my pending quotes"]').click();
    // And click on "Clear form" button
    cy.get("span").contains("Clear form").click();
    // And the clear form dialog box should appear
    cy.get("div").contains("Clear form?").should("be.visible");
    cy.get("span")
      .contains(regex)
      .should("be.visible");
    // And click on "Cancel" button
    cy.xpath(
      '//*[@role="alertdialog"]/div/div[@role="button"]//*[text()="Cancel"]'
    ).click();
    // And click on "Clear form" button
    cy.get("span").contains("Clear form").click();
    // And the clear form dialog box should appear
    cy.get("div").contains("Clear form?").should("be.visible");
    cy.get("span")
    .contains(regex)
    .should("be.visible");
    // When click on "Clear form on dialog" button
    cy.xpath(
      '//*[@role="alertdialog"]/div/div[@role="button"]//*[text()="Clear form"]'
    ).click();
    // Then the filled in details should be cleared
    cy.get('[aria-checked="true"]').should("not.exist");
    cy.get('[aria-selected="true"]').should("not.exist");
    cy.get("span").contains("Back").should("not.exist");
  });

  it("Clear form on new quote insured info page", () => {
    // And click on "Create a new quote" radio button
    cy.xpath('//*[@data-value="Create a new quote"]').click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    //     And enter the following details
    //   | Primary Country | Primary Insured   | Class of Business |
    //   | Spain           | Finance Group Ltd | Cyber             |
    cy.primaryInsuredDetails("Spain", "Finance Group Ltd", "Cyber");
    // And click on "Clear form" button
    cy.get("span").contains("Clear form").click();
    // And the clear form dialog box should appear
    cy.get("div").contains("Clear form?").should("be.visible");
    cy.get("span")
    .contains(regex)
    .should("be.visible");
    // And click on "Cancel" button
    cy.xpath(
      '//*[@role="alertdialog"]/div/div[@role="button"]//*[text()="Cancel"]'
    ).click();
    // And click on "Clear form" button
    cy.get("span").contains("Clear form").click();
    // And the clear form dialog box should appear
    cy.get("div").contains("Clear form?").should("be.visible");
    cy.get("span")
    .contains(regex)
    .should("be.visible");
    // When click on "Clear form on dialog" button
    cy.xpath(
      '//*[@role="alertdialog"]/div/div[@role="button"]//*[text()="Clear form"]'
    ).click();
    // Then the filled in details should be cleared
    cy.get('[aria-checked="true"]').should("not.exist");
    cy.get('[aria-selected="true"]').should("not.exist");
    cy.get("span").contains("Back").should("not.exist");
  });

  it("Clear form on new quote layer page", () => {
    // And click on "Create a new quote" radio button
    cy.xpath('//*[@data-value="Create a new quote"]').click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And enter the following details
    //   | Primary Country | Primary Insured  | Class of Business |
    //   | France          | Service Tech Ltd | Energy            |
    cy.primaryInsuredDetails("France", "Service Tech Ltd", "Energy");
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And the inception date is 1 month from now
    cy.inceptionDate(1);
    // And enter the AUM value as "10000"
    cy.xpath('//*[contains(@data-params,"AUM Value")]//*/input').type("10000");
    // And enter the Premium value as "50"
    cy.xpath('//*[contains(@data-params,"Premium")]//*/input').type("50");
    // And click on "Clear form" button
    cy.get("span").contains("Clear form").click();
    // And the clear form dialog box should appear
    cy.get("div").contains("Clear form?").should("be.visible");
    cy.get("span")
    .contains(regex)
    .should("be.visible");
    // When click on "Clear form on dialog" button
    cy.xpath(
      '//*[@role="alertdialog"]/div/div[@role="button"]//*[text()="Clear form"]'
    ).click();
    // Then the filled in details should be cleared
    cy.get('[aria-checked="true"]').should("not.exist");
    cy.get('[aria-selected="true"]').should("not.exist");
    cy.get("span").contains("Back").should("not.exist");
  });

  it("Back button functionality check", () => {
    // And click on "Create a new quote" radio button
    cy.xpath('//*[@data-value="Create a new quote"]').click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And enter the following details
    //   | Primary Country | Primary Insured  | Class of Business |
    //   | Japan           | Service Tech Ltd | Cyber             |
    cy.primaryInsuredDetails("Japan", "Service Tech Ltd", "Cyber");
    // And click on "Back" button
    cy.get("span").contains("Back").click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And the inception date is 1 month from now
    cy.inceptionDate(1);
    // And enter the AUM value as "10000"
    cy.xpath('//*[contains(@data-params,"AUM Value")]//*/input').type("10000");
    // And enter the Premium value as "50"
    cy.xpath('//*[contains(@data-params,"Premium")]//*/input').type("50");
    // And click on "Back" button
    cy.get("span").contains("Back").click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // Then verify the successful creation of quote
    cy.successMessages();
  });
});
