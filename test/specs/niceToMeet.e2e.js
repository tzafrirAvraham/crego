
const NiceToMeetFlow = require  ("../../flow/niceToMeetFlow.js");
const NiceToMeetPage= require  ("../../pageobjects/niceToMeet.page.js");
const HomePageFlow = require ("../../flow/homePageFlow.js");
const RequestProcessFlow = require  ("../../flow/requestProcessFlow.js");
const faker = require ("../../utils/faker");
const {startStep, endStep, addStep} = require('@wdio/allure-reporter').default;


describe('basic details tests', async ()=>{


    it('test01_businessOwnerLogin', async ()=>{
        console.log("test1")
        
        await NiceToMeetFlow.basicDetails(1, faker.fakerFirstName(), faker.fakerLastName(), "0526080164",faker.fakerEmailAddress());
        

        await browser.pause(500);
        startStep('assertion url contains the woed otp')
        await expect(browser).toHaveUrlContaining("otp");
        endStep()

    });

    it('test03_externalCounselorLogin', async ()=>{
        console.log("test2")

        
        await NiceToMeetPage.selectRequestSender(2);
        // await NiceToMeetPage.clickCloseCounselorPopup();
        // await NiceToMeetPage.selectRequestSender(2);
        await NiceToMeetPage.clickAcceptCounselorPopup();
       

        startStep('assert url contain the word advisors')
        await expect(browser).toHaveUrlContaining("Advisors");
        endStep()

    });
    
    it('test04_firstNameField', async ()=>{
        console.log("test3")
        await NiceToMeetFlow.basicDetails(1,"1",faker.fakerLastName(),"0526080164",faker.fakerEmailAddress());

        let expectErrorMessage= "שדה לא תקין - אנא הקלד 2 תווים לפחות";
        let actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        startStep(`assert expected error message: ${expectErrorMessage} equal actual error message: ${actualErrorMessage}`);
        await expect(expectErrorMessage).toEqual(actualErrorMessage);
        endStep();

        await NiceToMeetPage.setFirstName("123456");
        await browser.pause(500);


        expectErrorMessage= "שדה לא תקין - אנא הקלד אותיות בלבד";
        actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        startStep(`assert expected error message: ${expectErrorMessage} equal actual error message: ${actualErrorMessage}`);
        await expect(expectErrorMessage).toEqual(actualErrorMessage);
        endStep();

        await NiceToMeetPage.setFirstName("*/!!");
        await browser.pause(500);


        actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        startStep(`assert expected error message: ${expectErrorMessage} equal actual error message: ${actualErrorMessage}`);
        expect(expectErrorMessage).toEqual(actualErrorMessage);
        endStep()

        await NiceToMeetPage.setFirstName("   ");
        await browser.pause(500);


        actualErrorMessage= await NiceToMeetPage.getErrorMessageFirstNameField();

        startStep(`assert expected error message: ${expectErrorMessage} equal actual error message: ${actualErrorMessage}`);
        expect(expectErrorMessage).toEqual(actualErrorMessage);
        endStep()

    })


})



