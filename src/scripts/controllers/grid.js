'use strict';

angular.module('app').controller('GridController', ['$scope', '$log', 'PubSub',

    function($scope, $log, PubSub) {
        $scope.internal = {};
        $scope.gridModel = [];
        $scope.test = 'test';

        $scope.addColumn = function() {

            $log.debug('add column');

            var column = $scope.gridModel.length + 1;

            $scope.gridModel.push({
                id: chance.guid(),
                column: column,
                name: 'column ' + column,
                type: 'name',
                properties: '{}',
                example: ''
            });
        };

        $scope.deleteColumn = function(id) {
            $scope.gridModel = _.remove($scope.gridModel, function(column) {
                return column.id !== id;
            });

            if ($scope.gridModel.length === 0)
                $scope.addColumn();
            else
                $scope.internal.resetColumnNumbering();
        };

        $scope.internal.resetColumnNumbering = function() {
            _.each($scope.gridModel, function(column, index) {
                column.column = index + 1;
            });
        };

        $scope.init = function() {
            $scope.gridModel = [];
            $scope.addColumn();
        };

        PubSub.subscribe('GenerateRequest', function(rows) {

            $log.debug('PubSub.GenerateRequest', rows);

            PubSub.publish('Generate', [{
                template: $scope.gridModel,
                rows: rows.rows
            }]);

        });

        $scope.init();
    }
]);
