const BasePage= require ("./basePage.js");
// const {startStep, endStep, addStep} = require('@wdio/allure-reporter').default;



class NiceToMeetPage extends BasePage{

    get backToHomePageButton(){ return $(".navigation");}
    get requestSenderField(){ return $("div[aria-haspopup='listbox']");}
    get requestSenderOptions(){ return $$("ul[role='listbox'] li");}
    get firstNameField(){ return $("input[name='firstName']");}
    get lastNameField(){ return $("input[name='lastName']");}
    get phoneNumberField(){ return $("input[name='mobilePhone']");}
    get emailField(){ return $("input[name='email']");}
    get requestSenderErrorMessage(){ return $(".select-root-error");}
    get firstNameErrorMessage(){ return $(".wrapper-input.undefined:nth-of-type(1) [class='err-msg']");}
    get lastNameErrorMessage(){ return $(".wrapper-input.undefined:nth-of-type(2) [class='err-msg']");}
    get phoneNumberErrorMessage(){ return $(".wrapper-input.undefined:nth-of-type(3) [class='err-msg']");}
    get emailErrorMessage(){ return $(".wrapper-input.undefined:nth-of-type(4) [class='err-msg']");}
    get nextButton(){ return $("//*[text()= 'הבא']");}
    get closeCounselorPopupButton(){ return $(".left button");}
    get acceptCounselorPopupButton(){ return $(".inLine-LeaveProcessAdvisor div.wrapper-button button");}
    get leaveProcessPopup(){ return $(".inLine-LeaveProcess");}
    get leaveProcessPopupCloseButton(){ return $(".left button");}
    get leaveProcessPopupWantToStayButton(){ return $(".inLine-LeaveProcess div.wrapper-button button");}
    get leaveProcessPopupBackInAnotherTimeButton(){ return $(".MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.muirtl-1ymqxik");}



    async selectRequestSender(text){
        // startStep('set request sender');
        await super.click(this.requestSenderField)
        // endStep();
        return await super.chooseFromList(text);

    }
    
    async setFirstName(firstName){
        // startStep('set first name'); 
        // endStep();
        return await super.setText(this.firstNameField, firstName);
    }

    async setLastName(lastName){
        // startStep('set last name'); 
        // endStep();
        return await super.setText(this.lastNameField, lastName);
    }

    async setPhone(phone){
        // startStep('set phone number'); 
        // endStep();
        return await super.setText(this.phoneNumberField, phone);
    }

    async setEmail(email){
        // startStep('set email address'); 
        // endStep();
        return await super.setText(this.emailField, email);
    }

    async clickOnNext(){
        // startStep('click on next button'); 
        // endStep();
        return await super.click(this.nextButton);
    }

    async clickCloseCounselorPopup(){
        return await super.click(this.closeCounselorPopupButton);
    }

    async clickAcceptCounselorPopup(){
         await super.click(this.acceptCounselorPopupButton);
         await browser.acceptAlert();
    }

    getErrorMessageOfRequestSender(){
        return super.getText(this.requestSenderErrorMessage);
    }

    getErrorMessageFirstNameField(){
        return super.getText(this.firstNameErrorMessage);
    }

    getErrorMessageLastNameField(){
        return super.getText(this.lastNameErrorMessage);
    }

    getErrorMessagePhoneNumberField(){
        return super.getText(this.phoneNumberErrorMessage);
    }

    getErrorMessageEmailField(){
        return super.getText(this.emailErrorMessage);
    }
 



}

module.exports = new NiceToMeetPage();