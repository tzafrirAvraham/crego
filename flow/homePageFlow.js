const homePage= require ("../pageobjects/home.page.js");


class HomePageFlow{

    goToRequestProcessPage(){
        homePage.clickOnRequestProcessButton();
    }
}

module.exports = new HomePageFlow();