
const NiceToMeetFlow = require  ("../../flow/niceToMeetFlow.js");
const NiceToMeetPage= require  ("../../pageobjects/niceToMeet.page.js");
const faker = require ("../../utils/faker");


describe('basic details tests', async ()=>{


    it('test01_businessOwnerLogin', async ()=>{

        await NiceToMeetFlow.basicDetails(1, faker.fakerFirstName(), faker.fakerLastName(), "0526080164",faker.fakerEmailAddress());

        await browser.pause(500);
        await expect(browser).toHaveUrlContaining("otp");

    })

    it('test02_authorizedSignatureLogin', async ()=>{

       await NiceToMeetFlow.basicDetails(3, faker.fakerFirstName(), faker.fakerLastName(), "0526080164",faker.fakerEmailAddress())

       await browser.pause(500); 
       await expect(browser).toHaveUrlContaining("otp");

    })

    it('test03_externalCounselorLogin', async ()=>{


        await NiceToMeetPage.selectRequestSender(2);
        await NiceToMeetPage.clickCloseCounselorPopup();
        await NiceToMeetPage.selectRequestSender(2);
        await NiceToMeetPage.clickAcceptCounselorPopup();

        await expect(browser).toHaveUrlContaining("Advisors");

    })
    
    it.only('test04_firstNameField', async ()=>{
        await NiceToMeetFlow.basicDetails(1,"1",faker.fakerLastName(),"0526080164",faker.fakerEmailAddress());

        let expectErrorMessage= "שדה לא תקין - אנא הקלד 2 תווים לפחות";
        let actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        await expect(expectErrorMessage).toEqual(actualErrorMessage);

        await NiceToMeetPage.setFirstName("123456");
        await browser.pause(500);


        expectErrorMessage= "שדה לא תקין - אנא הקלד אותיות בלבד";
        actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        await expect(expectErrorMessage).toEqual(actualErrorMessage);

        await NiceToMeetPage.setFirstName("*/!!");
        await browser.pause(500);


        actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        expect(expectErrorMessage).toEqual(actualErrorMessage);

        await NiceToMeetPage.setFirstName("   ");
        await browser.pause(500);


        actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        expect(expectErrorMessage).toEqual(actualErrorMessage);
    })


})

