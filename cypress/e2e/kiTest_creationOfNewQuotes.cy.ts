describe("Ki insurance technical test project - Creation of new quote", () => {
  beforeEach("visit the URL", () => {
    cy.visit("https://forms.gle/eiiqRfHiRAiCXgPX7");
  });

  it("Successful creation of new quote", () => {
    // And click on "Create a new quote" radio button
    cy.xpath('//*[@data-value="Create a new quote"]').click();
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And enter the following details
    //   | Primary Country | Primary Insured   | Class of Business |
    //   | Japan           | Finance Group Ltd | Energy            |
    cy.primaryInsuredDetails("Japan", "Finance Group Ltd", "Energy");
    // And click on "Next" button
    cy.get("span").contains("Next").click();
    // And the inception date is 1 month from now
    cy.inceptionDate(1);
    // And enter the AUM value as "150000"
    cy.xpath('//*[contains(@data-params,"AUM Value")]//*/input').type("150000");
    // And enter the Premium value as "5620.81"
    cy.xpath('//*[contains(@data-params,"Premium")]//*/input').type("5620.81");

    // When click on "Next" button
    cy.get("span").contains("Next").click();

    // Then verify the successful creation of quote
    cy.successMessages();
  });
});
