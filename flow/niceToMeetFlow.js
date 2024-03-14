const NiceToMeetPage= require  ("../pageobjects/niceToMeet.page.js");
const faker= require  ("../utils/faker");
// import twilio from "../utils/twilio";
const {startStep, endStep, addStep} = require('@wdio/allure-reporter');



class NiceToMeetFlow {

  async basicDetails(requestSender, firstName, lastName, phone, email) {
    startStep('set user details')
    if (requestSender != null)
      await NiceToMeetPage.selectRequestSender(requestSender);
    if (firstName != null) 
      await NiceToMeetPage.setFirstName(firstName);
    if (lastName != null) 
      await NiceToMeetPage.setLastName(lastName);
    if (phone != null) 
      await NiceToMeetPage.setPhone(phone);
    if (email != null) 
      await NiceToMeetPage.setEmail(email);
    endStep();
    startStep('click on next button')
    await NiceToMeetPage.clickOnNext();
    endStep();
  }

  async basicDetailsRandom(){
        NiceToMeetPage.selectRequestSender(1);
        let firstName =faker.fakerFirstName();
        await NiceToMeetPage.setFirstName(firstName);
        let lastName = faker.fakerLastName();
        await NiceToMeetPage.setLastName(lastName);
        let phone = twilio.phoneNumber();
        await NiceToMeetPage.setPhone(phone);
        let email= faker.fakerEmailAddress();
        await NiceToMeetPage.setEmail(email);
        await NiceToMeetPage.clickOnNext();
  }
}

module.exports = new NiceToMeetFlow();
