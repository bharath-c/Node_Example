define(['angular','angularMock','app'], function(angular, app) {

    describe('ProvaCtrl', function() {
        beforeEach(module('mainApp'));

        console.log("prova...");

        var $controller;

        beforeEach(inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        describe('firstTest', function() {
            var $scope, controller;

            beforeEach(function() {
                $scope = {};
                controller = $controller('ProvaCtrl', { $scope: $scope });
            });

            it('helloworld', function() {
                $scope.user = 'Alessandro';
                expect($scope.printHello()).toEqual('Hello World Alessandro');
            });

        });
    });

});
