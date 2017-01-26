'use strict';

var DBConfig = require('./DBConfig');
var People = require('./peopleModel');

exports.peopleIdDELETE = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    var db = DBConfig.dbConnect();
    db.once('open', function() {
        console.log('Conectado ao MongoDB.');
        People.remove({
            "_id": args.id.value
        }, function(err) {
            if (err) {
                return console.error(err);
                console.dir(p);
            }
            DBConfig.dbClose();
        });
    });
    res.end();
}

exports.peopleIdGET = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    var data = {},
        db = DBConfig.dbConnect();
    db.once('open', function() {
        console.log('Conectado ao MongoDB.');
        People.findOne({
            "_id": args.id.value
        }, function(err, people) {
            if (err) {
                return console.error(err);
                console.dir(p);
            }
            data['application/json'] = {
                "name": people.name,
                "email": people.email,
                "amigo": people.friend
            };
            DBConfig.dbClose();
            if (Object.keys(data).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    });

}

exports.peopleIdOPTIONS = function(args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    var data = {};
    data['application/json'] = ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'];
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
    var data = {},
        db = DBConfig.dbConnect();
    data['application/json'] = {
        "name": args.people.value.name,
        "email": args.people.value.email
    };
    db.once('open', function() {
        console.log('Conectado ao MongoDB.');
        People.findOneAndUpdate({
            "_id": args.id.value
        }, data['application/json'], function(err, people) {
            if (err) {
                return console.error(err);
                console.dir(p);
            }
            DBConfig.dbClose();
            if (Object.keys(data).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    });
}

exports.peopleOPTIONS = function(args, res, next) {
    /**
     * parameters expected in the args:
     **/
    var data = {};
    data['application/json'] = ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'];
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
    var db = DBConfig.dbConnect();
    db.once('open', function() {
        console.log('Conectado ao MongoDB.');
        var p = new People({
            name: args.people.value.name,
            email: args.people.value.email
        });
        p.save(function(err, p) {
            if (err) {
                return console.error(err);
                console.dir(p);
            }
            DBConfig.dbClose();
        });
    });
    res.end();
}

exports.peoplesGET = function(args, res, next) {
    /**
     * parameters expected in the args:
     **/
    var data = {},
        arr = [],
        db = DBConfig.dbConnect();
    db.once('open', function() {
        console.log('Conectado ao MongoDB.');
        People.find().exec(function(err, peoples) {
            if (err) {
                return console.error(err);
                console.dir(p);
            }
            peoples.forEach(function(value) {
                arr.push({
                    "id": value['_id'],
                    "name": value['name']
                });
            });
            data['application/json'] = arr;
            DBConfig.dbClose();
            if (Object.keys(data).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data[Object.keys(data)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    });

}
