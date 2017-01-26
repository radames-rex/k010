'use strict';

var DBConfig = require('./DBConfig');
var People = require('./peopleModel');

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
    var db = DBConfig.dbConnect();
    db.once('open', function(){
      console.log('Conectado ao MongoDB.');
      var p = new People({
        name: args.people.value.name,
        email: args.people.value.email
      });
      p.save(function(err, p) {
        console.log('teste');
        if(err){
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
      arr = [];
    var db = DBConfig.dbConnect();
    db.once('open', function(){
      console.log('Conectado ao MongoDB.');
      People.find().exec(function(err, peoples){
        peoples.forEach(function(value){
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
