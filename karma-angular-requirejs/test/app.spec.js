define(['angular-mocks', 'app'], function() {
    describe('Service: helloWorldService', function() {
        var helloWorldService;
        
        beforeEach(function() {
            module('myApp');

            inject(function(_helloWorldService_) {
                helloWorldService = _helloWorldService_;
            });
        });

        it('hello should working fine', function() {
            var result = helloWorldService.hello('Jiu');
            expect(result).toBe('Hello Jiu');
        });
    });
});