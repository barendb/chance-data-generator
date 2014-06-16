'use strict';

angular.module('app').factory('TemplateHandler', ['$log', '$localStorage',
    function($log, $localStorage) {

        var service = {
            internal: {}
        };

        service.templates = function() {
            if (!$localStorage.templates)
                return [];

            var templates = _.pluck($localStorage.templates, 'name');

            $log.debug('available templates', templates);

            return templates;
        };

        service.load = function(name) {
            if (!$localStorage.templates)
                return null;

            var template = _.find($localStorage.templates, {
                name: name
            });

            $log.debug('loaded template ' + name, template);

            return template;
        };

        service.save = function(name, template) {
            if (!$localStorage.templates)
                $localStorage.templates = [];

            
            $localStorage.templates = _.remove($localStorage.templates, function(template) {
                return template.name !== name
            });
            
            $localStorage.templates.push({
                name: name,
                template: template
            });

            $log.debug('saved template ' + name, template);
        };

        return service;

    }
]);
