describe('jetblue homepage', function () {
    var email = 
    beforeEach(function () {
        browser.get('http://www.jetblue.com/#/');
    });
        it('should have a title', function () {
           
            expect(browser.getTitle()).toEqual('JetBlue | Airline Tickets, Flights, and Airfare');
        });
        it('should allow user to sign in', function () {
            element(by.id('email_field')).sendKeys('tfxact@gmail.com');
            element(by.id('password_field')).sendKeys(8019328746);

            element(by.id('signin_btn')).click();

        });

       

});