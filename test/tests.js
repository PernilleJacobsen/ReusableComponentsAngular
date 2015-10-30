describe('My Tests', function () {

    beforeEach(module('myApp'));

    describe('personFilt', function () {
        it('should take a json input of a person with a firstName and lastName and output a simple full name string',
                inject(function (personFilter) {
                    expect(personFilter(true).toBe('Peter Smith'));
                }));
    });

    describe('MyCtrl', function () {
        var scope, ctrl;

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller("controller", {$scope: scope});
        }));

        it('should change cases in three different ways', function () {
            expect(scope.titled).toBe("My Example Service");
            expect(scope.titled).toBe("MyExampleService");
            expect(scope.titled).toBe("My-Example-Service");
        });
    });

    describe('checkmark', function () {

        it('should convert boolean values to unicode checkmark or cross',
                inject(function (checkmarkFilter) {
                    expect(checkmarkFilter(true)).toBe('\u2713');
                    expect(checkmarkFilter(false)).toBe('\u2718');
                }));
    });
});