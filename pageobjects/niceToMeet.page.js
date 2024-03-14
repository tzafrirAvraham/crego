const BasePage= require ("./basePage.js");
const {startStep, endStep, addStep} = require('@wdio/allure-reporter');



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
        startStep('set request sender');
        await super.click(this.requestSenderField)
        let click= await super.chooseFromList(text);
        endStep();
        return click

    }
    
    async setFirstName(firstName){
        startStep(`set first name ${firstName}`); 
        let click= await super.setText(this.firstNameField, firstName);
        endStep();
        return click
    }

    async setLastName(lastName){
        startStep(`set last name ${lastName}`); 
        let click= await super.setText(this.lastNameField, lastName);
        endStep();
        return click
    }

    async setPhone(phone){
        startStep(`set phone number ${phone}`); 
        let click= await super.setText(this.phoneNumberField, phone);
        endStep();
        return click
    }

    async setEmail(email){
        startStep(`set email address ${email}`); 
        let emaill= await super.setText(this.emailField, email);
        endStep();
        return emaill
    }

    async clickOnNext(){
        startStep('click on next button');
        let click= await super.click(this.nextButton);
        endStep();
        return click
    }

    async clickCloseCounselorPopup(){
        startStep('click on Close Counselor Popup');
        let click= await super.click(this.closeCounselorPopupButton);
        endStep()
        return click
        
    }

    async clickAcceptCounselorPopup(){
         await super.click(this.acceptCounselorPopupButton);
         await browser.acceptAlert();
    }

    getErrorMessageOfRequestSender(){
        startStep('get error message request sender')
        let errorMessage= super.getText(this.requestSenderErrorMessage);
        endStep();
        return errorMessage
    }

    getErrorMessageFirstNameField(){
        startStep('get error message first name')
        let errorMessage= super.getText(this.firstNameErrorMessage);
        endStep();
        return errorMessage
    }

    getErrorMessageLastNameField(){
        startStep('get error message last name')
        let errorMessage= super.getText(this.lastNameErrorMessage);
        endStep();
        return errorMessage
        
    }

    getErrorMessagePhoneNumberField(){
        startStep('get error message phone number')
        let errorMessage= super.getText(this.phoneNumberErrorMessage);
        endStep();
        return errorMessage
       
    }

    getErrorMessageEmailField(){
        startStep('get error message email field')
        let errorMessage= super.getText(this.emailErrorMessage);
        endStep();
        return errorMessage
    }
 



}

module.exports = new NiceToMeetPage();