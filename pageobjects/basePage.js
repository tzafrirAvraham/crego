

module.exports = class BasePage {
    
    async click(element){
        await element.scrollIntoView();
        await browser.pause(3000);
        await element.waitForClickable({ timeout: 12000 });
        return element.click();
    }

    setText(element, text){
        return element.setValue(text);
    }

    getText(element){
        return element.getText();
    }
    displayed(element){
        return element.waitForDisplayed({ timeout: 6000 });
    }

    async chooseFromList(num){

        let list= await $$("ul[role='listbox'] li");
        await list[num].click();
            
        }
    }

    // module.exports = new BasePage();




