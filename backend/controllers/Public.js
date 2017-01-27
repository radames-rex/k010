'use strict';

var url = require('url');
var Public = require('./PublicService');
var Utils = require('./Utils');

module.exports.peopleIdDELETE = function peopleIdDELETE (req, res, next) {
  Public.peopleIdDELETE(req.swagger.params, Utils.setCORS(res), next);
};

module.exports.peopleIdGET = function peopleIdGET (req, res, next) {
  Public.peopleIdGET(req.swagger.params, Utils.setCORS(res), next);
};

module.exports.peopleIdOPTIONS = function peopleIdOPTIONS (req, res, next) {
  Public.peopleIdOPTIONS(req.swagger.params, Utils.setCORS(res), next);
};

module.exports.peopleIdPUT = function peopleIdPUT (req, res, next) {
  Public.peopleIdPUT(req.swagger.params, Utils.setCORS(res), next);
};

module.exports.peopleOPTIONS = function peopleOPTIONS (req, res, next) {
  Public.peopleOPTIONS(req.swagger.params, Utils.setCORS(res), next);
};

module.exports.peoplePOST = function peoplePOST (req, res, next) {
  Public.peoplePOST(req.swagger.params, Utils.setCORS(res), next);
};

module.exports.peoplesGET = function peoplesGET (req, res, next) {
  Public.peoplesGET(req.swagger.params, Utils.setCORS(res), next);
};
