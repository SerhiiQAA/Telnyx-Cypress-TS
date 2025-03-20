class ContactUsPage {
    elements = {
        reasonForContact: () => cy.get('#Reason_for_Contact__c'),
        firstName: () => cy.get('#FirstName'),
        lastName: () => cy.get('#LastName'),
        email: () => cy.get('#Email'),
        phoneNumberExtension: () => cy.get('#Phone_Number_Extension__c'),
        phoneNumberBase: () => cy.get('#Phone_Number_Base__c'),
        website: () => cy.get('#Website'),
        howDidYouHear: () => cy.get('#How_did_you_hear_about_Telnyx_Open__c'),
        additionalInfo: () => cy.get('#Form_Additional_Information__c'),
        submitButton: () => cy.get('.mktoButton'),
        successMsg: () => cy.get('h1'),
        howHelpErrorMsg: () => cy.get('#ValidMsgReason_for_Contact__c'),
        firstNameErrorMsg: () => cy.get('#ValidMsgFirstName'),
        lastNameErrorMsg: () => cy.get('#ValidMsgLastName'),
        emailErrorMsg: () => cy.get('#ValidMsgEmail'),
        websiteErrorMsg: () => cy.get('#ValidMsgWebsite'),
        describeRequestErrorMsg: () => cy.get('#ValidMsgForm_Additional_Information__c'),
        howHearAboutErrorMsg: () => cy.get('#ValidMsgHow_did_you_hear_about_Telnyx_Open__c'),
        phoneNumberErrorMsg: () => cy.get('#ValidMsgPhone_Number_Base__c'),
        countryErrorMsg: () => cy.get('#ValidMsgPhone_Number_Extension__c'),
        marketingEmailsCheckbox: () => cy.get('#mktoCheckbox_15748_0'), 
    };

    selectReasonForContact(option: string) {
        this.elements.reasonForContact().select(option, { force: true });
    }

    typeFirstName(name: string) {
        this.elements.firstName().type(name, { delay: 0 });
    }

    typeLastName(name: string) {
        this.elements.lastName().type(name, { delay: 0 });
    }

    typeEmail(email: string) {
        this.elements.email().type(email, { delay: 0 });
    }

    selectCountry(country: string) {
        this.elements.phoneNumberExtension().select(country, { force: true });
    }

    typePhoneNumber(number: string) {
        this.elements.phoneNumberBase().type(number, { delay: 0 });
    }

    typeWebsite(url: string) {
        this.elements.website().type(url, { delay: 0 });
    }

    typeHowDidYouHear(info: string) {
        this.elements.howDidYouHear().type(info, { delay: 0 });
    }

    typeAdditionalInfo(info: string) {
        this.elements.additionalInfo().type(info, { delay: 0 });
    }

    clickSubmitBtn() {
        this.elements.submitButton().click();
    }

    verifySuccessMsg(expectedText: string) {
        this.elements.successMsg().should('have.text', expectedText);
    }
    
    verifyHelpErrorMsg(expectedText: string) {
        this.elements.howHelpErrorMsg().should('have.text', expectedText);
    }

    verifyFirstNameErrorMsg(expectedText: string) {
        this.elements.firstNameErrorMsg().should('have.text', expectedText);
    }

    verifyLastNameErrorMsg(expectedText: string) {
        this.elements.lastNameErrorMsg().should('have.text', expectedText);
    }

    verifyEmailErrorMsg(expectedText: string) {
        this.elements.emailErrorMsg().should('have.text', expectedText);
    }

    verifyWebsiteErrorMsg(expectedText: string) {
        this.elements.websiteErrorMsg().should('have.text', expectedText);
    }

    verifyDescribeRequestErrorMsg(expectedText: string) {
        this.elements.describeRequestErrorMsg().should('have.text', expectedText);
    }

    verifyHowHearAboutErrorMsg(expectedText: string) {
        this.elements.howHearAboutErrorMsg().should('have.text', expectedText);
    }

    verifyPhoneNumberErrorMsg(expectedText: string) {
        this.elements.phoneNumberErrorMsg().should('have.text', expectedText);
    }

    verifyCountryErrorMsg(expectedText: string) {
        this.elements.countryErrorMsg().should('have.text', expectedText);
    }

    toggleMarketingEmailsCheckbox(select = true) {
        const checkbox = this.elements.marketingEmailsCheckbox();
        if (select) {
            checkbox.check();
        } else {
            checkbox.uncheck();
        }
    }
}

export default new ContactUsPage();
