describe.skip("Ki insurance technical test project - Creation of new quote", () => {
  it.only("Successful creation of new quote", () => {
    cy.fixture("testDataInsuredInfo").then((data) => {
      data.forEach((insuredInfo) => {
        cy.visit("https://forms.gle/eiiqRfHiRAiCXgPX7");
        // And click on "Create a new quote" radio button
        cy.xpath('//*[@data-value="Create a new quote"]').click();
        // And click on "Next" button
        cy.get("span").contains("Next").click();
        // And enter the following details
        //   | Primary Country | Primary Insured   | Class of Business |
        //   | Japan           | Finance Group Ltd | Energy            |
        cy.primaryInsuredDetails(
          insuredInfo.primaryCountry,
          insuredInfo.primaryInsured,
          insuredInfo.classOfBusiness
        );
        // And click on "Next" button
        cy.get("span").contains("Next").click();
        // And the inception date is 1 month from now
        cy.inceptionDate(1);
        // And enter the AUM value as "150000"
        cy.xpath('//*[contains(@data-params,"AUM Value")]//*/input').type(
          "150000"
        );
        // And enter the Premium value as "5620.81"
        cy.xpath('//*[contains(@data-params,"Premium")]//*/input').type(
          "5620.81"
        );

        // When click on "Next" button
        cy.get("span").contains("Next").click();

        // Then verify the successful creation of quote
        cy.successMessages();
      });
    });
  });
});

describe.only("Ki insurance technical test project - Creation of new quotes", function () {
  const availablefixtures = [
    {
      name: "insuredInfo1",
      context: "1st dataset",
    },
    {
      name: "insuredInfo2",
      context: "2nd dataset",
    },
    {
      name: "insuredInfo3",
      context: "3rd dataset",
    },
  ];
  availablefixtures.forEach((afixture) => {
    describe(afixture.context, () => {
      beforeEach(function () {
        cy.fixture(afixture.name).as("insuredDetails");
      });
      it("Successful creation of new quote " + afixture.name, function () {
        //Arrange
        cy.visit("https://forms.gle/eiiqRfHiRAiCXgPX7");
        //Act
        // And click on "Create a new quote" radio button
        cy.xpath('//*[@data-value="Create a new quote"]').click();
        // And click on "Next" button
        cy.get("span").contains("Next").click();
        // And enter the following details
        //   | Primary Country | Primary Insured   | Class of Business |
        //   | Japan           | Finance Group Ltd | Energy            |
        cy.primaryInsuredDetails(
          this.insuredDetails.primaryCountry,
          this.insuredDetails.primaryInsured,
          this.insuredDetails.classOfBusiness
        );
        // And click on "Next" button
        cy.get("span").contains("Next").click();
        // And the inception date is 1 month from now
        cy.inceptionDate(1);
        // And enter the AUM value as "150000"
        cy.xpath('//*[contains(@data-params,"AUM Value")]//*/input').type(
          "150000"
        );
        // And enter the Premium value as "5620.81"
        cy.xpath('//*[contains(@data-params,"Premium")]//*/input').type(
          "5620.81"
        );

        // When click on "Next" button
        cy.get("span").contains("Next").click();

        // Then verify the successful creation of quote
        cy.successMessages();
      });
    });
  });
});
