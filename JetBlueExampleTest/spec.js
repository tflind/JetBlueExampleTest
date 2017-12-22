describe('jetblue homepage', function () {
    it('should have a title', function () {
        browser.get('http://www.jetblue.com/#/');
        expect(browser.getTitle()).toEqual('JetBlue | Airline Tickets, Flights, and Airfare');
    });
});