import { should } from 'chai';

const textData = require('../../fixtures/text-data.json');
const userData = require('../../fixtures/user-data.json');

// CSS selectors on the page
const HeaderAppLogo = 'header .App-logo'
const HeaderAppDescription = 'h1.App-title'
const nameInput = 'input#name'
const cityInput = 'input#city'
const leftArrow = '.CrewMember-toolbar > button:not(.CrewMember-up)'
const rightArrow = 'button.CrewMember-up'
const crewMember = '.CrewMember-container'
const firstLastNameOnTheCard = 'div:nth-child(1)'
const cityOnTheCard = 'div:nth-child(2)'
const crewMemberInfo = '.CrewMember-info'
const crewMemberPhoto = '.CrewMemeber-photo'
const crewMemberName = '.CrewMemeber-name'

// Selectors based on the element text
const buttonSubmitText = 'Submit'
const buttonClearText = 'Clear'
const firtsColoumnText = 'Applied'
const secondColoumnText = 'Interviewing'
const thirdCocloumnText = 'Hired'

class MainPage {

    static inputName(name) {
        cy.get(nameInput).clear().type(name)
    }

    static inputCity(city) {
        cy.get(cityInput).clear().type(city)
    }

    static clickOnSubmitButton() {
        cy.contains(buttonSubmitText).click({ force: true })
    }

    static clickLeftArrow() {
        cy.get(leftArrow).click();
    }

    static clickRightArrow() {
        cy.get(rightArrow).click();
    }

    static clickOnClearButton() {
        cy.contains(buttonClearText).click({ force: true })
    }

    static verifyPageHeader() {
        cy.get(HeaderAppDescription).contains(textData.homePageHeader);
        cy.get(HeaderAppLogo).should('be.visible')
    }

    static submitForm(name, city) {
        this.inputName(name)
        this.inputCity(city)
    }

    static inputFieldsContains(name, city) {
        cy.get(nameInput).should('have.attr', 'value', name)
        cy.get(cityInput).should('have.attr', 'value', city)
    }

    static countItemsInTheColoumn(colounText, count) {
        cy.contains(colounText).parent().find(crewMember).should('have.length', count)
    }

    // user data should be provided from the user-data.json file
    static userCardVerificationByObject(userObject) {
        cy.get(crewMember)
        .should('be.visible').children(crewMemberInfo)
        .children(crewMemberPhoto).should('have.attr', 'style')
        cy.get(crewMember)
        .children(crewMemberInfo).children(crewMemberName).find(firstLastNameOnTheCard).should('have.text', `${userObject.firstName} ${userObject.lastName}`)
        cy.get(crewMember)
            .children(crewMemberInfo).children(crewMemberName).find(cityOnTheCard).should('have.text', userObject.city)
    }

    static userCardVerification(firstName, lastName, city) {
        cy.get(crewMember)
            .should('be.visible').children(crewMemberInfo)
            .children(crewMemberPhoto).should('have.attr', 'style')
        cy.get(crewMember)
            .children(crewMemberInfo).children(crewMemberName).find(firstLastNameOnTheCard).should('have.text', `${firstName} ${lastName}`);
        cy.get(crewMember)
            .children(crewMemberInfo).children(crewMemberName).find(cityOnTheCard).should('have.text', city);
    }

// user data should be provided from the user-data.json file. Search for every item in the array.
    static searchForAllValidTestUsersByName() {
        let arr = userData.validUserCombinations;
        arr.forEach((user) => {
            this.inputName(user.firstName);
            this.clickOnSubmitButton();
            this.userCardVerificationByObject(user);
            this.clickOnClearButton();
        })
    }

    static verifyUserCardIsNotDisplayed() {
        cy.get(crewMember).should('not.be.visible');
    }

    static searchForAllInvalidTestUsersByNameAndCity() {
        let arr = userData.invalidUsersCombinations;
        arr.forEach((user) => {
            this.inputName(user.firstName);
            this.inputCity(user.city);
            this.clickOnSubmitButton();
        })
    }
// no failure if need to click Left arrow aony once. (While is not working properly in the Cypress)
    static setUserStatusToApplied() {
        for (var i = 0; i < 2; i++) {
            cy.get('.App-container').then($body => {
                if ($body.find(leftArrow).length > 0) {
                    this.clickLeftArrow();
                }
            })
        }
    }

}
export default MainPage