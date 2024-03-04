import { Before, Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

let stub;

Before(() => {
    cy.log("Executing before step");
    stub = cy.stub();
})

Given('I access the WebdriverUniversity Login Portal page', () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})

When("I enter a username {word}", (userName) =>{
    cy.get("#text").type(userName);
})

When("I enter a password {word}", (userName) =>{
    cy.get("#password").type(userName);
})

When('I click on the login button', () => {
    cy.get("#login-button").click();
})

Then('I should be presented with the following message {word} {word}', (message, message2) => {
    const expectedMessage = message + " " + message2;
    cy.log(expectedMessage);
    // cy.log(stub.getCall(0));
    // expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
})