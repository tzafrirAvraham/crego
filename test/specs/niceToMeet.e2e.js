
const NiceToMeetFlow = require  ("../../flow/niceToMeetFlow.js");
const NiceToMeetPage= require  ("../../pageobjects/niceToMeet.page.js");
const HomePageFlow = require ("../../flow/homePageFlow.js");
const RequestProcessFlow = require  ("../../flow/requestProcessFlow.js");
const faker = require ("../../utils/faker");


describe('basic details tests', async ()=>{


    it('test01_businessOwnerLogin', async ()=>{
        console.log("test1")

        await NiceToMeetFlow.basicDetails(1, faker.fakerFirstName(), faker.fakerLastName(), "0526080164",faker.fakerEmailAddress());

        await browser.pause(500);
        await expect(browser).toHaveUrlContaining("otp");

    });

    it('test03_externalCounselorLogin', async ()=>{
        console.log("test2")

        await NiceToMeetPage.selectRequestSender(2);
        await NiceToMeetPage.clickCloseCounselorPopup();
        await NiceToMeetPage.selectRequestSender(2);
        await NiceToMeetPage.clickAcceptCounselorPopup();

        await expect(browser).toHaveUrlContaining("Advisors");

    });
    
    it('test04_firstNameField', async ()=>{
        console.log("test3")
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
    });


})

