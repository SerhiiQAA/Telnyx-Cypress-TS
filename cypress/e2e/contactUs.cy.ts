/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import contactUsPage from "../pages/contactUsPage";

describe('Contact us page', () => {
  let testData: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phoneNumber: string;
    website: string;
    howDidYouHear: string;
    additionalInfo: string;
  };

  before(() => {
    testData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      country: 'Ukraine (+380)', 
      phoneNumber: faker.string.numeric(9),
      website: faker.internet.url(),
      howDidYouHear: 'Online search', 
      additionalInfo: faker.lorem.sentence(),
    };
  });

  beforeEach(() => {
    // cy.viewport(1920, 966);
    cy.visit('/contact-us');
  });

  it('Talk to an expert with valid data / TC 1', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifySuccessMsg('Thank you.');
  });

  it('Talk to an expert with empty fields / TC 2', () => {
    contactUsPage.clickSubmitBtn();
    contactUsPage.verifyHelpErrorMsg('This field is required.');
  });

  it('Talk to an expert with empty "First name" field / TC 3', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyFirstNameErrorMsg('This field is required.');
  });

  it('Talk to an expert with empty "Last name" field / TC 4', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyLastNameErrorMsg('This field is required.');
  });

  it('Talk to an expert with empty "Business email" field / TC 5', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyEmailErrorMsg('Must be valid email. example@yourdomain.com');
  });

  it('Talk to an expert with empty "Phone number" field / TC 6', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyPhoneNumberErrorMsg('Phone numbers must be minimum 6 digits.');
  });

  it('Talk to an expert with empty "Company website" field / TC 7', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyWebsiteErrorMsg('This field is required.');
  });

  it('Talk to an expert with empty "Please describe your request" field / TC 8', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyDescribeRequestErrorMsg('This field is required.');
  });

  it('Talk to an expert with empty "How did you hear about Telnyx?" field / TC 9', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(true);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifyHowHearAboutErrorMsg('This field is required.');
  });

  it('Talk to an expert with unchecked "I want to receive marketing emails" checkbox / TC 10', () => {
    contactUsPage.selectReasonForContact('Support');
    contactUsPage.typeFirstName(testData.firstName);
    contactUsPage.typeLastName(testData.lastName);
    contactUsPage.typeEmail(testData.email);
    contactUsPage.selectCountry(testData.country);
    contactUsPage.typePhoneNumber(testData.phoneNumber);
    contactUsPage.typeWebsite(testData.website);
    contactUsPage.typeHowDidYouHear(testData.howDidYouHear);
    contactUsPage.typeAdditionalInfo(testData.additionalInfo);
    contactUsPage.toggleMarketingEmailsCheckbox(false);
    contactUsPage.clickSubmitBtn();

    contactUsPage.verifySuccessMsg('Thank you.');
  });
});