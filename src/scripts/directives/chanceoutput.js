'use strict';

angular.module('app').directive('chanceOutput', function() {

	function generateOutput(element, type, properties) {
		properties = properties === undefined ? '' : properties;

		element.text(eval('chance.' + type + '(' + properties + ')'));
	}

    function link(scope, element, attrs) {

        scope.$watch(attrs.chanceOutput, function(value) {
        	scope.type = value;
            generateOutput(element, value, scope.properties);
        });

         scope.$watch(attrs.chanceProperties, function(value) {
            scope.properties = value;
            generateOutput(element, scope.type, value);
        });
    }

    return {
        link: link
    };
});
