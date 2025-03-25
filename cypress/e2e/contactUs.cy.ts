/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import contactUsPage from "../pages/contactUsPage";

describe('Contact us page', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const country = 'Ukraine (+380)';
  const phoneNumber = faker.string.numeric(9);
  const website = faker.internet.url();
  const howDidYouHear = 'Online search';
  const additionalInfo = faker.lorem.sentence();

  beforeEach(() => {
    cy.visit('/contact-us');
  });

  it('Talk to an expert with valid data / TC 1', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.successMsg().should('have.text', 'Thank you.');
  });

  it('Talk to an expert with empty fields / TC 2', () => {
    contactUsPage.clickSubmitBtn();
    
    contactUsPage.elements.howHelpErrorMsg().should('have.text', 'This field is required.');
  });

  it('Talk to an expert with empty "First name" field / TC 3', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.firstNameErrorMsg().should('have.text', 'This field is required.');
  });

  it('Talk to an expert with empty "Last name" field / TC 4', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.lastNameErrorMsg().should('have.text', 'This field is required.');
  });

  it('Talk to an expert with empty "Business email" field / TC 5', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.emailErrorMsg().should('have.text', 'Must be valid email. example@yourdomain.com');
  });

  it('Talk to an expert with empty "Phone number" field / TC 6', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.phoneNumberErrorMsg().should('have.text', 'Phone numbers must be minimum 6 digits.');
  });

  it('Talk to an expert with empty "Company website" field / TC 7', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.websiteErrorMsg().should('have.text', 'This field is required.');
  });

  it('Talk to an expert with empty "Please describe your request" field / TC 8', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.describeRequestErrorMsg().should('have.text', 'This field is required.');
  });

  it('Talk to an expert with empty "How did you hear about Telnyx?" field / TC 9', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.howHearAboutErrorMsg().should('have.text', 'This field is required.');
  });

  it('Talk to an expert with unchecked "I want to receive marketing emails" checkbox / TC 10', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeEmail(email);
    contactUsPage.selectCountry(country);
    contactUsPage.typePhoneNumber(phoneNumber);
    contactUsPage.typeWebsite(website);
    contactUsPage.typeHowDidYouHear(howDidYouHear);
    contactUsPage.typeAdditionalInfo(additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(false);
    contactUsPage.clickSubmitBtn();

    contactUsPage.elements.successMsg().should('have.text', 'Thank you.');
  });
});