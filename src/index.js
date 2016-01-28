var angular = require('angular');
var uirouter = require('angular-ui-router');

var app = angular.module('app', ['ui.router']);

var mailService = require('./mailService')(app);
var mailRowDirective = require('./mailRowDirective')(app);
var inboxController = require('./inboxController')(app);
var messageController = require('./messageController')(app);

app.config(['$stateProvider',
  function(stateProvider) {
    stateProvider.state('inbox', {
      url: '/',
      template: require("./template/inbox.jade!"),
      controller: 'InboxController'
    }).state('message', {
      url: '/message/:id',
      template: require('./template/message.jade!'),
      controller: 'MessageController'
    });
  }
]);