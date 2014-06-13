'use strict';

angular.module('app').factory('ChanceTypes', function() {

    var types = [];

    types.push({
        typeName: 'Basics',
        types: ['bool', 'character', 'floating', 'integer', 'natural', 'string']
    });

    types.push({
        typeName: 'Text',
        types: ['paragraph', 'sentence', 'syllable', 'word']
    });

    types.push({
        typeName: 'Person',
        types: ['age', 'birthday', 'first', 'gender', 'last', 'name', 'prefix']
    });

    types.push({
        typeName: 'Web',
        types: ['color', 'domain', 'email', 'fbid', 'google_analytics', 'hashtag', 'ip', 'ipv6', 'klout', 'tld', 'twitter']
    });

    types.push({
        typeName: 'Address',
        types: ['address', 'areacode', 'city', 'coordinates', 'latitude', 'longitude', 'phone', 'postal', 'province', 'radio', 'state', 'street', 'tv', 'zip']
    });

    types.push({
        typeName: 'Time',
        types: ['ampm', 'date', 'hammertime', 'hour', 'millisecond', 'minute', 'month', 'second', 'timestamp', 'year']
    });

    types.push({
        typeName: 'Finance',
        types: ['cc', 'cc_type', 'dollar', 'exp', 'exp_month', 'exp_year']
    });

    types.push({
        typeName: 'Misc',
        types: ['guid', 'hash']
    });

    return types;
});
