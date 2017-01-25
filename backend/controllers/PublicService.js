'use strict';

exports.peopleIdDELETE = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    // no response value expected for this operation
    res.end();
}

exports.peopleIdGET = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    var data = {};
    data['application/json'] = {
        "name": "aeiou",
        "email": "aeiou",
        "amigo": "aeiou"
    };
    if (Object.keys(data).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.peopleIdOPTIONS = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    var data = {};
    data['application/json'] = ["aeiou"];
    if (Object.keys(data).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.peopleIdPUT = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     * people (People_1)
     **/
    // no response value expected for this operation
    res.end();
}

exports.peopleOPTIONS = function(args, res, next) {
    /**
     * parameters expected in the args:
     **/
    var data = {};
    data['application/json'] = ["aeiou"];
    if (Object.keys(data).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.peoplePOST = function(args, res, next) {
    /**
     * parameters expected in the args:
     * people (People)
     **/
    // no response value expected for this operation
    res.end();
}

exports.peoplesGET = function(args, res, next) {
    /**
     * parameters expected in the args:
     **/
    var data = {};
    data['application/json'] = [{
        "name": "aeiou",
        "id": "aeiou"
    }];
    if (Object.keys(data).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}
