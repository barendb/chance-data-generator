'use strict';

angular.module('app').directive('chanceOutput', function() {

    function link(scope, element, attrs) {
        scope.$watch(attrs.chanceOutput, function(value) {
            console.log('change', value);
            element.text(eval('chance.' + value + '()'));
        });
    }

    return {
        link: link
    };
});
