

class Alert{

    acceptAlert(){
     if( browser.isAlertOpen()){
          browser.acceptAlert();
     }
 
   }
 
 
 }
 
 module.exports = new Alert();