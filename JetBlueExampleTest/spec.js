describe('jetblue homepage', function () {

    beforeEach(function () {
        browser.get('http://www.jetblue.com/#/');
    });
    /* it('should have a title', function () {
        expect(browser.getTitle()).toEqual('JetBlue | Airline Tickets, Flights, and Airfare');
     }); */
    /* it('should allow user to sign in', function () {
        element(by.id('email_field')).sendKeys('tfxact@gmail.com');
        element(by.id('password_field')).sendKeys(8019328746);
        element(by.id('signin_btn')).click();
        expect(browser.getCurrentUrl()).toBe('https://www.jetblue.com/?intcmp=1510014917967#/');
       // browser.sleep(10000);
    }); */
    /*  it('should click on sign in link in the top right corner of the page', function () {
          browser.ignoreSynchronization = true;
          browser.waitForAngular();
          element(by.xpath("//*[@id='jb-header']/div/div[2]/ul/li[7]/a")).click();
          expect(browser.getCurrentUrl()).toBe('https://book.jetblue.com/B6.auth/login?intcmp=hd_signin&service=https://www.jetblue.com/default.aspx');
          browser.wait(function () {
              element(by.xpath("//*[@id='username']")).sendKeys('tfxact@gmail.com');
              element(by.xpath("//*[@id='password']")).sendKeys(8019328746);
              element(by.xpath("//*[@id='casLoginForm']/div/div[3]/div[4]/div/div/button")).click();
           });
          browser.sleep(10000);
      }); */
    it('should click on plan a trip', function () {
        element(by.xpath("//*[@id='jb-primary-links']/li[1]/a")).click();
        expect(browser.getCurrentUrl()).toBe('https://www.jetblue.com/plan-a-trip/#/');
    });

    it('should click on manage flights', function () {
        element(by.xpath("//*[@id='jb-primary-links']/li[2]/a")).click();
        expect(browser.getCurrentUrl()).toBe('https://book.jetblue.com/B6.myb/#/landing');
    });
    it('should click on where we jet', function () {
        element(by.xpath("//*[@id='jb-primary-links']/li[3]/a")).click();
        expect(browser.getCurrentUrl()).toBe('https://www.jetblue.com/wherewejet/');
    });
    it('should click on flying on jetblue', function () {
        element(by.xpath("//*[@id='jb-primary-links']/li[4]/a")).click();
        expect(browser.getCurrentUrl()).toBe('https://www.jetblue.com/flying-on-jetblue/');
    });
    it('should click on travel information', function () {
        element(by.xpath("//*[@id='jb-primary-links']/li[5]/a")).click();
        expect(browser.getCurrentUrl()).toBe('https://www.jetblue.com/travel/');
    });
    it('should click on trueblue', function () {
        element(by.xpath("//*[@id='tbmvLoggedOutMode']")).click();
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toBe('https://trueblue.jetblue.com/web/trueblue/home');
    });
});
     
