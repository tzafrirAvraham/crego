const NiceToMeetPage= require  ("../pageobjects/niceToMeet.page.js");
const faker= require  ("../utils/faker");
// import twilio from "../utils/twilio";



class NiceToMeetFlow {

  async basicDetails(requestSender, firstName, lastName, phone, email) {
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
    await NiceToMeetPage.clickOnNext();
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
