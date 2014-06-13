'use strict';

angular.module('app').directive('typeSelect', ['ChanceTypes',
    function(ChanceTypes) {

        return {
            restrict: 'E',
            scope: {
                model: '=ngModel',
            },
            controller: function($scope) {
                $scope.types = ChanceTypes;
            },
            template: '<select ng-model="model">' +
                '<optgroup ng-repeat="ftype in types" label="{{ftype.typeName}}">' +
                    '<option ng-repeat="dtype in ftype.types">{{dtype}}</option>' +
                '</optgroup>' +
            '</select>'
        };
    }
]);
