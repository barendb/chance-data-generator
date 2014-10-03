'use strict';

angular.module('app').controller('OutputController', ['$scope', '$log', 'PubSub',

    function($scope, $log, PubSub) {
        $scope.internal = {};
        $scope.output = [];

        $scope.internal.cleanColumnName = function(columnName) {
            return columnName.replace(/[^\w]/gi, '');
        };

        $scope.internal.generateRow = function(template, row) {

            _.each(template, function(column) {
                row[$scope.internal.cleanColumnName(column.name)] = eval('chance.' + column.type + '(' + column.properties + ')');
            });

        };

        $scope.internal.generate = function(data) {


            $log.debug('PubSub.Generate', data);

            if (data === undefined || data === '') {
                return;
            }

            $scope.output = [];

            for (var i = 0; i < data.rows; i++) {

                var row = {};

                $scope.internal.generateRow(data.template, row);


                $scope.output.push(row);
            }

            $log.debug($scope.output);

            PubSub.publish('GenerateComplete', [{}]);
        };

        PubSub.subscribe('Generate', $scope.internal.generate);
    }
]);
