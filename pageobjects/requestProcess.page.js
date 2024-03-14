const BasePage=require ("./basePage.js");


class RequestProcessPage extends BasePage{

    get submitQuickRequestButton(){ return $(".styles_cta_container__kPNrp button"); }
    get submitQuickRequestButton2(){ return $("//*[text()= 'להגשת בקשה מהירה']"); }





    async clickOnSubmitQuickRequestButton(){
        return await super.click(this.submitQuickRequestButton);
    }

    async clickOnSubmitQuickRequestButton2(){
        return await super.click(this.submitQuickRequestButton2);
    }



}

module.exports = new RequestProcessPage();