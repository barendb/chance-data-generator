'use strict';

angular.module('app').factory('PubSub', function() {
    var cache = {};
    return {
        publish: function(topic, args) {
            if (cache[topic]) {
                angular.forEach(cache[topic], function(message) {
                    message.apply(null, args || []);
                });
            }
        },

        subscribe: function(topic, callback) {
            if (!cache[topic]) {
                cache[topic] = [];
            }
            cache[topic].push(callback);
            return [topic, callback];
        },

        unsubscribe: function(handle) {
            var t = handle[0];
            if (cache[t]) {
                angular.forEach(cache[t], function(idx) {
                    if (this === handle[1]) {
                        cache[t].splice(idx, 1);
                    }
                });
            }
        },

        subscribers: function(topic) {
            if (!cache[topic]) {
                return 0;
            }

            return cache[topic].length;
        }
    };
});
