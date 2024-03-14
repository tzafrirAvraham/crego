const RequestProcessPage= require  ("../pageobjects/requestProcess.page.js");


class RequestProcessFlow{


    goToNiceToMeetPage(){
        RequestProcessPage.clickOnSubmitQuickRequestButton();
    }

    goToUserDetailsPage(){
        RequestProcessPage.clickOnSubmitQuickRequestButton2();
    }

}
module.exports = new RequestProcessFlow();