'use strict';

angular.module('app').controller('GenerateController', ['$scope', '$log', 'PubSub',

    function($scope, $log, PubSub) {
        $scope.rows = 10;
        $scope.canGenerate = true;

        $scope.generate = function() {
            if (!$scope.canGenerate)
                return;

            PubSub.publish('GenerateRequest', [{
                rows: $scope.rows
            }]);

            //$scope.canGenerate = false;
        };

        PubSub.subscribe('GenerateComplete', function() {
            $log.debug('PubSub.GenerateComplete');

            //$scope.canGenerate = true;
        });

    }
]);
