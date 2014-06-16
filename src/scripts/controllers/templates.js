'use strict';

angular.module('app').controller('TemplatesController', ['$scope', '$log', 'TemplateHandler', 'PubSub',

    function($scope, $log, TemplateHandler, PubSub) {
        $scope.name = '';
        $scope.internal = {};
        $scope.templates = [];

        $scope.init = function() {
            $scope.templates = TemplateHandler.templates();
        };

        $scope.save = function() {
            if (!$scope.name)
                return;

            PubSub.publish('Template::Save', [$scope.name]);
        };

        $scope.load = function() {

            var template = TemplateHandler.load($scope.selectedTemplate);

            if (template !== undefined) {
                $scope.name = template.name;
                PubSub.publish('Template::Load', [template.template]);
            }

        };

        $scope.init();

        PubSub.subscribe('Template::Update', function() {
            $scope.init();
        });
    }
]);
