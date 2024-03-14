const BasePage= require ("./basePage.js");


class HomePage extends BasePage{

    get requestProcessButton(){ return $("//*[@id='/ApplicationFlow/303']"); }






    async clickOnRequestProcessButton(){
        return await super.click(this.requestProcessButton);
    }
    

}

module.exports = new HomePage();